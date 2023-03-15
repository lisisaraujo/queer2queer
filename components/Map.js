import React, { useRef, useEffect, useState } from "react";
import ReactMapGL, { Marker, Popup, openInfo } from "react-map-gl";
import { accessToken } from "../src/mapbox";
import { MdLocationOn } from "react-icons/md";

export default function Map({ locations }) {
  const [showPopup, setShowPopup] = React.useState(true);
  const [viewport, setViewport] = useState({
    height: "100%",
    width: "100%",
    latitude: 52.5072,
    longitude: 13.4247,
    zoom: 12,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/dalalamad/clf5w8x0x009v01mo2feklchc"
      mapboxAccessToken={accessToken}
      {...viewport}
      onMove={(evt) => setViewport(evt.viewport)}
    >
      {locations.map((location) => {
        return (
          <Marker
            key={location._id}
            longitude={parseFloat(location.lngLat[1])}
            latitude={parseFloat(location.lngLat[0])}
            color={location.color}
            style={{ cursor: "pointer", zIndex: 999 }}
            onClick={() => Popup(location.name)}
          >
            <MdLocationOn />
          </Marker>
        );
      })}
    </ReactMapGL>
  );
}
