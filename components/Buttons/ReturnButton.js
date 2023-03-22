import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function ReturnButton() {
  const iconStyles = { color: "black", fontSize: "2em", cursor: "pointer" };
  return (
    <div className="return-button">
      <button className="return-button" type="button">
        <Link href="/">
          <IoIosArrowRoundBack style={iconStyles} />
        </Link>
      </button>
    </div>
  );
}
