import React, { useRef, useEffect, useState } from "react";
import ReactMapGL, { Marker, Popup, openInfo } from "react-map-gl";
import { accessToken } from "../src/mapbox";
import { MdLocationOn } from "react-icons/md";

export default function Map({ locations }) {
  const [popupInfo, setPopupInfo] = useState(null);
  const [togglePopUp, setTogglePopUp] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState({});
  const [viewport, setViewport] = useState({
    height: "100%",
    width: "100%",
    latitude: 52.5072,
    longitude: 13.4247,
    zoom: 12,
  });

  const iconStyles = { color: "pink", fontSize: "1.5em", cursor: "pointer" };

  function onMarker(location) {
    console.log("I am clicling! My location: ", location);
    setSelectedLocation(location);
    // setTogglePopUp(true);
  }

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/dalalamad/clf5w8x0x009v01mo2feklchc"
      mapboxAccessToken={accessToken}
      {...viewport}
      onMove={(evt) => setViewport(evt.viewport)}
    >
      {togglePopUp && (
        <Popup
          anchor="bottom"
          onClose={() => setTogglePopUp(false)}
          longitude={13.4247}
          latitude={52.5072}
          closeOnClick={true}
          // longitude={parseFloat(selectedLocation.lngLat[1])}
          // latitude={parseFloat(selectedLocation.lngLat[0])}
        >
          HEllo
        </Popup>
      )}

      {locations.map((location) => {
        return (
          <Marker
            key={location._id}
            longitude={parseFloat(location.lngLat[1])}
            latitude={parseFloat(location.lngLat[0])}
            color={location.color}
            style={{ cursor: "pointer", zIndex: 999 }}
          >
            <p
              role="icon"
              onClick={() => {
                onMarker(location);
              }}
              aria-label="push-pin"
            >
              <MdLocationOn style={iconStyles} />
            </p>
          </Marker>
        );
      })}
    </ReactMapGL>
  );
}
