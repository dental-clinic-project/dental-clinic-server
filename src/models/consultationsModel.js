import mongoose from "mongoose";

const consultationsSchema = new mongoose.Schema({
  date: { type: Date, required: [true, "Please add a date"], unique: true },
  consultations: { type: [String], required: [true, "Please add a date"] },
});

export default mongoose.model(
  "Consultations",
  consultationsSchema,
  "consultations"
);
