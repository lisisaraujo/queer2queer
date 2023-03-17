import dbConnect from "../../../db/connect";
import Comment from "../../../db/models/Location";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    try {
      const comments = await Comment.findById(id);
      console.log("COMMENTS: ", comments);

      return response.status(200).json(comments);
    } catch (error) {
      return response.status(404).json("Error", error);
    }
  }
}
