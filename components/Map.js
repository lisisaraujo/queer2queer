import React, { useRef, useEffect, useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { accessToken } from "../src/mapbox";
// import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

export default function Map() {
  const [viewport, setViewport] = useState({
    height: "100%",
    width: "100%",
    latitude: 52.5072,
    longitude: 13.4247,
    zoom: 12,
  });

  // const marker = new mapboxgl.Marker().setLngLat([30.5, 50.5]).addTo(map); // add the marker to the map

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/dalalamad/clf5w8x0x009v01mo2feklchc"
      mapboxAccessToken={accessToken}
      {...viewport}
      onMove={(evt) => setViewport(evt.viewport)}
    ></ReactMapGL>
  );
}
