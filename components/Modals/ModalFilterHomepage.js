import React from "react";
import Modal from "react-modal";
import CategoryFilter from "../Filters/CategoryFilter";
import { useRouter } from "next/router";
import { IoFilter } from "react-icons/io5";
import styled from "styled-components";
import { IoIosClose } from "react-icons/io";

const customStyles = {
  content: {
    top: "55%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0px",
    background: "rgba(77, 150, 239, 0.8)",
    borderRadius: "10px",
    width: "80%",
    height: "80%",
    boxShadow: "0 1px 2px rgba(0,0,0,.1)",
  },
};
const closeButtonStyle = {
  color: "whitesmoke",
  backgroundColor: "transparent",
  marginTop: "5%",
  marginLeft: "85%",
  fontSize: "1.2em",
  border: "none",
};

Modal.setAppElement("div");

export default function ModalFilterHomepage({
  handleCategoryChange,
  selectedCategory,
  setSelectedCategory,
}) {
  const router = useRouter();
  const iconStyles = { color: "white", fontSize: "1.8em", cursor: "pointer" };

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
        <button onClick={closeModal} style={closeButtonStyle}>
          <IoIosClose style={iconStyles} />
        </button>
        <div className="flex flex-col items-center p-10 space-y-8">
          <h1 className="font-bold">Filter by Category</h1>
          <CategoryFilter
            handleCategoryChange={handleCategoryChange}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <button
            className="bg-blue-500 rounded p-3 shadow-lg shadow-slate-500"
            onClick={closeModal}
          >
            Apply Filter
          </button>
          <button
            className="bg-blue-500 rounded p-3 shadow-lg shadow-slate-500"
            onClick={clearCategoryFilter}
          >
            Clear Filter
          </button>
        </div>
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
