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

const Navbar = dynamic(() => import("../components/Navbar"), {
  loading: () => "Loading...",
  ssr: false,
});

// const AddButton = dynamic(() => import("../components/Buttons/AddButton"), {
//   loading: () => "Loading...",
//   ssr: false,
// });

export default function Home({ locations }) {
  return (
    <>
      <section className="map">
        <Map locations={locations} />
      </section>
      {/* <AddButton /> */}
    </>
  );
}
