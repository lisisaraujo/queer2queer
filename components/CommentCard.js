import styled from "styled-components";
import React, { useRef, useEffect, useState } from "react";
import {
  RiDeleteBinLine,
  RiPencilLine,
  RiCheckboxCircleLine,
} from "react-icons/ri";

export default function CommentCard({
  _id,
  name,
  comment,
  age,
  sexual_orientation,
  gender,
  bipoc,
  onRemoveComment,
}) {
  return (
    <CardFrame>
      <div className="comment-card" key={_id}>
        {/* <p className="date" key={date}>
          {date}
        </p> */}
        <p>{name}</p>
        <p className="comment" key={comment}>
          {comment}
        </p>
        <div className="demographic-data">
          <button className="demographic-data-tag" key={age}>
            {age}
          </button>
          <button className="demographic-data-tag" key={sexual_orientation}>
            {sexual_orientation}
          </button>
          <button className="demographic-data-tag" key={gender}>
            {gender}
          </button>
          <button className="demographic-data-tag" key={bipoc}>
            {bipoc ? "BiPoc" : null}
          </button>
        </div>
      </div>
      <DeleteIcon onClick={() => onRemoveComment(_id)} />
      {/* <EditIcon onClick={() => setIsEditing(true)} /> */}
    </CardFrame>
  );
}

const CardFrame = styled.div`
  border: solid;
  border-color: gray;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  height: 100%;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 20px;
`;

const DeleteIcon = styled(RiDeleteBinLine)`
  position: relative;
  top: 20px;
  width: 20px;
  height: 20px;
  right: 20px;
  color: #fe4b13;
`;
