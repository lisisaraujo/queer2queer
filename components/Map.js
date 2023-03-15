import React, { useRef, useEffect, useState } from "react";
import ReactMapGL, { Marker, Popup, openInfo } from "react-map-gl";
import { accessToken } from "../src/mapbox";
import { MdLocationOn } from "react-icons/md";

export default function Map({ locations }) {
  const [popupInfo, setPopupInfo] = useState(null);
  const [show, setShow] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState({});
  const [viewport, setViewport] = useState({
    height: "100%",
    width: "100%",
    latitude: 52.5072,
    longitude: 13.4247,
    zoom: 12,
  });

  const iconStyles = { color: "pink", fontSize: "1.5em", cursor: "pointer" };

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/dalalamad/clf5w8x0x009v01mo2feklchc"
      mapboxAccessToken={accessToken}
      {...viewport}
      onMove={(evt) => setViewport(evt.viewport)}
    >
      {locations.map((location) => {
        <Marker
          key={location._id}
          longitude={parseFloat(location.lngLat[1])}
          latitude={parseFloat(location.lngLat[0])}
          color={location.color}
          style={{ cursor: "pointer", zIndex: 999 }}
        >
          <p
            role="icon"
            onClick={() => setSelectedLocation(location)}
            aria-label="push-pin"
          >
            <MdLocationOn style={iconStyles} />
          </p>
        </Marker>;
        {
          selectedLocation.name === location.name ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              longitude={parseFloat(location.lngLat[1])}
              latitude={parseFloat(location.lngLat[0])}
            >
              {location.name}
            </Popup>
          ) : (
            false
          );
        }
      })}
    </ReactMapGL>
  );
}
