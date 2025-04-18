import express from "express";
import cors from "cors";
import { Users } from "./user/userModel.js";
import "./mongo.js";
import { authRoutes } from "./auth/authRoutes.js";

const app = express();

app.use(express.json());

app.use(cors());
app.use("/auth", authRoutes);

app.listen(3000, () => {
  console.log("server started on 3000");
});
