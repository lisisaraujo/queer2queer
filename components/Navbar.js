import Link from "next/link";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import CategoryFilter from "./CategoryFilter";
import DropdownNav from "./DropdownNav";
import GlobalStyle from "../styles/GlobalStyle";

import { list } from "postcss";
import { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

export default function Navbar({ handleCategoryChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuList = ["About", "Contact", "Feedback", "Ressources", "Admin"];

  const iconStyles = { color: "white", fontSize: "1.5em", cursor: "pointer" };
  function navBarDrop() {
    let x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  return (
    <>
      <NavbarWrapper>
        <div className="relative flex flex-col items-center w-[200px] rounded-lg">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="bg-blue-450 p-4 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-black"
          >
            <FiMenu />
            {!isOpen ? (
              <AiOutlineCaretDown className="h-8" />
            ) : (
              <AiOutlineCaretUp className="h-8" />
            )}
          </button>

          {isOpen && (
            <div className="bg-blue-400 absolute top-20 flex flex-col items-start rounded-lg p-2 w-full">
              {menuList.map((item) => (
                <div
                  className="flex w-full justify-between p-4 hover:bg-blue-300 curser-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4"
                  key={item}
                >
                  <Link
                    className="font-bold"
                    href={`/menu/${item.toLowerCase()}`}
                  >
                    {item}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
        <CategoryFilter
          onChangeCategory={handleCategoryChange}
          setSelectedOption={handleCategoryChange}
        />
      </NavbarWrapper>
    </>
  );
}

const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 5%;
  width: 100%;
  z-index: 1;
  margin-top: 0px;
  color: #fdfbfc;
  position: fixed;
  background-color: rgba(77, 150, 239, 0.9);
  opacity: 0.9;
  box-shadow: 0px 0px 18px 2px rgba(54, 54, 54, 0.75);
  align-items: center;
`;
