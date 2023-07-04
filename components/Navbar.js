import styled from "styled-components";
import DropdownMenu from "./DropdownMenu";
import ModalFilterHomepage from "./Modals/ModalFilterHomepage";

export default function Navbar({
  handleCategoryChange,
  clearCategoryFilter,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <>
      <NavbarWrapper>
        <div className="navbar-left">
          <DropdownMenu />
          <div className="title">Queer2Queer</div>
        </div>
        <div className="navbar-right">
          <ModalFilterHomepage
            handleCategoryChange={handleCategoryChange}
            clearCategoryFilter={clearCategoryFilter}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
      </NavbarWrapper>
    </>
  );
}

const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: absolute;
  width: 100%;
  height: 54px;
  gap: 92px;
  flex-shrink: 0;
  color: rgba(16, 24, 40, 1);
  border-radius: 2px;
  background: rgba(252, 252, 253, 0.9);
  top: 0;

  .navbar-left {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 12px;
    color: #101828;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
  }

  .navbar-right {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
    color: rgba(16, 24, 40, 1);
  }
`;
