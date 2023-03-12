import dbConnect from "../../../db/connect";
import Location from "../../../db/models/Location";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
  console.log("BACKEND", id);

  if (request.method === "DELETE") {
    const location = await Location.findByIdAndDelete(id);
    return response.status(200).json(location);
  }

  if (request.method === "PUT") {
    const location = await Location.findByIdAndUpdate(id, request.body);
    console.log(location);
    return response.status(200).json(location);
  }
}
