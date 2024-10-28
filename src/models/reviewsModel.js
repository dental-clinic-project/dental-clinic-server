import mongoose from "mongoose";

const reviewsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
    unique: true,
  },
  description: {
    type: String,
    required: [true, "Please add a description"],
  },
});

export default mongoose.model("Reviews", reviewsSchema);
