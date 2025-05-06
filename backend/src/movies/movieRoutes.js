import express from "express";
import {
  deleteMovie,
  getMovieAndUpdate,
  getMovies,
  movieDetail,
  postMovies,
  updateMovie,
} from "./movieController.js";

export const movieRouthes = express.Router();

movieRouthes.post("/postMovies", postMovies);
movieRouthes.get("/getMovies", getMovies);
movieRouthes.delete("/deleteMovie/:id", deleteMovie);
movieRouthes.put("/updateMovie/:id", updateMovie);
movieRouthes.get("/getMovieAndUpdate/:id", getMovieAndUpdate);
movieRouthes.get("/movieDetail/:id", movieDetail);
