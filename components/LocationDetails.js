import styled from "styled-components";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import { MdWrongLocation } from "react-icons/md";
import Header from "./Header";
import { useSession, getSession } from "next-auth/react";
import LocationHeaderDetails from "./LocationHeaderDetails";
import ModalCommentForm from "./Modals/ModalCommentForm";
import useSWR from "swr";
import ModalCommentFilter from "./Modals/ModalCommentFilter";

export default function LocationDetails({ loadLocations, specificLocation }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const locations = useSWR("/api/locations");
  const iconStylesDelete = { color: "red", fontSize: "2em" };

  const { data: session } = useSession();

  const router = useRouter();
  const { id } = router.query;
  //////////////////////

  const [filteredComments, setFilteredComments] = useState(comments);
  const [selectedAgeOption, setSelectedAgeOption] = useState(null);
  const [selectedGenderOption, setSelectedGenderOption] = useState(null);
  const [selectedsexualOrientationOption, setSelectedsexualOrientationOption] =
    useState(null);
  const [selectedBipocOption, setSelectedBipocOption] = useState(null);

  useEffect(() => {
    loadComments();
    setFilteredComments(comments);
  }, [comments]);

  const clearFilter = () => {
    setSelectedAgeOption("");
    setSelectedGenderOption("");
    setSelectedsexualOrientationOption("");
    setSelectedBipocOption("");
  };

  const getFilteredList = () => {
    let filtered = [...filteredComments];

    if (selectedAgeOption) {
      filtered = filtered.filter(
        (comment) => comment.age === selectedAgeOption.value
      );
    }
    if (selectedGenderOption) {
      filtered = filtered.filter(
        (comment) => comment.gender === selectedGenderOption.value
      );
    }
    if (selectedsexualOrientationOption) {
      filtered = filtered.filter(
        (comment) =>
          comment.sexual_orientation === selectedsexualOrientationOption.value
      );
    }
    if (selectedBipocOption) {
      filtered = filtered.filter(
        (comment) => comment.bipoc === selectedBipocOption.value
      );
    }

    return filtered;
  };

  let filteredList = getFilteredList();

  //////////////////////

  function loadComments() {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetch(`/api/comments/${id}`);
      const commentsData = await data.json();
      setComments(commentsData);
      setLoading(false);
      if (isLoading) {
        return <h1>Comments Loading...</h1>;
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
    } else {
      console.error(`Error: ${response.status}`);
    }
    locations.mutate();
    router.push("/");
    loadLocations();
  }

  if (specificLocation) {
    const { name, lngLat, type, address, city, postcode } = specificLocation;

    return (
      <>
        <Header>{name}</Header>
        <StyledLocationContainer>
          <div className="location-container">
            <LocationHeaderDetails specificLocation={specificLocation} />
            <div className="title-header">
              <h3>Comments</h3>
              <div className="modal">
                <ModalCommentForm loadComments={loadComments} />
                <ModalCommentFilter
                  setSelectedAgeOption={setSelectedAgeOption}
                  setSelectedGenderOption={setSelectedGenderOption}
                  setSelectedsexualOrientationOption={
                    setSelectedsexualOrientationOption
                  }
                  setSelectedBipocOption={setSelectedBipocOption}
                  selectedsexualOrientationOption={
                    selectedsexualOrientationOption
                  }
                  selectedAgeOption={selectedAgeOption}
                  selectedGenderOption={selectedGenderOption}
                  selectedBipocOption={selectedBipocOption}
                  getFilteredList={getFilteredList}
                  clearFilter={clearFilter}
                  loadComments={loadComments}
                />
              </div>
            </div>
            <div className="comments" key={comments}>
              {filteredList.map((item) => {
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
            {session ? (
              <div className="delete-location">
                <h4>Delete this location</h4>
                <MdWrongLocation
                  style={iconStylesDelete}
                  onClick={() => {
                    handleRemoveLocation(id);
                  }}
                />
              </div>
            ) : null}
          </div>
        </StyledLocationContainer>
      </>
    );
  }
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: { session },
  };
};

const StyledLocationContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  color: #101828;
  h3 {
    text-align: center;
  }
  .title-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 5% 10%;
    font-weight: bold;
  }

  .modal {
    display: flex;
    flex-direction: row;
  }

  .comment-card {
    margin-right: 5%;
    margin-left: 5%;
  }

  .delete-location {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    justify-content: center;
  }
`;
