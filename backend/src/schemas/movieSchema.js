import mongoose from "mongoose";
import { nanoid } from "nanoid";
const schema = mongoose.Schema;

export const movieSchema = new schema({
  _id: {
    type: String,
    default: () => nanoid(),
  },

  title: {
    type: String,
    trim: true,
    required: true,
  },

  director: {
    type: String,
    trim: true,
  },

  plot: {
    type: String,
  },

  releaseDate: {
    type: String,
  },

  image: {
    type: String,
  },
});
