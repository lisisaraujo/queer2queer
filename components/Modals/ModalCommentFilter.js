import React from "react";
import Modal from "react-modal";
import CommentFilter from "../Filters/CommentFilter";
import { useRouter } from "next/router";
import { IoFilter } from "react-icons/io5";
import styled from "styled-components";

const customModalStyles = {
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

export default function ModalCommentFilter({
  getFilteredList,
  loadComments,
  handleApplyFilter,
  setSelectedAgeOption,
  selectedAgeOption,
  setSelectedGenderOption,
  selectedGenderOption,
  setSelectedsexualOrientationOption,
  selectedsexualOrientationOption,
  selectedBipocOption,
  setSelectedBipocOption,
}) {
  const router = useRouter();
  const { id } = router.query;
  const iconStyles = { color: "#101828", fontSize: "1.8em", cursor: "pointer" };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <StyledButton>
        <IoFilter style={iconStyles} onClick={openModal} />
      </StyledButton>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customModalStyles}
        contentLabel="Modal"
      >
        <button onClick={closeModal} style={closeButtonStyle}>
          X
        </button>
        <CommentFilter
          locationID={id}
          closeModal={closeModal}
          getFilteredList={getFilteredList}
          loadComments={loadComments}
          setSelectedAgeOption={setSelectedAgeOption}
          setSelectedGenderOption={setSelectedGenderOption}
          setSelectedsexualOrientationOption={
            setSelectedsexualOrientationOption
          }
          setSelectedBipocOption={setSelectedBipocOption}
          selectedsexualOrientationOption={selectedsexualOrientationOption}
          selectedAgeOption={selectedAgeOption}
          selectedGenderOption={selectedGenderOption}
          selectedBipocOption={selectedBipocOption}
          handleApplyFilter={handleApplyFilter}
        />
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
