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
  /* display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0% 5%;
  width: 100%;
  z-index: 1;

  color: #101828;
  position: fixed;
  background-color: #e4effd;
  opacity: 0.9;
  box-shadow: 0px 0px 18px 2px rgba(54, 54, 54, 0.75);
  align-items: center; */
  display: flex;
  position: absolute;
  width: 100%;
  height: 54px;
  /* padding: 16px 24px; */
  /* justify-content: center;
  align-items: flex-start; */
  gap: 92px;
  flex-shrink: 0;
  color: rgba(16, 24, 40, 1);
  border-radius: 2px;
  background: rgba(252, 252, 253, 0.7);

  top: 0;

  /* Title3/Bold */
  /* font-size: 20px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  line-height: 25px; */

  /* .navbar-container {
    display: flex;
    width: 375px;
    height: 54px;
    padding: 16px 24px;
    justify-content: center;
    align-items: flex-start;
    gap: 92px;
    flex-shrink: 0;
  } */

  .navbar-left {
    display: flex;
    align-items: center;
    gap: 12px;
    color: rgba(16, 24, 40, 1);
    color: #101828;

    /* Title3/Bold */
    font-size: 20px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
  }

  .navbar-right {
    display: flex;
    align-items: center;
    gap: 12px;
    color: rgba(16, 24, 40, 1);
  }
`;
