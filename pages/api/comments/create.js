import dbConnect from "../../../db/connect";
import Comment from "../../../db/models/Comment";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "POST") {
    try {
      const commentData = request.body;
      commentData.bipoc = commentData.bipoc === "on" ? true : false;
      const comment = new Comment(commentData);
      console.log("Comment FROM BACKEND", comment);

      await comment.save();
      response.status(201).json({ status: "Comment created" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }
}
