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
// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("div");

export default function ModalCommentForm() {
  const router = useRouter();
  const { id } = router.query;
  const iconStyles = { color: "#4D96EF", fontSize: "2.5em", cursor: "pointer" };
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
        <button onClick={closeModal} style={closeButtonStyle}>
          X
        </button>
        <CommentForm locationID={id} closeModal={closeModal} />
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
