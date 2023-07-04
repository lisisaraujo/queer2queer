import { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import Link from "next/link";

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuList = ["About", "Contact", "Feedback", "Ressources", "Admin"];
  const iconStyles = { color: "black", fontSize: "1.5em", cursor: "pointer" };

  return (
    <div className="relative flex flex-col items-center w-fit rounded-lg">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-blue-450 p-4 w-fit flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-black"
      >
        <HiMenuAlt1 style={iconStyles} />
        {/* {!isOpen ? (
              <AiOutlineCaretDown className="h-8" />
            ) : (
              <AiOutlineCaretUp className="h-8" />
            )} */}
      </button>
      {isOpen && (
        <div className="bg-blue-400 absolute top-20 ml-10 flex flex-col items-start rounded-lg p-2 w-fit">
          {menuList.map((item) => (
            <div
              className="flex w-full justify-between p-4 hover:bg-blue-300 curser-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4"
              key={item}
            >
              <Link className="font-bold" href={`/menu/${item.toLowerCase()}`}>
                {item}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
