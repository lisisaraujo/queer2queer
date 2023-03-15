import React, { useRef, useEffect, useState } from "react";
import ReactMapGL, { Marker, Popup, openInfo } from "react-map-gl";
import { accessToken } from "../src/mapbox";
import { MdLocationOn } from "react-icons/md";

export default function Map({ locations }) {
  // const [togglePopUp, setTogglePopUp] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState({});
  const [viewport, setViewport] = useState({
    height: "100%",
    width: "100%",
    latitude: 52.5072,
    longitude: 13.4247,
    zoom: 12,
  });

  const iconStyles = { color: "pink", fontSize: "1.5em", cursor: "pointer" };

  function onMarker(e) {
    const id = e.currentTarget.getAttribute("location-id");
    const location = locations.find((l) => l._id === id);

    // console.log(location);
    console.log("I am clicling! My location: ", location);
    setSelectedLocation(location);
    // setTogglePopUp(true);
  }
  console.log("set selected location ", selectedLocation);

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/dalalamad/clf5w8x0x009v01mo2feklchc"
      mapboxAccessToken={accessToken}
      {...viewport}
      onMove={(evt) => setViewport(evt.viewport)}
    >
      {locations.map((location) => {
        // console.log(location.name);
        return (
          <div key={location._id}>
            <Marker
              key={location._id}
              longitude={parseFloat(location.lngLat[1])}
              latitude={parseFloat(location.lngLat[0])}
              color={location.color}
              style={{ cursor: "pointer", zIndex: 999 }}
            >
              <p
                location-id={location._id}
                role="icon"
                onClick={onMarker}
                aria-label="push-pin"
              >
                <MdLocationOn style={iconStyles} />
              </p>
            </Marker>

            {selectedLocation._id === location._id && (
              <>
                <Popup
                  anchor="bottom"
                  // onClose={() => setTogglePopUp(false)}
                  longitude={parseFloat(location.lngLat[1])}
                  latitude={parseFloat(location.lngLat[0])}
                  closeOnClick={false}
                >
                  {location.name}
                </Popup>
              </>
            )}
          </div>
        );
      })}
    </ReactMapGL>
  );
}
