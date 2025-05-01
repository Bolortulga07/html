import mongoose from "mongoose";

import { movieSchema } from "../schemas/movieSchema.js";

class Movie {
  static async post({ title, director, plot, releaseDate, image }) {
    try {
      const doc = { title, director, plot, releaseDate, image };

      const movie = await this.create(doc);
      return movie;
    } catch (error) {
      console.log(error);
    }
  }
}

movieSchema.loadClass(Movie);

export const Movies = mongoose.model("Movies", movieSchema);
