import CommentForm from "./CommentForm";
import styled from "styled-components";
import ReturnButton from "./ReturnButton";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function LocationDetail({ locations }) {
  const [specificLocation, setSpecificLocation] = useState();
  const { id } = router.query;

  useEffect(() => {
    const fetchSpecificLocation = async () => {
      const response = await fetch(`/api/locations/${id}`);
      const specificLocation = await response.json();
      setSpecificLocation(specificLocation);
      console.log(specificLocation);
    };
    fetchSpecificLocation();
  }, [id]);

  if (specificLocation) {
    const { name, lngLat, type, comments } = specificLocation;

    return (
      <Container>
        <ReturnButton />
        <section className="locationDetails">
          <h1>{name}</h1>
          <p>Address: {lngLat}</p>
          <p>Type: {type}</p>
          <p>Comments: {comments}</p>
        </section>
        ;
        <CommentForm onSubmitComment={handleSubmitComment} />
        {currentInfo &&
          currentInfo.comments.map((comment, index) => {
            return (
              <div className="commentCard" key={index}>
                <p className="date">{comment.date}</p>
                <p className="comment">{comment.comment}</p>
              </div>
            );
          })}
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
`;
