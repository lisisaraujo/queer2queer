import styled from "styled-components";
import { RiDeleteBinLine } from "react-icons/ri";
import { useSession, getSession } from "next-auth/react";

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
  const { data: session } = useSession();
  console.log("session", session);
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
          {age && <button className="demographic-data-tag">{age}</button>}
          {sexual_orientation && (
            <button className="demographic-data-tag">
              {sexual_orientation}
            </button>
          )}
          {gender && <button className="demographic-data-tag">{gender}</button>}
          {bipoc && (
            <button className="demographic-data-tag">
              {bipoc ? "BiPoc" : null}
            </button>
          )}
        </div>

        {session ? <DeleteIcon onClick={() => onRemoveComment(_id)} /> : null}
      </CardFrame>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: "/login",
  //     },
  //   };
  // }

  return {
    props: { session },
  };
};

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
  margin-bottom: 20px;
  width: 100%;
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
