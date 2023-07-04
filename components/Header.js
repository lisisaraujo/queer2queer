import ReturnButton from "./Buttons/ReturnButton";
import styled from "styled-components";

export default function Header({ children }) {
  return (
    <>
      <HeaderWrapper>
        <div className="return-button">
          <ReturnButton />
        </div>

        <div className="title">
          <h3>{children}</h3>
        </div>
      </HeaderWrapper>
    </>
  );
}

const HeaderWrapper = styled.nav`
  width: 100%;
  height: 53px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 0px;
  color: #101828;
  position: fixed;
  background-color: #e4effd;
  z-index: 1;
  text-align: center;
  justify-content: flex-start;
  align-items: center;

  .title {
    font-weight: bold;
  }

  a {
    /* color: #fdfbfc; */
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
    /* color: #fdfbfc; */
  }

  a:hover {
    background-color: #5f5e5e;
    /* color: #fdfbfc; */
    border-radius: 10px;
    width: 100%;
  }

  .active {
    background-color: transparent;
    /* color: #fdfbfc; */
    align-self: center;
  }

  .return-button {
    display: flex;
    align-self: flex-end;
  }
`;
