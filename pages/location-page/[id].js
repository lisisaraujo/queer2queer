import styled from "styled-components";
import ReturnButton from "../../components/Buttons/ReturnButton";
import { useRouter } from "next/router";
import React, { useRef, useEffect, useState } from "react";
import FormModal from "../../components/FormModal";
import CommentCard from "../../components/Comments/CommentCard";
import Location from "../../components/Location";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdWrongLocation } from "react-icons/md";
import AddCommentButton from "../../components/Buttons/AddCommentButton";

export default function LocationDetail({ loadLocations, onRemoveLocation }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [specificLocation, setSpecificLocation] = useState();
  const [openModal, setOpenModal] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  // fetch data from database on page refresh
  function loadComments() {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetch(`/api/comments/${id}`);
      const commentsData = await data.json();
      // console.log("comments ", commentsData);
      setComments(commentsData);
      setLoading(false);
      if (isLoading) {
        return <h1>Loading...</h1>;
      }
      if (!commentsData) {
        return <h1>No data</h1>;
      }
    };
    fetchData().catch(console.error);
  }

  async function handleRemoveComment(id) {
    const response = await fetch(`/api/comments/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      await response.json();
      // console.log("routerID", id);
    } else {
      console.error(`Error: ${response.status}`);
    }
    loadComments();
  }

  async function handleRemoveLocation(id) {
    const response = await fetch(`/api/locations/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      await response.json();
      // console.log("routerID", id);
    } else {
      console.error(`Error: ${response.status}`);
    }
    loadLocations();
    router.push("/");
  }

  useEffect(() => {
    if (id) {
      const fetchSpecificLocation = async () => {
        const response = await fetch(`/api/locations/${id}`);
        const specificLocation = await response.json();
        setSpecificLocation(specificLocation);
        // console.log(specificLocation);
      };
      fetchSpecificLocation();
      loadComments();
    }
  }, [id]);

  if (specificLocation) {
    const { name, lngLat, type } = specificLocation;

    console.log("COMMENTS CL", comments);

    // console.log("SPECIFIC: ", specificLocation);

    return (
      <>
        {" "}
        <ReturnButton />
        <Location name={name} type={type} />
        <CommentCards>
          <div className="comments" key={comments}>
            {comments &&
              comments.map((item) => {
                const {
                  comment,
                  age,
                  sexual_orientation,
                  gender,
                  bipoc,
                  _id,
                  date,
                  name,
                } = item;
                return (
                  <div className="comment-card" key={_id}>
                    <CommentCard
                      onClick={() => router.push(`/${id}`)}
                      name={name}
                      comment={comment}
                      age={age}
                      gender={gender}
                      bipoc={bipoc}
                      date={date}
                      sexual_orientation={sexual_orientation}
                      onRemoveComment={() => handleRemoveComment(_id)}
                    />
                  </div>
                );
              })}
          </div>
          {/* <AddCommentButton
            onClick={() => setOpenModal(true)}
            className="modalButton"
          /> */}
          <button onClick={() => setOpenModal(true)} className="modalButton">
            <AddCommentButton />
          </button>
          <div className="modal">
            <FormModal open={openModal} onClose={() => setOpenModal(false)} />
          </div>
        </CommentCards>
        <DeleteLocation>
          <MdWrongLocation onClick={() => handleRemoveLocation(id)}>
            Delete this location
          </MdWrongLocation>
        </DeleteLocation>
      </>
    );
  }
  return (
    <>
      <h1>Loading</h1>
    </>
  );
}

const CommentCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* z-index: 2; */
  padding-top: 20px;
`;

// const CardFrame = styled.div`
//   border: solid;
//   border-color: gray;
//   display: flex;
//   flex-direction: column;
//   padding: 20px;
//   justify-content: center;
//   height: 100%;
//   margin-left: 10%;
//   margin-right: 10%;
//   margin-top: 20px;
// `;

const DeleteLocation = styled(MdWrongLocation)`
  top: 20px;
  width: 20px;
  height: 20px;
  right: 20px;
  color: #fe4b13;
  position: absolute;
  margin-top: 90vh;
`;
