import { User } from "../../database/models/UserModel";

export const getAllUsers = async () => {
  try {
    const data = await User.findAll();
    return data;
  } catch (e) {
    console.log("error", e);
    throw e;
  }
};

export const createUser = async (data: User) => {
  try {
    const userdata = await User.create(data);
    return userdata
  } catch (e) {
    console.log("error", e)
    throw e;
  }
};
