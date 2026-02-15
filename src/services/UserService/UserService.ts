import { User } from "../../database/models/UserModel";

export const getAllUsers = async () => {
    const data=  await User.findAll();
    console.log("sevice",data)
  return data;
};

export const createUser = async (data: User) => {
const userdata= await User.create(data);
  return userdata 
};
