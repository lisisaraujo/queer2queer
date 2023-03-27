import Link from "next/link";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import CategoryFilter from "./CategoryFilter";

export default function Navbar({ handleCategoryChange }) {
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
        <div id="myLinks">
          <Link href="/menu/about">About Us</Link>
          <Link href="/menu/ressources">Ressources</Link>
          <Link href="/menu/feedback">Feedback</Link>
          <Link href="/menu/contact">Contact</Link>
        </div>
        <a href="#" className="icon" onClick={navBarDrop}>
          <FiMenu style={iconStyles} />
        </a>
        <a href="#home" className="active">
          QueerArchive
        </a>
        <CategoryFilter onChangeCategory={handleCategoryChange} />
      </NavbarWrapper>
    </>
  );
}

const NavbarWrapper = styled.nav`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  /* padding: 5px; */
  z-index: 1;
  margin-top: 25px;
  color: #fdfbfc;
  position: fixed;
  background-color: rgba(77, 150, 239, 0.9);
  opacity: 0.9;
  margin-left: 10%;
  border-radius: 16px;
  box-shadow: 0px 0px 18px 2px rgba(54, 54, 54, 0.75);

  #myLinks {
    display: none;
  }

  a {
    color: #fdfbfc;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    display: block;
    position: relative;
  }

  a.icon {
    display: block;
    position: relative;
    right: 0;
    top: 0;
    background-color: transparent;
    color: #fdfbfc;
  }

  a:hover {
    background-color: #73aef4;
    color: #fdfbfc;
    border-radius: 10px;
  }

  .active {
    background-color: transparent;
    color: #fdfbfc;
    align-self: center;
  }
`;
