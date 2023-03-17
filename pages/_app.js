import styles from "../styles/Home.module.css";
import React, { useRef, useEffect, useState } from "react";
import GlobalStyle from "../components/GlobalStyle";
import Layout from "../components/Layout";
import { SWRConfig } from "swr";
import "map.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { useRouter } from "next/router";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function App({ Component, pageProps }) {
  const [locations, setLocations] = useState([]);
  const [comments, setComments] = useState([]);
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState("");
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  //fetch data from database on page refresh
  function loadLocations() {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetch("/api/locations");
      const locations = await data.json();
      setLocations(locations);
      setComments(locations[0].comments[0]);
      console.log("comments ", comments);
      setLoading(false);
      console.log(locations);
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
  return (
    <>
      <GlobalStyle />

      <Layout>
        <SWRConfig value={{ fetcher }}>
          <Component {...pageProps} locations={locations} />
        </SWRConfig>
      </Layout>
    </>
  );
}
