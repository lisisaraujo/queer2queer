import styled from "styled-components";
import ReturnButton from "../../components/ReturnButton";
import { useRouter } from "next/router";
import React, { useRef, useEffect, useState } from "react";
import AddButton from "../../components/Buttons/AddButton";
import Link from "next/link";
import { IoIosAddCircle } from "react-icons/io";
import CommentForm from "../../components/CommentForm";

export default function LocationDetail() {
  const [comments, setComments] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [specificLocation, setSpecificLocation] = useState();

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
      // console.log(commentsData);
      if (isLoading) {
        return <h1>Loading...</h1>;
      }
      if (!commentsData) {
        return <h1>No data</h1>;
      }
    };
    fetchData().catch(console.error);
  }

  // useEffect(() => {
  //   loadComments();
  // }, []);

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
        <section className="locationDetails">
          <h1>{name}</h1>
          {/* <p>Address: {lngLat}</p> */}
          <p>Type: {type}</p>
          {/* <p>Comments: {comments}</p> */}
        </section>
        {/* <Link href="/addComment">
          {" "}
          <IoIosAddCircle />{" "}
        </Link> */}

        <CommentForm locationID={id} />
        <div className="comments">
          {comments &&
            comments.map((item) => {
              const { comment, age, sexual_orientation, gender, bipoc, _id } =
                item;
              return <li key={_id}>{comment}</li>;
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
  padding-top: 300px;
`;
