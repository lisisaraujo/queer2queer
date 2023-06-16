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
  return (
    <>
      <CardFrame>
        <div className="demographic-data">
          {name && <p>commented by: {name} </p>}
          {age && <button className="demographic-data-tag">#{age} </button>}
          {sexual_orientation && (
            <button className="demographic-data-tag">
              #{sexual_orientation}
            </button>
          )}
          {gender && (
            <button className="demographic-data-tag">#{gender} </button>
          )}
          {bipoc && (
            <button className="demographic-data-tag">
              {bipoc ? "#BiPoc " : null}
            </button>
          )}
        </div>
        <CommentStyle>
          <p className="comment">{comment}</p>
        </CommentStyle>

        {session ? <DeleteIcon onClick={() => onRemoveComment(_id)} /> : null}
        <div className="date">{date}</div>
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
  border-color: transparent;
  border-style: none;
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 15px;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 1px 4px 4px 1px rgba(54, 54, 54, 0.1);
  color: #101828;
  background-color: #fcfcfd;

  .demographic-data-tag {
    background-color: inherit;
    color: #4d96ef;
    font-weight: bold;
    border-style: none;
    padding: 0% 2% 3% 0%;
  }

  .date {
    font-size: 0.6rem;
    text-align: right;
    color: #101828;
  }
`;

const CommentStyle = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;

const DeleteIcon = styled(RiDeleteBinLine)`
  width: 20px;
  height: 20px;
  color: orangered;
  align-self: flex-end;
  position: relative;
`;
