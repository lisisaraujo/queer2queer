import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

export default function Map() {
  const [viewport, setViewport] = useState({
    height: "100%",
    width: "100%",
    latitude: 52.5072,
    longitude: 13.4247,
    zoom: 8,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/laraujo/clf2iydy9000c01lxt1e9waqd"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(newViewport) => setViewport(newViewport)}
    ></ReactMapGL>
  );
}
