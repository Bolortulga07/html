import mongoose from "mongoose";

const url =
  "mongodb+srv://bolortulga07:kA0w7G2iqwdxUTvb@cluster0.jno1r.mongodb.net/fullstack?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(url).then(() => {
  console.log("mongo connected.");
});
