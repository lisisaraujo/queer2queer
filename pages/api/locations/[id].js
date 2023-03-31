import dbConnect from "../../../db/connect";
import Location from "../../../db/models/Location";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    try {
      const locations = await Location.findById(id);
      // console.log("LOCATIONS: ", locations);

      return response.status(200).json(locations);
    } catch (error) {
      return response.status(404).json("Error", error);
    }
  }

  if (request.method === "DELETE") {
    // console.log("iddddd", id);
    const location = await Location.findByIdAndDelete(id);
    return response.status(200).json(location);
  }
}
