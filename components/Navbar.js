import Link from "next/link";
import styled from "styled-components";
import { SlMenu } from "react-icons/sl";
import FilterButton from "./Buttons/FilterButton";

export default function Navbar() {
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
      <Headline>
        <nav>
          <div className="mobile-container">
            <div className="topnav">
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
              <FilterButton />
            </div>
          </div>
        </nav>
      </Headline>
    </>
  );
}

const Headline = styled.h1`
  color: #5e27c4;
  text-align: center;
  display: flex;
  position: fixed;
  flex-direction: column;
  z-index: 1;
  margin-top: 0px;
  width: 100%;
  align-content: space-between;

  /* .mobile-container {
    max-width: 700px;
    margin: auto;
    background-color: transparent;
    height: 500px;
    color: white;
    border-radius: 10px;

    align-content: center;
    position: fixed;
  } */

  .topnav {
    overflow: hidden;
    background-color: #5e27c4;
    position: relative;
  }

  .topnav #myLinks {
    display: none;
  }

  .topnav a {
    color: white;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    display: block;
    position: relative;
  }

  .topnav a.icon {
    background: black;
    display: block;
    position: relative;
    right: 0;
    top: 0;
  }

  .topnav a:hover {
    background-color: #ddd;
    color: black;
  }

  .active {
    background-color: transparent;
    color: white;
  }
`;
