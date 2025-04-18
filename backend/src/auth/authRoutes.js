import express from "express";
import { register, login } from "./authControllers.js";

export const authRoutes = express.Router();

authRoutes.post("/register", register);
authRoutes.post("/login", login);
