import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

const MyMap = dynamic(() => import("../components/Map"), {
  loading: () => "Loading...",
  ssr: false,
});

export default function Home({ locations }) {
  let router = useRouter();
  return (
    <>
      <section className="map">
        <MyMap locations={locations} />
      </section>
    </>
  );
}
