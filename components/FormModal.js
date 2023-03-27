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
    <ModalWrapper>
      {" "}
      <div onClick={onClose} className="overlay">
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="modalContainer"
        >
          <p className="closeBtn" onClick={onClose}>
            <AiOutlineClose />
          </p>
          <div className="content">
            <CommentForm locationID={id} />
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
}

const ModalWrapper = styled.div`
  .modalButton {
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    padding: 12px 24px;
  }

  /* Modal */
  .overlay {
    /* background-color: rgba(0, 0, 0, 0.5); */
    position: fixed;
    width: 100%;
    height: 100%;
  }

  .modalContainer {
    display: flex;
    align-content: center;
    max-width: 80%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    background-color: #ffffff;
    box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
    border-radius: 20px;
    flex-direction: column;
    flex-wrap: wrap;
  }

  /* img {
    width: 250px;
    object-fit: cover;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  } */

  /* .modalRight {
    width: 100%;
  } */

  .closeBtn {
    position: fixed;
    right: 30px;
    font-size: 2em;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-top: 3rem;
    padding: 1rem 2rem;
  }

  .btnContainer {
    display: flex;
    padding: 1rem 1rem;
  }
  .btnContainer button {
    width: 100%;
    margin: 0.5rem;
    padding: 16px 0;
    /* border: none; */
    border: 1px solid #411b57;
    /* color: #ffffff; */
  }

  .btnPrimary {
    background-color: #411b57;
    color: white;
  }

  .btnOutline {
    /* background-color: #a76a99; */
    background-color: white;
    color: #411b57;
  }

  .bold {
    font-weight: 600;
  }

  @media screen and (max-width: 500px) {
    .modalContainer {
      flex-direction: column;
      top: 0;
      left: 0;
      transform: none;
      width: 100%;
      height: 100vh;
    }
    img {
      width: 100%;
      max-height: 70vh;
      object-fit: cover;
    }

    .heading {
      margin: 1rem;
    }
  }
`;
