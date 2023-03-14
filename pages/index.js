import dynamic from "next/dynamic";
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import { useState, useRouter, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const Map = dynamic(() => import("../components/Map"), {
    loading: () => "Loading...",
    ssr: false,
  });

  const [isLoading, setLoading] = useState(false);
  const [locations, setLocations] = useState([]);
  const [center, setCenter] = useState([]);

  const onPlaceUpload = () => {
    loadMarkers();
  };

  const loadMarkers = () => {
    fetch("/api/locations")
      .then((res) => res.json())
      .then((data) => {
        console.log("locations", data.locations);
        setLocations(data.locations);
        setCenter([13.41133, 52.502183]); //Berlin
      })
      .catch((err) => {
        console.log("Fetch locations data error: ", err);
      });
  };
  useEffect(() => {
    loadMarkers();
  }, []);

  function onPlaceClick(location) {
    setCenter([location.longitude, location.latitude]);
  }

  const newLocation = {
    ...locations,
    id: locations[locations.length - 1].id + 1,
  };
  setLocations([...locations, newLocation]);
  setCenter(location.lngLat);

  return (
    <>
      <main className={styles.main}>
        <section className="map">
          <Map
            center={center}
            locations={locations}
            onLocationUpload={onLocationUpload}
          />
        </section>
      </main>
    </>
  );
}
