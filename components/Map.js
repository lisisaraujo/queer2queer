import dynamic from "next/dynamic";
import React, { useState, useEffect, useMemo, useRef } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { accessToken } from "../src/mapbox";
import Link from "next/link";
import { GeolocateControl, NavigationControl } from "react-map-gl";
import Navbar from "./Navbar";
import LocationDetails from "./LocationDetails";
import ModalAddLocationForm from "./ModalAddLocationForm";
import {
  barIconMap,
  clubIconMap,
  cruisingIconMap,
  communityIconMap,
  otherIconMap,
} from "../utils";
import ModalLocationDetails from "./ModalLocationDetails";

export default function MyMap({ locations, loadLocations }) {
  const [selectedLocation, setSelectedLocation] = useState({});
  const [filteredLocations, setFilteredLocations] = useState(locations);
  const [selectedCategory, setSelectedCategory] = useState("");

  const [viewport, setViewport] = useState({
    height: "100%",
    width: "100%",
    latitude: 52.5072,
    longitude: 13.4247,
    zoom: 12,
  });

  function onMarker(event) {
    const id = event.currentTarget.getAttribute("location-id");
    const location = locations.find((l) => l._id === id);

    setSelectedLocation(location);
  }
  console.log("set selected location ", selectedLocation);

  useEffect(() => {
    setFilteredLocations(locations);
  }, [locations]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // console.log(selectedCategory);

  const getFilteredList = () => {
    if (!selectedCategory) {
      return filteredLocations;
    }
    return filteredLocations.filter(
      (location) => location.type === selectedCategory
    );
  };

  const filteredList = useMemo(getFilteredList, [
    selectedCategory,
    filteredLocations,
  ]);
  // console.log(filteredList);

  return (
    <>
      <Navbar handleCategoryChange={handleCategoryChange}>Queer2Queer</Navbar>
      <ReactMapGL
        mapStyle="mapbox://styles/dalalamad/clfe8aq9s006701o42zx1li76"
        mapboxAccessToken={accessToken}
        {...viewport}
        onMove={(evt) => setViewport(evt.viewport)}
      >
        {filteredList.map((location) => {
          return (
            <div key={location._id}>
              <Marker
                key={location._id}
                longitude={parseFloat(location.lngLat[1])}
                latitude={parseFloat(location.lngLat[0])}
                color={location.color}
                style={{ cursor: "pointer" }}
              >
                <p
                  location-id={location._id}
                  role="icon"
                  onClick={onMarker}
                  aria-label="push-pin"
                >
                  {location.type === "Bar" && barIconMap}
                  {location.type === "Club" && clubIconMap}
                  {location.type === "Cruising" && cruisingIconMap}
                  {location.type === "Community-Center" && communityIconMap}
                  {location.type === "Other" && otherIconMap}
                </p>
              </Marker>
              {selectedLocation._id === location._id && (
                <div id="pop-up">
                  <Popup
                    anchor="bottom"
                    longitude={parseFloat(location.lngLat[1])}
                    latitude={parseFloat(location.lngLat[0])}
                    closeOnClick={false}
                  >
                    {" "}
                    {/* <ModalLocationDetails locationName={location.name}>
                      <LocationDetails />
                    </ModalLocationDetails> */}
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
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          position="bottom-left"
        />
        <NavigationControl position="bottom-left" />
        <ModalAddLocationForm loadLocations={loadLocations} />
      </ReactMapGL>
    </>
  );
}
