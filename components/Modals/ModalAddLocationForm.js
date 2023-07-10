import React from "react";
import Modal from "react-modal";
import { useRouter } from "next/router";
import { IoIosAdd, IoIosClose } from "react-icons/io";
import styled from "styled-components";
import AddPlaceForm from "../Forms/AddPlaceForm";
import AddLocationButton from "../Buttons/AddLocationButton";

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
//   border: "none",
// };

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("div");

export default function ModalAddLocationForm({ loadLocations }) {
  const router = useRouter();
  const { id } = router.query;
  const iconStyles = {
    color: "black",
    fontSize: "1.8em",
    cursor: "pointer",
  };
  //   const customStyles = { backgroundColor: "black" };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <StyledButton onClick={openModal}>
        {" "}
        <AddLocationButton />
      </StyledButton>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal"
      >
        <StyledModal>
          <div className="header">
            <div className="title">
              <h1>Suggest a location</h1>
            </div>
            <div className="close-btn">
              <button onClick={closeModal}>
                <IoIosClose style={iconStyles} />
              </button>
            </div>
          </div>

          <AddPlaceForm
            locationID={id}
            closeModal={closeModal}
            loadLocations={loadLocations}
          />
        </StyledModal>
      </Modal>
    </>
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
