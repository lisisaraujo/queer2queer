import Link from "next/link";
import styled from "styled-components";
import { SlMenu } from "react-icons/sl";

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
              <a href="#home" className="active">
                QueerMap BER
              </a>
              <div id="myLinks">
                <Link href="/about">About Us</Link>
                <Link href="/ressources">Ressources</Link>
                <Link href="/feedback">Feedback</Link>
                <Link href="/contact">Contact</Link>
              </div>
              <a href="#" className="icon" onClick={navBarDrop}>
                <SlMenu />
              </a>
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
  z-index: 1;
  display: flex;
  margin-top: 0px;
  width: 100%;

  .mobile-container {
    max-width: 700px;
    margin: auto;
    background-color: transparent;
    /* height: 500px; */
    color: white;
    border-radius: 10px;
    display: flex;
    align-content: center;
    position: fixed;
  }

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
  }

  .topnav a.icon {
    background: black;
    display: block;
    position: absolute;
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
