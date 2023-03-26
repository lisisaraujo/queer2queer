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
    <>
      <CardFrame>
        <CommentStyle>
          <div className="comment-card" key={_id}>
            <p className="date">{date}</p>
            <p className="comment">{comment}</p>
          </div>
        </CommentStyle>
        <div className="demographic-data">
          <p>commented by: {name}</p>
          <button className="demographic-data-tag">{age}</button>
          <button className="demographic-data-tag">{sexual_orientation}</button>
          <button className="demographic-data-tag">{gender}</button>
          <button className="demographic-data-tag">
            {bipoc ? "BiPoc" : null}
          </button>
        </div>

        <DeleteIcon onClick={() => onRemoveComment(_id)} />
      </CardFrame>
    </>
  );
}

const CardFrame = styled.div`
  border: solid;
  border-color: rgba(77, 150, 239, 1);
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 20px;
  width: 400px;
  border-radius: 10px;
`;

const CommentStyle = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 15px;
  text-align: left;
  box-shadow: 0px 0px 18px 2px rgba(54, 54, 54, 0.75);
  width: 350px;
  margin: 40px auto;

  .date {
    font-size: 0.7rem;
    text-align: right;
  }
  .comment {
    align-self: center;
  }

  button {
    background-color: wheat;
  }
`;

const DeleteIcon = styled(RiDeleteBinLine)`
  width: 20px;
  height: 20px;
  color: orangered;
  align-self: flex-end;
  position: relative;
`;
