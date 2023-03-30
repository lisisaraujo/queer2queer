import ReturnButton from "./Buttons/ReturnButton";
import styled from "styled-components";
import CategoryFilter from "./CategoryFilter";

export default function Header({ children }) {
  return (
    <>
      <HeaderWrapper>
        <div className="return-button">
          {" "}
          <ReturnButton />
        </div>

        <div className="title">
          {" "}
          <h3>{children}</h3>
        </div>

        {/* <CategoryFilter onChangeCategory={handleCategoryChange} /> */}
      </HeaderWrapper>
    </>
  );
}

const HeaderWrapper = styled.nav`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  /* justify-content: space-around; */
  /* padding: 5px; */
  margin-top: 0px;
  color: whitesmoke;
  position: fixed;
  background-color: inherit;
  box-shadow: 0px 0px 5px 3px rgba(95, 94, 94, 0.4);
  opacity: 0.9;
  margin-bottom: 200px;
  z-index: 1;
  font-size: 1.2em;

  .title {
    margin: auto;
    margin-right: 35%;
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
    background-color: #5f5e5e;
    color: #fdfbfc;
    border-radius: 10px;
    width: 100%;
  }

  .active {
    background-color: transparent;
    color: #fdfbfc;
    align-self: center;
  }

  .return-button {
    display: flex;
    align-self: flex-end;
  }
`;
