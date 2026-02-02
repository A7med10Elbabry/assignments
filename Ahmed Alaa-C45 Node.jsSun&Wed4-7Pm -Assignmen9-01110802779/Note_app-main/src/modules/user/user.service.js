import jwt from "jsonwebtoken";
import { UserModel } from "../../DB/model/user.model.js";
import bcrypt from "bcrypt";

export const signup = async (inputs) => {
  const { name, email, password, age, phone } = inputs;

  const checkEmail = await UserModel.findOne({ email });

  if (checkEmail) {
    throw new Error("Email is Exist", { cause: { status: 409 } });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await UserModel.create({
    name,
    email,
    password: hashedPassword,
    age,
    phone,
  });
  return user;
};

export const Login = async (inputs) => {
  const { email, password } = inputs;
  // console.log({ password });

  const user = await UserModel.findOne({ email });

  if (!user) {
    throw new Error("Invalid email or password", { cause: { status: 404 } });
  }

  console.log("User from DB:", user);
  console.log("Token will have id:", user._id.toString());

  // console.log({ userPass: user.password });

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Invalid email or password", { cause: { status: 404 } });
  }

  const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  return { user, token };
};

export const updateUser = async (userId, updates) => {
  if (updates.password) {
    delete updates.password;
  }

  if (updates.email) {
    const emailExist = await UserModel.findOne({
      email: updates.email,
      _id: { $ne: userId },
    });

    if (emailExist) {
      throw new Error("email is Exist", { cause: { status: 409 } });
    }
  }

  const userUpdate = await UserModel.findByIdAndUpdate(
    userId,

    updates,
    { new: true },
  ).select("-password");

  if (!userUpdate) {
    throw new Error("Invalid User account", { cause: { status: 404 } });
  }

  return userUpdate;
};

export const deleteUser = async (userId) => {
  const user = await UserModel.deleteOne({ _id: userId });
  if (user.deletedCount === 0) {
    throw new Error("Invalid User account", { cause: { status: 404 } });
  }

  return user;
};

export const getUserId = async (userId) => {
  const user = await UserModel.findById({ _id: userId }).select(
    "-password -phone",
  );
  if (!user) {
    throw new Error("Invalid User account", { cause: { status: 404 } });
  }
  return user;
};
