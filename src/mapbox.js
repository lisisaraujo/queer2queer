import GeocoderService from "@mapbox/mapbox-sdk/services/geocoding";

export const accessToken =
  "pk.eyJ1IjoibGFyYXVqbyIsImEiOiJjbGY1amZ6bzQwd3JwM3RvMTF3a2NkMTVwIn0.Y6JKVCNltaEOlgVrM5cFpA";

export const geocoder = GeocoderService({ accessToken });
