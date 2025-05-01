import mongoose from "mongoose";
const schema = mongoose.Schema;

export const movieSchema = new schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },

  director: {
    type: String,
    trim: true,
    required: true,
  },

  plot: {
    type: String,
  },

  releaseDate: {
    type: String,
    required: true,
  },

  image: {
    type: String,
  },
});
