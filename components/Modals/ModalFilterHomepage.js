import React from "react";
import Modal from "react-modal";
import CategoryFilter from "../Filters/CategoryFilter";
import { useRouter } from "next/router";
import { IoFilter } from "react-icons/io5";
import styled from "styled-components";
import { IoIosClose } from "react-icons/io";
import Header from "../Header";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0px",
    background: "rgba(252, 252, 253, 0.9)",
    // borderRadius: "10px",
    width: "100%",
    height: "100%",
    // boxShadow: "0 1px 2px rgba(0,0,0,.1)",
  },
};
// const closeButtonStyle = {
//   color: "whitesmoke",
//   backgroundColor: "transparent",
//   marginTop: "5%",
//   marginLeft: "85%",
//   fontSize: "1.2em",
//   border: "none",
// };

Modal.setAppElement("div");

export default function ModalFilterHomepage({
  handleCategoryChange,
  selectedCategory,
  setSelectedCategory,
}) {
  const router = useRouter();
  const iconStyles = { color: "black", fontSize: "1.8em", cursor: "pointer" };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const clearCategoryFilter = () => {
    setSelectedCategory("");
    closeModal();
  };

  return (
    <div className="flex relative justify-center">
      <StyledButton>
        <IoFilter style={iconStyles} onClick={openModal} />
      </StyledButton>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal"
        className="text-white flex-cl items-center absolute"
      >
        <StyledModal>
          <div className="header">
            <div className="title">
              <h1>Type of location</h1>
            </div>
            <div className="close-btn">
              <button onClick={closeModal}>
                <IoIosClose style={iconStyles} />
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center p-20 space-y-8">
            <CategoryFilter
              handleCategoryChange={handleCategoryChange}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
            <button className="apply-btn" onClick={closeModal}>
              Apply
            </button>
            <button className="remove-btn" onClick={clearCategoryFilter}>
              Remove Filters
            </button>
          </div>
        </StyledModal>
      </Modal>
    </div>
  );
}

export const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
  position: relative;
`;

export const StyledModal = styled.div`
  .apply-btn {
    display: flex;
    width: 207px;
    height: 48px;
    padding: 24px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 200px;
    border: 1px solid #4d96ef;
    background: #4d96ef;
  }
  .remove-btn {
    display: flex;
    width: 207px;
    height: 48px;
    padding: 24px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 200px;
    border: 1px solid #4d96ef;
    background: #fcfcfd;
    color: rgba(77, 150, 239, 1);
  }

  .header {
    width: 100%;
    height: 54px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-top: 0px;
    color: #101828;
    position: fixed;
    background: rgba(252, 252, 253, 0.9);
    text-align: center;
    justify-content: space-evenly;
    border-bottom: 1px #d0d5dd;
    border-style: solid;
  }
`;
