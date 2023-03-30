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
        <div className="date">{date}</div>
        <div className="demographic-data">
          {name && <p>commented by: {name}</p>}
          {age && <button className="demographic-data-tag">#{age}</button>}
          {sexual_orientation && (
            <button className="demographic-data-tag">
              #{sexual_orientation}
            </button>
          )}
          {gender && (
            <button className="demographic-data-tag">#{gender}</button>
          )}
          {bipoc && (
            <button className="demographic-data-tag">
              {bipoc ? "#BiPoc" : null}
            </button>
          )}
        </div>
        <CommentStyle>
          <div className="comment-card" key={_id}>
            <p className="date">{date}</p>
            <p className="comment">{comment}</p>
          </div>
        </CommentStyle>

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
  /* border: solid; */
  border-color: black;
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  /* align-items: center; */
  height: 100%;
  width: 100%;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 3px rgba(54, 54, 54, 0.75);

  .demographic-data-tag {
    background-color: rgba(114, 59, 216, 0.2);
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0px 0px 5px 3px rgba(114, 59, 216, 0.3);
    border-style: none;
    padding: 5px;
    margin: 3px;
    border-radius: 10%;
  }

  .date {
    font-size: 0.7rem;
    text-align: right;
  }

  /* .demographic-data-tag {
    background-color: rgb(60, 60, 60);
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0px 0px 5px 3px rgba(54, 54, 54, 0.75);
    border-style: none;
    padding: 5px;
    margin: 1px;
    border-radius: 10%;
  } */
`;

const CommentStyle = styled.div`
  display: flex;
  position: relative;
  background-color: rgb(60, 60, 60);
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0px 0px 5px 3px rgba(54, 54, 54, 0.75);
  text-align: left;
  width: 100%;
  margin: 40px auto;

  .comment {
    align-self: center;
  }
`;

const DeleteIcon = styled(RiDeleteBinLine)`
  width: 20px;
  height: 20px;
  color: orangered;
  align-self: flex-end;
  position: relative;
`;
