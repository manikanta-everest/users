import { Request, Response } from "express";
import * as UserService from "../../services/UserService/UserService";

export const getAllUsers = async (_req: Request, res: Response) => {
    try {
        const users = await UserService.getAllUsers();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({ message: "Failed to fetch users" });
    }
};

export const createUser = async (req: Request, res: Response) => {
    try {
        const { name, email } = req.body;
        if (!name || !email) {
            return res.status(400).json({ message: 'Name and email are required' });
        }
        const user = await UserService.createUser(req.body);

        return res.status(201).json(user);
    } catch (error) {
        return res.status(500).json({ message: "Failed to create user" });
    }
};
