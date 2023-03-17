import dbConnect from "../../../db/connect";

import Comment from "../../../db/models/Comment";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const comments = await Comment.findById(id);
      console.log("comments: ", comments);

      return response.status(200).json(comments);
    } catch (error) {
      return response.status(404).json("Error", error);
    }
  }
}
