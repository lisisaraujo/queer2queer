import dbConnect from "../../../db/connect";
import Location from "../../../db/models/Location";
import { accessToken } from "../../../src/mapbox";
import axios from "axios";

export default async function handler(req, response) {
  await dbConnect();
  const address = `${req.body.address} ${req.body.postcode} ${req.body.city}`;
  if (req.method === "POST") {
    try {
      const apiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        address
      )}.json?access_token=${accessToken}`;

      const apiResponse = axios.get(apiUrl).then((res) => {
        console.log("RES DATA FEATURES", res.data.features);
        const apiResponseData = res.data.features[0];
        console.log("apiResponseData", apiResponseData);
        const coordinates = apiResponseData.center.reverse();
        const address = apiResponseData.place_name;
        const locationData = req.body;
        const newLocation = new Location(locationData);
        newLocation.lngLat.push(...coordinates);
        console.log("newLocation FROM BACKEND", newLocation);
        newLocation.save();
        response.status(201).json({ status: "Location created" });
      });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }
}
