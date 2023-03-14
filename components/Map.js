import ReactMapGL from "react-map-gl";
import { useState, useEffect, useRef, useCallback } from "react";
import Map, {
  Marker,
  NavigationControl,
  ScaleControl,
  GeolocateControl,
  Popup,
} from "react-map-gl";
// import Modal from "react-bootstrap/Modal";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Image from "react-bootstrap/Image";
// import { accessToken } from "./mapbox";

export default function QueerMap({ places, onPlaceUpload }) {
  const [popupInfo, setPopupInfo] = useState(null);
  const [userClick, setUserClick] = useState(null);
  const [userPopup, setUserPopup] = useState(false);
  const [show, setShow] = useState(false);

  const [viewport, setViewport] = useState({
    height: "100%",
    width: "100%",
    latitude: 52.5072,
    longitude: 13.4247,
    zoom: 11,
  });

  Map.addControl(
    new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
    })
  );

  const mapNode = useRef(null);

  return (
    <Map
      mapStyle="mapbox://styles/laraujo/clf2iydy9000c01lxt1e9waqd"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onMove={(evt) => setViewport(evt.viewport)}
    ></Map>
  );
}
