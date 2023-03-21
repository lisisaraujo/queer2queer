import Link from "next/link";
import styled from "styled-components";
import { SlMenu } from "react-icons/sl";
import { IoColorFilterOutline } from "react-icons/io5";
import CategoryFilter from "./CategoryFilter";

export default function Navbar({ locations, setFilter }) {
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
          <Link href="/about">About Us</Link>
          <Link href="/ressources">Ressources</Link>
          <Link href="/feedback">Feedback</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <a href="#" className="icon" onClick={navBarDrop}>
          <SlMenu />
        </a>
        <a href="#home" className="active">
          QueerMap BER
        </a>
        <CategoryFilter locations={locations} setFilter={setFilter} />
        {/* <a
          href="#"
          className="icon"
          onClick={() => router.push("/filterLocationForm")}
        >
          <IoColorFilterOutline />
        </a> */}
      </NavbarWrapper>
    </>
  );
}

const NavbarWrapper = styled.nav`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px;
  z-index: 1;
  margin-top: 10px;
  color: #5e27c4;
  position: fixed;
  background-color: #f6f2fc;
  align-content: inherit;
  margin-left: 10%;
  border-radius: 25px;

  #myLinks {
    display: none;
  }

  a {
    color: #5e27c4;
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
    color: #5e27c4;
  }

  a:hover {
    background-color: #ddd;
    color: black;
  }

  .active {
    background-color: transparent;
    color: #5e27c4;
  }
`;
