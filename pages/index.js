import dynamic from "next/dynamic";
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ReactMapGL from "react-map-gl";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const Map = dynamic(() => import("../components/Map"), {
    loading: () => "Loading...",
    ssr: false,
  });

  // const [locationList, setLocationList] = useState([]);

  // const [isLoading, setLoading] = useState(false);
  // const router = useRouter();
  // const { id } = router.query;

  // function refreshPage() {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     const data = await fetch("/api/locations");
  //     const locations = await data.json();
  //     setLocationList(locations);
  //     console.log(locations);
  //     setLoading(false);
  //   };
  //   fetchData().catch(console.error);
  // }

  // useEffect(() => {
  //   refreshPage();
  // }, []);

  // if (isLoading) {
  //   return <h1>Loading...</h1>;
  // }
  // if (!locationList) {
  //   return <h1>No data</h1>;
  // }

  return (
    <>
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <main className={styles.main}>
        <section className="map">
          <Map />
        </section>
      </main>
    </>
  );
}
