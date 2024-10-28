import mongoose from "mongoose";

const servicesSchema = new mongoose.Schema({
  service: {
    type: String,
    required: [true, "Please add a service"],
  },
  description: {
    type: String,
    required: [true, "Please add a description"],
  },
  path: {
    type: String,
    require: true,
    unique: true,
  },
  card: {
    type: Object,
    required: [true, "Please add a card"],

    cardDescription: {
      type: Array,
      required: [true, "Please add a card description"],
    },
  },
});

export default mongoose.model("Services", servicesSchema);
