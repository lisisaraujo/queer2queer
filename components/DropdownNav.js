import { list } from "postcss";
import { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

export default function DropdownNav() {
  const [isOpen, setIsOpen] = useState(false);
  const menuList = ["About", "Contact", "Feedback", "Ressources", "Admin"];

  return (
    <div className="relative flex flex-col items-center w-[340px] h-[340px] rounded-lg">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-blue-400 p-4 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-black"
      >
        Dropdown
        {!isOpen ? (
          <AiOutlineCaretDown className="h-8" />
        ) : (
          <AiOutlineCaretUp className="h-8" />
        )}
      </button>

      {isOpen && (
        <div className="bg-blue-400 absolute top-20 flex flex-col items-start rounded-lg p-2 w-full">
          {menuList.map((item) => (
            <div>
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
