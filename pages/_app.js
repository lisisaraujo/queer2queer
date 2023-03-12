import styles from "../styles/Home.module.css";
import React, { useRef, useEffect, useState } from "react";
import GlobalStyle from "../components/GlobalStyle";
import Layout from "../components/Layout";
import { SWRConfig } from "swr";
import "map.css";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />

      <Layout>
        <SWRConfig value={{ fetcher }}>
          <Component {...pageProps} />
        </SWRConfig>
      </Layout>
    </>
  );
}
