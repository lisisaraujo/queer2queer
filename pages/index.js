import dynamic from "next/dynamic";

// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

const MyMap = dynamic(() => import("../components/Map"), {
  loading: () => "Loading...",
  ssr: false,
});

const AddButton = dynamic(() => import("../components/Buttons/AddButton"), {
  loading: () => "Loading...",
  ssr: false,
});

export default function Home({ locations }) {
  return (
    <>
      <section className="map">
        <AddButton />
        <MyMap locations={locations} />
      </section>
    </>
  );
}
