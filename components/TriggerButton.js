import React from "react";

export default function Trigger({ triggerText, buttonRef, showModal }) {
  return (
    <button
      className="btn btn-lg btn-danger center modal-button"
      ref={buttonRef}
      onClick={showModal}
    >
      {triggerText}
    </button>
  );
}
