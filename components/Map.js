import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

export default function Map() {
  // const initialViewPort = {
  //   latitude: 52.5072,
  //   longitude: 13.4247,
  // };
  const [viewport, setViewport] = useState({
    height: "100%",
    width: "100%",
    zoom: 8,
    // latitude: 52.5072,
    // longitude: 13.4247,
  });

  return (
    <ReactMapGL
      // {...viewport}
      mapStyle="mapbox://styles/laraujo/clf2iydy9000c01lxt1e9waqd"
      mapboxAccessToken={process.env.mapbox_key}
      // onViewportChange={(newViewport) => setViewport(newViewport)}
    ></ReactMapGL>
  );
}
