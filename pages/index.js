import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });

const MyMap = dynamic(() => import("../components/Map"), {
  loading: () => "Loading...",
  ssr: false,
});

const ModalLocationDetail = dynamic(
  () => import("../components/ModalLocationDetail"),
  {
    loading: () => "Loading...",
    ssr: false,
  }
);

export default function Home({ locations, selectedLocation }) {
  const router = useRouter();
  const { id } = router.query;
  // const [clickedLocation, setClickedLocation] = useState();

  // useEffect(() => {
  //   if (id) {
  //     const fetchClickedLocation = async () => {
  //       const response = await fetch(`/api/locations/${id}`);
  //       const clickedLocation = await response.json();
  //       setClickedLocation(clickedLocation);
  //       console.log("clicked location", clickedLocation);
  //     };
  //     fetchClickedLocation();
  //     loadComments();
  //   }
  // }, [id]);

  return (
    <>
      <section className="map">
        {locations && <ModalLocationDetail />}
        <MyMap locations={locations} />
        {/* <MyMap locations={locations} /> */}
      </section>
    </>
  );
}
