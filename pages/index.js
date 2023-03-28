import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import LocationDetail from "../components/LocationDetails";
import ModalLocationDetail from "../components/ModalLocationDetail";
import { useState, useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });

const MyMap = dynamic(() => import("../components/Map"), {
  loading: () => "Loading...",
  ssr: false,
});

export default function Home({ locations, locationID }) {
  const router = useRouter();
  const { id } = router.query;
  const [clickedLocation, setClickedLocation] = useState();

  useEffect(() => {
    if (id) {
      const fetchClickedLocation = async () => {
        const response = await fetch(`/api/locations/${id}`);
        const clickedLocation = await response.json();
        setClickedLocation(clickedLocation);
        // console.log(specificLocation);
      };
      fetchClickedLocation();
      loadComments();
    }
  }, [id]);

  return (
    <>
      <section className="map">
        <MyMap locations={locations} setClickedLocation={setClickedLocation} />
        {clickedLocation && <ModalLocationDetail />}
      </section>
    </>
  );
}
