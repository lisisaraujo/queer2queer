import styled from "styled-components";
import ReturnButton from "../../components/Buttons/ReturnButton";
import { useRouter } from "next/router";
import React, { useRef, useEffect, useState } from "react";
import FormModal from "../../components/FormModal";
import CommentCard from "../../components/CommentCard";
import Location from "../../components/Location";
import CommentFilter from "../../components/CommentFilter";

export default function LocationDetail() {
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
      console.log("comments ", commentsData);
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
      console.log("routerID", id);
    } else {
      console.error(`Error: ${response.status}`);
    }
    loadComments();
  }

  useEffect(() => {
    if (id) {
      console.log("Oi");
      const fetchSpecificLocation = async () => {
        const response = await fetch(`/api/locations/${id}`);
        const specificLocation = await response.json();
        setSpecificLocation(specificLocation);
        console.log(specificLocation);
      };
      fetchSpecificLocation();
      loadComments();
    }
  }, [id]);

  if (specificLocation) {
    const { name, lngLat, type } = specificLocation;

    console.log("COMMENTS CL", comments);

    console.log("SPECIFIC: ", specificLocation);

    return (
      <Container>
        <ReturnButton />
        <Location name={name} type={type} />
        <div className="modal">
          <button onClick={() => setOpenModal(true)} className="modalButton">
            Add Comment
          </button>
          <FormModal open={openModal} onClose={() => setOpenModal(false)} />
        </div>
        <div className="comments">
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
                <div className="comment-card">
                  <CommentCard
                    onClick={() => router.push(`/${id}`)}
                    key={_id}
                    name={name}
                    comment={comment}
                    age={age}
                    gender={gender}
                    bipoc={bipoc}
                    date={date}
                    sexual_orientation={sexual_orientation}
                    onRemoveComment={() => handleRemoveComment(_id)}
                    id={_id}
                  />
                </div>
              );
            })}
        </div>
      </Container>
    );
  }
  return (
    <>
      <h1>Loading</h1>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  padding-top: 20px;
`;

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
