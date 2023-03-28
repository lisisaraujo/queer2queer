import ReturnButton from "./Buttons/ReturnButton";
import styled from "styled-components";
import CategoryFilter from "./CategoryFilter";

export default function Header({ name }) {
  return (
    <>
      <HeaderWrapper>
        <div className="return-button">
          {" "}
          <ReturnButton />
        </div>

        <div className="title">
          {" "}
          <h3>{name}</h3>
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
  color: #fdfbfc;
  position: fixed;
  background-color: rgba(77, 150, 239, 1);
  opacity: 0.9;
  margin-bottom: 200px;
  z-index: 1;

  .title {
    margin: auto;
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

  .return-button {
    display: flex;
    align-self: flex-end;
  }
`;
