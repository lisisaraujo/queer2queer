import CommentForm from "../../components/CommentForm";
import styled from "styled-components";
import ReturnButton from "../../components/ReturnButton";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function LocationDetail({ locations }) {
  const [specificLocation, setSpecificLocation] = useState();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    console.log("Oi");
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

    // console.log("SPECIFIC: ", specificLocation);

    return (
      <Container>
        <ReturnButton />
        <section className="locationDetails">
          <h1>{name}</h1>
          <p>Address: {lngLat}</p>
          <p>Type: {type}</p>
          {/* <p>Comments: {comments}</p> */}
        </section>
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
  padding-top: 500px;
`;
