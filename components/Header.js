import styled from "styled-components";

export default function Header() {
  function navBar() {
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
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
              </div>
              <a href="javascript:void(0);" className="icon" onClick={navBar}>
                <i className="fa fa-bars"></i>
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
