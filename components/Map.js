import ReactMapGL from "react-map-gl";
import { useState } from "react";

export default function Map() {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 13.381976,
    longitute: 52.512395,
    zoom: 11,
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
