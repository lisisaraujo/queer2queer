import dynamic from "next/dynamic";
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });

// importing Map component dynamically
const Map = dynamic(() => import("../components/Map"), {
  loading: () => "Loading...",
  ssr: false,
});

const AddButton = dynamic(() => import("../components/Buttons/AddButton"), {
  loading: () => "Loading...",
  ssr: false,
});

export default function Home() {
  const [locations, setLocations] = useState([]);
  const [isLoading, setLoading] = useState(false);
  // const [center, setCenter] = useState([13.41133, 52.502183]);

  const router = useRouter();
  const { id } = router.query;

  //fetch data from database on page refresh
  function loadLocations() {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetch("/api/locations");
      const locations = await data.json();
      setLocations(data.latLng);
      setLoading(false);
      console.log(locations);
      // setCenter([13.41133, 52.502183]); //Berlin
      if (isLoading) {
        return <h1>Loading...</h1>;
      }
      if (!locations) {
        return <h1>No data</h1>;
      }
    };
    fetchData().catch(console.error);
  }

  useEffect(() => {
    loadLocations();
  }, []);

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
        <Map locations={locations} />
      </section>
      <AddButton />
    </>
  );
}
