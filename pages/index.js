import dynamic from "next/dynamic";
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

// const inter = Inter({ subsets: ["latin"] });

// importing Map component dynamically

export default function Home() {
  const Map = dynamic(() => import("../components/Map"), {
    loading: () => "Loading...",
    ssr: false,
  });

  const [locations, setLocations] = useState([]);
  const [isLoading, setLoading] = useState(false);
  // const [center, setCenter] = useState([13.41133, 52.502183]);

  const router = useRouter();
  const { id } = router.query;

  //fetch data from database on page refresh
  function refreshPage() {
    const fetchData = async () => {
      const data = await fetch("/api/locations");
      const locations = await data.json();
      console.log(locations);
      setLocations(data.latLng);
      // setCenter([13.41133, 52.502183]); //Berlin
    };
    fetchData().catch(console.error);
  }

  useEffect(() => {
    refreshPage();
  }, []);

  // if (!locations) {
  //   return <h1>Loading...</h1>;
  // }

  // const onLocationUpload = () => {
  //   refreshPage();
  // };

  // function onLocationClick(location) {
  //   setCenter([...location.latLng]);
  // }

  // const newLocation = {
  //   ...locations,
  //   id: locations._id,
  // };
  // setLocations([...locations, newLocation]);
  // setCenter(location.lngLat);

  return (
    <>
      <section className="map">
        <Map
          // center={center}
          locations={locations}
          // onLocationUpload={onLocationUpload}
        />
      </section>
    </>
  );
}
