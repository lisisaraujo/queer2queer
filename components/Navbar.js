import styled from "styled-components";
import CategoryFilter from "./CategoryFilter";
import DropdownMenu from "./DropdownMenu";
import ModalFilterHomepage from "./ModalFilterHomepage";

export default function Navbar({ handleCategoryChange }) {
  return (
    <>
      <NavbarWrapper>
        <DropdownMenu />
        <div className="title">Queer2Queer</div>
        <ModalFilterHomepage handleCategoryChange={handleCategoryChange} />
        {/* <CategoryFilter onChangeCategory={handleCategoryChange} /> */}
      </NavbarWrapper>
    </>
  );
}

const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0% 5%;
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
