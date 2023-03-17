import { SourceCode } from "eslint";
import mongoose from "mongoose";
const { Schema } = mongoose;

const locationSchema = new Schema({
  name: { type: String, required: true },
  latLng: { type: Array, required: true },
  type: { type: String, required: true },
  color: { type: String },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
});

// connecting through mongoose to location collection in the database.
// it's not case sensitive

const Location =
  mongoose.models.Location || mongoose.model("Location", locationSchema);
export default Location;
