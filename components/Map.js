import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { accessToken } from "../src/mapbox";
import { FaGlassMartiniAlt } from "react-icons/fa";
import { BsFillCameraVideoOffFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { MdDirectionsBoat } from "react-icons/md";
import Link from "next/link";
import Navbar from "./Navbar";

import CategoryFilter from "./CategoryFilter";

export default function Map({ locations }) {
  const [selectedLocation, setSelectedLocation] = useState({});
  const iconStyles = { color: "white", fontSize: "1.2em", cursor: "pointer" };
  const barIcon = <FaGlassMartiniAlt style={iconStyles} />;
  const clubIcon = <BsFillCameraVideoOffFill style={iconStyles} />;
  const cruisingIcon = <MdDirectionsBoat style={iconStyles} />;
  const communityIcon = <IoIosPeople style={iconStyles} />;

  const [viewport, setViewport] = useState({
    height: "100%",
    width: "100%",
    latitude: 52.5072,
    longitude: 13.4247,
    zoom: 12,
  });

  function onMarker(e) {
    const id = e.currentTarget.getAttribute("location-id");
    const location = locations.find((l) => l._id === id);

    setSelectedLocation(location);
  }
  console.log("set selected location ", selectedLocation);

  return (
    <>
      <Navbar locations={locations} setFilter={setFilter}>
        Queer Map BER
      </Navbar>
      <ReactMapGL
        mapStyle="mapbox://styles/dalalamad/clf5w8x0x009v01mo2feklchc"
        mapboxAccessToken={accessToken}
        {...viewport}
        onMove={(evt) => setViewport(evt.viewport)}
      >
        {locations.map((location) => {
          return (
            <div key={location._id}>
              <Marker
                // onClick={() => router.push(`/location-page/${location._id}`)}
                key={location._id}
                longitude={parseFloat(location.lngLat[1])}
                latitude={parseFloat(location.lngLat[0])}
                color={location.color}
                style={{ cursor: "pointer", zIndex: 1 }}
              >
                <p
                  location-id={location._id}
                  role="icon"
                  onClick={onMarker}
                  aria-label="push-pin"
                >
                  {location.type === "Bar" && barIcon}
                  {location.type === "Club" && clubIcon}
                  {location.type === "Cruising" && cruisingIcon}
                  {location.type === "Community-Center" && communityIcon}
                </p>
              </Marker>
              {selectedLocation._id === location._id && (
                <div className="pop-up">
                  <Popup
                    anchor="bottom"
                    longitude={parseFloat(location.lngLat[1])}
                    latitude={parseFloat(location.lngLat[0])}
                    closeOnClick={false}
                  >
                    <div className="location-link">
                      <Link href={`/location-page/${location._id}`}>
                        {location.name}
                      </Link>
                    </div>
                  </Popup>
                </div>
              )}
            </div>
          );
        })}
      </ReactMapGL>
    </>
  );
}
