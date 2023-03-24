import dynamic from "next/dynamic";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const MyMap = dynamic(() => import("../components/Map"), {
  loading: () => "Loading...",
  ssr: false,
});

const AddLocationButton = dynamic(
  () => import("../components/Buttons/AddLocationButton"),
  {
    loading: () => "Loading...",
    ssr: false,
  }
);

export default function Home({ locations }) {
  return (
    <>
      <section className="map">
        <AddLocationButton />
        <MyMap locations={locations} />
      </section>
    </>
  );
}
