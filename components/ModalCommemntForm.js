import React from "react";
import CommentForm from "./Comments/CommentForm";
import { useRouter } from "next/router";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export default function FormModal({ open, onClose }) {
  const router = useRouter();
  const { id } = router.query;
  if (!open) return null;
  return (
    <div onClick={onClose} className="overlay">
      <ModalWrapper
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <p className="closeBtn" onClick={onClose}>
          <AiOutlineClose />
        </p>
        <CommentForm locationID={id} />
      </ModalWrapper>
    </div>
  );
}

const ModalWrapper = styled.div`
  display: flex;
  align-content: center;
  max-width: auto;
  position: fixed;
  top: 10%;
  left: 25%;
  transform: scale(100%);
  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
  border-radius: 20px;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: rgb(35, 35, 35);

  .overlay {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    width: 100%;
    height: 100%;
  }
  .closeBtn {
    position: relative;
    margin-left: 20px;
  }
  /* 
  @media screen and (max-width: 500px) {
    .modalContainer {
      flex-direction: column;
      width: 90%;
      height: 90%;
    }
  } */
`;
