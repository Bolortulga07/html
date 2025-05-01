import express from "express";
import cors from "cors";
import "./mongo.js";
import { authRoutes } from "./auth/authRoutes.js";
import { movieRouthes } from "./movies/movieRoutes.js";

const app = express();

app.use(express.json());

app.use(cors());
app.use("/auth", authRoutes);
app.use("/movies", movieRouthes);

app.listen(3000, () => {
  console.log("server started on 3000");
});
