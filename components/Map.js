import ReactMapGL from "react-map-gl";
import { useState } from "react";

export default function Map() {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 52.5072,
    longitude: 13.4247,
    zoom: 8,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/laraujo/clf2iydy9000c01lxt1e9waqd"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    ></ReactMapGL>
  );
}
