import Link from "next/link";

export default function ReturnButton() {
  return (
    <div className="return-button">
      <button className="return-button" type="button">
        <Link href="/">←</Link>
      </button>
    </div>
  );
}
