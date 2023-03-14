import Link from "next/link";
import styled from "styled-components";
import { AiOutlineMenuUnfold } from "react-icons/ai";

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
      <nav>
        <Headline>
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
                <AiOutlineMenuUnfold />
              </a>
            </div>
          </div>
        </Headline>
      </nav>
    </>
  );
}

const Headline = styled.h1`
  color: #252629;
  text-align: center;
  display: flex;
  position: fixed;
  z-index: 1;
  display: flex;

  .mobile-container {
    max-width: 480px;
    margin: auto;
    background-color: #555;
    /* height: 500px; */
    color: white;
    border-radius: 10px;
    display: flex;
  }

  .topnav {
    overflow: hidden;
    background-color: #333;
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
    background-color: #04aa6d;
    color: white;
  }
`;
