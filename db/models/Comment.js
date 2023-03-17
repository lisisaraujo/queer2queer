import { SourceCode } from "eslint";
import mongoose from "mongoose";
const { Schema } = mongoose;

const commentSchema = new Schema({
  location: { type: Schema.Types.ObjectId, ref: "Locations" },
  comment: { type: String, required: true },
  age: { type: Number },
  sexual_orientation: { type: String },
  gender: { type: String },
  bipoc: { type: Boolean },
});

// connecting through mongoose to location collection in the database.
// it's not case sensitive

const Comment =
  mongoose.models.Comments || mongoose.model("Comments", commentSchema);
export default Comment;
