import styled from "styled-components";
import { RiDeleteBinLine } from "react-icons/ri";

export default function CommentCard({
  _id,
  name,
  comment,
  age,
  sexual_orientation,
  gender,
  bipoc,
  onRemoveComment,
  date,
}) {
  return (
    <CardFrame>
      <div className="comment-card" key={_id}>
        <p className="date">{date}</p>
        <p className="comment">{comment}</p>
        <div className="demographic-data">
          <p>commented by: {name}</p>
          <button className="demographic-data-tag">{age}</button>
          <button className="demographic-data-tag">{sexual_orientation}</button>
          <button className="demographic-data-tag">{gender}</button>
          <button className="demographic-data-tag">
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
  top: 20px;
  width: 20px;
  height: 20px;
  right: 20px;
  color: #fe4b13;
`;
