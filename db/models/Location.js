import { SourceCode } from "eslint";
import mongoose from "mongoose";
const { Schema } = mongoose;

const locationSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  //   pin: { type: String, required: true },
  //   mapURL: { type: String, required: false },
  //   description: { type: String, required: true },
  //   id: { type: String, required: true },
});

// connecting through mongoose to location collection in the database.
// it's not case sensitive

const Location =
  mongoose.models.Location || mongoose.model("Location", locationSchema);
export default Location;
