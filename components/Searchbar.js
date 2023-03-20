import styled from "styled-components";

export default function Searchbar() {
  return (
    <StyledBox>
      {" "}
      <div class="filter-ctrl">
        <input
          id="filter-input"
          type="text"
          name="filter"
          placeholder="Search..."
        />
      </div>
    </StyledBox>
  );
}

const StyledBox = styled.div`
  margin-top: 50px;
`;

const StyledInput = styled.input`
  margin: 20px;
  padding: 10px;
  width: 20%;
  height: 40px;
  background: none;
  border: 1px solid lightgrey;
  border-radius: 10px;
  box-sizing: border-box;
  outline: none;
  transition: 0.5s;
  &:hover {
    width: 90%;
    border: 1px solid rgb(230, 230, 250);
    border-radius: 10px;
    box-shadow: rgb(230, 230, 250) 0.95px 0.95px 2.6px;
  }
`;
