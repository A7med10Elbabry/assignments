import { NoteModel } from "../../DB/model/Note.model.js";

export const creatNote = async (userId, inputs) => {
  const { title, content } = inputs;

  const checkUser = await NoteModel.findById(userId);

  if (checkUser) {
    throw new Error("User Is Not Found", { cause: { status: 404 } });
  }

  const checkNote = await NoteModel.findOne({ title, createdBy: userId });
  if (checkNote) {
    throw new Error("Note Exist");
  }

  const create = await NoteModel.create({ createdBy: userId, title, content });
  return create;
};

export const updateNote = async (userId, noteId, inputs) => {
  const { title, content } = inputs;

  const update = await NoteModel.findOneAndUpdate(
    { createdBy: userId, _id: noteId },
    {
      $set: { title, content },
      $inc: { __v: 1 },
    },
    {
      new: true,
    },
  );

  if (!update) {
    throw new Error("Note not found", { cause: { status: 404 } });
  }
  return update;
};

export const replaceUpdate = async (userId, noteId, inputs) => {
  const { title, content } = inputs;

  const replace = await NoteModel.findByIdAndUpdate(
    { createdBy: userId, _id: noteId },
    {
      title,
      content,
      createdBy: userId,
    },
    { new: true },
  );

  if (!replace) {
    throw new Error("Note not found or unauthorized", {
      cause: { status: 404 },
    });
  }

  return replace;
};

export const updateTitleUser = async (userId, title) => {
  if (!title || title.trim() === "") {
    throw new Error("Title is required");
  }

  const update = await NoteModel.updateMany(
    { createdBy: userId },
    {
      $set: { title },
      $inc: { __v: 1 },
    },
    {
      new: true,
    },
  );

  if (update.modifiedCount === 0) {
    throw new Error("falid updated");
  }

  return update;
};

export const deleteNote = async (noteId) => {
  const user = await NoteModel.deleteOne({ _id: noteId });
  if (user.deletedCount === 0) {
    throw new Error("Note not found or invalid noteId", {
      cause: { status: 404 },
    });
  }
  return user;
};

export const getNotesPaginateSort = async (userId, page = 1, limit = 10) => {
  const skip = (page - 1) * limit;

  const notes = await NoteModel.find({ createdBy: userId })
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  const totalNotes = await NoteModel.countDocuments({ createdBy: userId });

  return {
    page,
    limit,
    totalNotes,
    totalPages: Math.ceil(totalNotes / limit),
    notes,
  };
};

export const getNoteById = async (noteId) => {
  const note = await NoteModel.findOne({ _id: noteId });

  if (!note) {
    throw new Error("Note not found or unauthorized", {
      cause: { status: 404 },
    });
  }

  return note;
};

export const getNotesByContent = async (content) => {
  const notes = await NoteModel.find({
    content: { $regex: content, $options: "i" },
  }).sort({ createdAt: -1 });

  return notes;
};

export const getNotesWithUserInfo = async () => {
  const notes = await NoteModel.find()
    .select("title createdAt createdBy")
    .populate({
      path: "createdBy",
      select: "email",
    })
    .sort({ createdAt: -1 });

  return notes;
};

export const aggregateNotesByTitle = async (titleQuery) => {
  const searchTitle = titleQuery || "";

  const notes = await NoteModel.aggregate([
    {
      $match: { title: { $regex: searchTitle, $options: "i" } },
    },
    {
      $lookup: {
        from: "users",
        localField: "createdBy",
        foreignField: "_id",
        as: "userInfo",
      },
    },
    {
      $unwind: "$userInfo",
    },
    {
      $project: {
        title: 1,
        createdAt: 1,
        "userInfo.name": 1,
        "userInfo.email": 1,
      },
    },
  ]);

  return notes;
};

export const deleteAllNotes = async (userId) => {
  const result = await NoteModel.deleteMany({ createdBy: userId });

  if (result.deletedCount === 0) {
    throw new Error("No notes found for this user", { cause: { status: 404 } });
  }

  return result;
};
