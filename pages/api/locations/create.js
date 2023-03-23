import dbConnect from "../../../db/connect";
import Location from "../../../db/models/Location";
import { accessToken } from "../../../src/mapbox";
import axios from "axios";

export default async function handler(req, res) {
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
        const coordinates = apiResponseData.center;
        const invertedCoords = coordinates.reverse();
        console.log("COORDINATES", coordinates);
        // const apiResponse = await fetch(apiUrl);
        // console.log("API RESPONSE", apiResponse);
        // console.log("API RESPONSE DATA", apiResponse.data);
        const locationData = req.body;
        console.log("LOCATION DATA", locationData);
        const location = new Location(locationData);
        location.lngLat.push(...invertedCoords);

        // locationCoords = coordinates;
        // console.log("locationCoords", locationCoords);
        console.log("location FROM BACKEND", location);

        location.save();
        // res.status(201).json({ status: "Location created" });
      });
    } catch (error) {
      console.log(error);
      // res.status(400).json({ error: error.message });
    }
  }
}
