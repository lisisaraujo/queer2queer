import dynamic from "next/dynamic";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// importing Map component dynamically
const Map = dynamic(() => import("../components/Map"), {
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
    </>
  );
}
