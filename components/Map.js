import { useState, useEffect, useRef, useCallback } from "react";
import ReactMapGL, {
  Marker,
  NavigationControl,
  ScaleControl,
  GeolocateControl,
  Popup,
} from "react-map-gl";
import { accessToken } from "../src/mapbox";

export default function Map() {
  const [viewport, setViewport] = useState({
    height: "100%",
    width: "100%",
    latitude: 52.5072,
    longitude: 13.4247,
    zoom: 11,
  });


  return (
    <ReactMapGL
      ReactMapGLStyle="mapbox://styles/laraujo/clf2iydy9000c01lxt1e9waqd"
      mapboxAccessToken={accessToken}
      {...viewport}
      onMove={(evt) => setViewport(evt.viewport)}
    />
  );
}
