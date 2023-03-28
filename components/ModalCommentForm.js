import React from "react";
// import ReactDOM from "react-dom";
import Modal from "react-modal";
import CommentForm from "./Comments/CommentForm";
import { useRouter } from "next/router";
import { BiMessageSquareAdd } from "react-icons/bi";
import styled from "styled-components";

const customStyles = {
  content: {
    top: "55%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0px",
    background: "inherit",
    borderRadius: "10px",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("div");

export default function ModalCommentForm() {
  const router = useRouter();
  const { id } = router.query;
  const iconStyles = { color: "black", fontSize: "2.5em", cursor: "pointer" };
  //   const customStyles = { backgroundColor: "black" };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <StyledButton>
        <BiMessageSquareAdd style={iconStyles} onClick={openModal} />
      </StyledButton>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal"
      >
        <CommentForm locationID={id} />
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
  /* margin-left: 80%;
  margin-bottom: 80%; */
  position: relative;
`;
