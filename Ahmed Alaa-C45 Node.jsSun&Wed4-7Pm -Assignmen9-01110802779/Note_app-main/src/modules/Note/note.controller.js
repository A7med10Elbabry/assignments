import { Router } from "express";
import { auth } from "../../middleWare/auth.middleware.js";
import {
  aggregateNotesByTitle,
  creatNote,
  deleteAllNotes,
  deleteNote,
  getNoteById,
  getNotesByContent,
  getNotesPaginateSort,
  getNotesWithUserInfo,
  replaceUpdate,
  updateNote,
  updateTitleUser,
} from "./note.service.js";
const router = Router();

router.get("/paginate-sort", auth, async (req, res) => {
  try {
    const userId = req.userId;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const result = await getNotesPaginateSort(userId, page, limit);

    res.status(200).json({ message: "Notes fetched successfully", result });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/notesById/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;

    const result = await getNoteById(id);

    res.status(200).json({
      message: "Note fetched successfully",
      result,
    });
  } catch (error) {
    res.status(error.cause?.status || 400).json({ message: error.message });
  }
});

router.get("/note-by-content", auth, async (req, res) => {
  try {
    const { content } = req.query;

    if (!content) {
      return res.status(400).json({ message: "Content query is required" });
    }

    const notes = await getNotesByContent(content);

    res.status(200).json({
      message: "Notes fetched successfully",
      notes,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/note-with-user", async (req, res) => {
  try {
    const result = await getNotesWithUserInfo();

    res.status(200).json({
      message: "Notes with user info fetched successfully",
      result,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/aggregate", auth, async (req, res) => {
  try {
    const { title } = req.query;
    const result = await aggregateNotesByTitle(title);

    res.status(200).json({
      message: "Aggregated notes fetched successfully",
      result,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/addNote", auth, async (req, res, next) => {
  const userId = req.userId;
  const result = await creatNote(userId, { ...req.body });
  return res.status(201).json({ message: "Note created", result });
});
router.patch("/updateNote/:noteId", auth, async (req, res, next) => {
  const userId = req.userId;
  const { noteId } = req.params;
  const result = await updateNote(userId, noteId, { ...req.body });
  return res.status(200).json({ message: "Note updated", result });
});
router.put("/updateReplace/:noteId", auth, async (req, res, next) => {
  const userId = req.userId;
  const { noteId } = req.params;
  console.log({ noteId, userId });

  const result = await replaceUpdate(userId, noteId, { ...req.body });
  return res.status(200).json({ message: "Note updated", result });
});
router.patch("/updateTitle", auth, async (req, res, next) => {
  const userId = req.userId;
  const { title } = req.body;
  console.log({ userId });

  const result = await updateTitleUser(userId, title);
  return res.status(200).json({ message: "Note updated title", result });
});
router.delete("/deleteUser/:noteId", async (req, res, next) => {
  const { noteId } = req.params;
  // const userId = req.userId;

  const result = await deleteNote(noteId);
  return res.status(200).json({ message: "Note deleted", result });
});

router.delete("/allnotes", auth, async (req, res) => {
  try {
    const userId = req.userId;

    const result = await deleteAllNotes(userId);

    res.status(200).json({
      message: "All notes deleted successfully",
      result,
    });
  } catch (error) {
    res.status(error.cause?.status || 400).json({ message: error.message });
  }
});

export default router;
