import { Movies } from "../models/movieModel.js";

export const postMovies = async (req, res) => {
  try {
    const { title, director, plot, releaseDate, image } = req.body;

    const movie = await Movies.create({
      title,
      director,
      plot,
      releaseDate,
      image,
    });
    res.send(movie);
  } catch (e) {
    res.send(e.message);
  }
};

export const getMovies = async (req, res) => {
  const { title } = req.query;
  try {
    const movies = await Movies.find({
      title: { $regex: new RegExp(title, "i") },
    });

    res.send(movies);
  } catch (e) {
    res.send(e.message);
  }
};

export const movieDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movies.findById(id);

    if (!movie) {
      res.send({
        message: "not found",
      });
    }

    res.send(movie);
  } catch (error) {
    res.send(error.message);
  }
};

export const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedMovie = await Movies.findByIdAndDelete(id);

    res.send({
      data: deletedMovie,
      status: !!deletedMovie,
    });
  } catch (error) {
    res.send(error.message);
  }
};

export const getMovieAndUpdate = async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await Movies.findById(id);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    res.json(movie);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving movie" });
  }
};

export const updateMovie = async (req, res) => {
  const { id } = req.params;
  const { title, director, plot, releaseDate, image } = req.body;

  const movie = await Movies.findByIdAndUpdate(
    id,
    { id, title, director, plot, releaseDate, image },
    { new: true }
  );
  res.send(movie);
};
