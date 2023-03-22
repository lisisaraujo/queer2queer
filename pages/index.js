import dynamic from "next/dynamic";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// importing Map component dynamically
const MyMap = dynamic(() => import("../components/Map"), {
  loading: () => "Loading...",
  ssr: false,
});
const Navbar = dynamic(() => import("../components/Navbar"), {
  loading: () => "Loading...",
  ssr: false,
});

const handleCategoryChange = (event) => {
  setSelectedCategory(event.target.value);
};
const AddButton = dynamic(() => import("../components/Buttons/AddButton"), {
  loading: () => "Loading...",
  ssr: false,
});

export default function Home({ locations }) {
  return (
    <>
      <section className="map">
        <Navbar handleCategoryChange={handleCategoryChange}>
          Queer Map BER
        </Navbar>
        <AddButton />

        <MyMap locations={locations} />
      </section>
    </>
  );
}
