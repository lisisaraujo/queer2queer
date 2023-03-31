import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

const MyMap = dynamic(() => import("../components/Map"), {
  loading: () => "Loading...",
  ssr: false,
});

export default function Home({ locations, selectedLocation, loadLocations }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <title>QueerArchive</title>
      <section className="map">
        <MyMap locations={locations} loadLocations={loadLocations} />
      </section>
    </>
  );
}
