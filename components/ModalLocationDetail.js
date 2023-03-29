import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import LocationDetail from "./LocationDetails";
import Modal from "react-modal";
import { BiMessageSquareAdd } from "react-icons/bi";

export default function ModalLocationDetail({ locationID }) {
  const customStyles = {
    content: {
      top: "55%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0px",
      background: "rgb(35, 35, 35)",
      borderRadius: "10px",
    },
  };

  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement("div");

  const router = useRouter();
  const { id } = router.query;
  const iconStyles = { color: "black", fontSize: "2.5em", cursor: "pointer" };

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
      <div className="location-link">
        <a href="#" onClick={openModal}>
          Name of location
        </a>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal"
      >
        <p>This should be the locaton detail page</p>
        <LocationDetail locationID={id} />
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
