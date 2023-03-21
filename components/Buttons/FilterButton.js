import { IoColorFilterOutline } from "react-icons/io5";
import { useRouter } from "next/router";

export default function FilterButton() {
  const router = useRouter();
  return (
    <>
      <a
        href="#"
        className="icon"
        onClick={() => router.push("/filterLocationForm")}
      >
        <IoColorFilterOutline />
      </a>
    </>
  );
}
