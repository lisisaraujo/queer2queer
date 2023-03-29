import dynamic from "next/dynamic";
import React, { useState, useEffect, useMemo, useRef } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { accessToken } from "../src/mapbox";
import { FaGlassMartiniAlt } from "react-icons/fa";
import { BsFillCameraVideoOffFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { MdDirectionsBoat } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import Link from "next/link";
import { GeolocateControl, NavigationControl } from "react-map-gl";
import Navbar from "./Navbar";
import ModalLocationDetail, { Modal } from "./ModalLocationDetail";
import ModalAddLocationForm from "./ModalAddLocationForm";

const AddLocationButton = dynamic(
  () => import("../components/Buttons/AddLocationButton"),
  {
    loading: () => "Loading...",
    ssr: false,
  }
);

export default function MyMap({ locations, setClickedLocation }) {
  const [selectedLocation, setSelectedLocation] = useState({});
  const iconStyles = { color: "white", fontSize: "1.2em", cursor: "pointer" };
  const barIcon = <FaGlassMartiniAlt style={iconStyles} />;
  const clubIcon = <BsFillCameraVideoOffFill style={iconStyles} />;
  const cruisingIcon = <MdDirectionsBoat style={iconStyles} />;
  const communityIcon = <IoIosPeople style={iconStyles} />;
  const otherIcon = <MdLocationOn style={iconStyles} />;
  const [filteredLocations, setFilteredLocations] = useState(locations);
  const [selectedCategory, setSelectedCategory] = useState("");

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

  useEffect(() => {
    setFilteredLocations(locations);
  }, [locations]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  console.log(selectedCategory);

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
      <Navbar handleCategoryChange={handleCategoryChange}>Queer Map BER</Navbar>
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
                  {location.type === "Other" && otherIcon}
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
                    {/* <ModalLocationDetail /> */}

                    <div className="location-link">
                      <Link href={`/location-page/${location._id}`}>
                        {location.name}
                      </Link>
                    </div>

                    {/* <div
                      className="location-link"
                      onClick={() => {
                        setClickedLocation(location._id);
                      }}
                    >
                      {location.name}
                    </div> */}
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
        {/* <AddLocationButton /> */}
        <ModalAddLocationForm />
      </ReactMapGL>
    </>
  );
}
