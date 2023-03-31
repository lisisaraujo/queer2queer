import styled from "styled-components";
import { useRouter } from "next/router";
import React, { useRef, useEffect, useState, useMemo } from "react";
import CommentCard from "./Comments/CommentCard";
import { MdWrongLocation } from "react-icons/md";
import Header from "./Header";
import { useSession, getSession } from "next-auth/react";
import Location from "./LocationCard";
import ModalCommentForm from "./ModalCommentForm";
import useSWR from "swr";
import CommentFilter from "./CommentFilter";

export default function LocationDetails({ loadLocations }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [specificLocation, setSpecificLocation] = useState();
  const locations = useSWR("/api/locations");
  const iconStyles = { color: "red", fontSize: "2em" };

  const { data: session } = useSession();
  console.log(session);

  const router = useRouter();
  const { id } = router.query;
  //////////////////////

  const [filteredComments, setFilteredComments] = useState(comments);
  const [selectedCategory, setSelectedCategory] = useState("");

  const [selectedAgeOption, setSelectedAgeOption] = useState(null);
  const [selectedGenderOption, setSelectedGenderOption] = useState(null);
  const [selectedsexualOrientationOption, setSelectedsexualOrientationOption] =
    useState(null);
  const [selectedBipocOption, setSelectedBipocOption] = useState(null);

  useEffect(() => {
    setFilteredComments(comments);
  }, [comments]);

  const handleCategoryChange = (event) => {
    setSelectedAgeOption(event.target.value);
    setSelectedGenderOption(event.target.value);
  };

  console.log(
    "selected option",
    selectedAgeOption,
    selectedGenderOption,
    selectedBipocOption,
    selectedsexualOrientationOption
  );
  console.log("filtered comments", filteredComments);

  const getFilteredList = () => {
    // if (!selectedAgeOption && !selectedGenderOption) {
    //   return filteredComments;
    // }
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
      console.log(selectedBipocOption);
      filtered = filtered.filter(
        (comment) => comment.bipoc === selectedBipocOption.value
      );
    }
    if (
      !selectedAgeOption ||
      !selectedGenderOption ||
      !selectedsexualOrientationOption ||
      !selectedBipocOption
    ) {
      return filtered;
    }
    return filtered;
  };
  // if () filteredComments.filter((comment) => {
  //     console.log(comment.age, selectedAgeOption.value);
  //     return comment.age === selectedAgeOption.value && comment.gender === selectedGenderOption.value
  //   });

  // const filteredList = useMemo(getFilteredList, [
  //   selectedAgeOption,
  //   selectedGenderOption,
  //   filteredComments,
  // ]);

  const filteredList = getFilteredList();
  //////////////////////

  function loadComments() {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetch(`/api/comments/${id}`);
      const commentsData = await data.json();
      // console.log("comments ", commentsData);
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
    locations.mutate();
    router.push("/");
    loadLocations();
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
    const { name, lngLat, type, address, city, postcode } = specificLocation;

    console.log("COMMENTS CL", comments);

    // console.log("SPECIFIC: ", specificLocation);

    return (
      <>
        <Header>{name}</Header>
        {/* <CommentFilter /> */}
        <StyledLocationContainer>
          <div className="location-container">
            <Location specificLocation={specificLocation} />
            <div className="title-header">
              {" "}
              <h2>Comments</h2>
              <div className="modal">
                <ModalCommentForm loadComments={loadComments} />
              </div>
            </div>
            <div className="comment-filter">
              {" "}
              <CommentFilter
                handleCategoryChange={handleCategoryChange}
                setSelectedAgeOption={setSelectedAgeOption}
                setSelectedGenderOption={setSelectedGenderOption}
                setSelectedsexualOrientationOption={
                  setSelectedsexualOrientationOption
                }
                // sexualOrientationCategories={sexualOrientationCategories}
                selectedAgeOption={selectedAgeOption}
                selectedGenderOption={selectedGenderOption}
                selectedBipocOption={setSelectedBipocOption}
              />
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
                  style={iconStyles}
                  onClick={() => {
                    console.log("DELETE LOCATION CLICKED");
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

// const DeleteLocation = styled(MdWrongLocation)`
//   display: flex;
//   align-items: flex-end;
//   align-self: flex-end;
//   width: 20px;
//   height: 20px;
//   color: red;
//   position: relative;
//   z-index: 2;
// `;

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
  color: #bfbdbd;
  border-bottom: solid 0.5px whitesmoke;

  .title-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    justify-content: space-around;
    align-items: center;
    margin: 40px 0px;
    color: #bfbdbd;
    border-bottom: solid 0.5px whitesmoke;
  }

  .comment-filter {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 10px 0px;
    font-size: 1em;
  }
  .comment-card {
    margin-right: 10%;
    margin-left: 10%;
  }

  .delete-location {
    /* margin: 20px 10px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    justify-content: center;
  }
`;
