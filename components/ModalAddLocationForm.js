import React from "react";
import Modal from "react-modal";
import { useRouter } from "next/router";
import { IoIosAdd } from "react-icons/io";
import styled from "styled-components";
import AddPlaceForm from "./AddPlaceForm";

const customStyles = {
  content: {
    top: "56%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0px",
    background: "rgba(77, 150, 239, 0.8)",
    borderRadius: "10px",
    width: "70%",
    height: "70%",
    boxShadow: "0 1px 2px rgba(0,0,0,.1)",
  },
};
const closeButtonStyle = {
  color: "whitesmoke",
  backgroundColor: "transparent",
  marginTop: "5%",
  marginLeft: "85%",
  fontSize: "1.7em",
  border: "none",
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("div");

export default function ModalAddLocationForm({ loadLocations }) {
  const router = useRouter();
  const { id } = router.query;
  const iconStyles = {
    color: "white",
    fontSize: "2em",
    cursor: "pointer",
  };
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
        <IoIosAdd style={iconStyles} onClick={openModal} />
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
        <AddPlaceForm
          locationID={id}
          closeModal={closeModal}
          loadLocations={loadLocations}
        />
      </Modal>
    </div>
  );
}

export const StyledButton = styled.button`
  border: none;
  background-color: rgba(77, 150, 239, 0.9);
  z-index: 1;
  display: flex;
  a:hover {
    background-color: #73aef4;
    color: #fdfbfc;
    border-radius: 50%;
  }
  font-size: 2em;
  position: relative;
  margin-top: 85vh;
  margin-left: 80vw;
  opacity: 0.9;
  border-radius: 50%;
  box-shadow: 0px 0px 18px 2px rgba(54, 54, 54, 0.75);
`;
