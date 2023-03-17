import dbConnect from "../../../db/connect";
import Location from "../../../db/models/Location";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "POST") {
    try {
      const locationData = request.body;
      const location = new Location(locationData);
      console.log("location FROM BACKEND", location);

      await location.save();
      response.status(201).json({ status: "Location created" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }
}
