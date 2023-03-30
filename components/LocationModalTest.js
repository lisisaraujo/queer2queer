import { useRouter } from "next/router";
import styled from "styled-components";
import Modal from "react-modal";
import React, { useRef, useEffect, useState } from "react";
import CommentCard from "./Comments/CommentCard";
import { MdWrongLocation } from "react-icons/md";
import Header from "./Header";
import { useSession, getSession } from "next-auth/react";
import Location from "./LocationCard";
import ModalCommentForm from "./ModalCommentForm";

export default function LocationModalTest({ loadLocations }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [specificLocation, setSpecificLocation] = useState();

  const { data: session } = useSession();
  console.log(session);

  const router = useRouter();
  const { id } = router.query;
  const customStyles = {
    content: {
      top: "55%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0px",
      background: "inherit",
      borderRadius: "10px",
    },
  };

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

    // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
    Modal.setAppElement("div");

    const router = useRouter();
    const { id } = router.query;
    const iconStyles = { color: "black", fontSize: "2.5em", cursor: "pointer" };

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
      setIsOpen(true);
    }

    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      // subtitle.style.color = "#f00";
    }

    function closeModal() {
      setIsOpen(false);
    }

    return (
      <div className="modal-div">
        <div className="location-link">
          <a href="#">{name}</a>
        </div>

        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Modal"
          locationName={locationName}
        >
          <Header name={name} />
          <StyledLocationContainer>
            <div className="location-container">
              <Location specificLocation={specificLocation} />
              <div className="title-header">
                {" "}
                <h2>Comments</h2>
                <div className="modal">
                  <ModalCommentForm />
                </div>
              </div>

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

              {session ? (
                <DeleteLocation>
                  <MdWrongLocation
                    onClick={() => handleRemoveLocation(id)}
                  ></MdWrongLocation>
                </DeleteLocation>
              ) : null}
            </div>
          </StyledLocationContainer>
        </Modal>
      </div>
    );
  }
}

const DeleteLocation = styled(MdWrongLocation)`
  display: flex;
  align-items: flex-end;
  align-self: flex-end;
  width: 20px;
  height: 20px;
  color: red;
  position: relative;
`;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: { session },
  };
};

const StyledLocationContainer = styled.div`
  width: 100vw;
  height: 100vh;

  .title-header {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 40px;
  }

  .comment-card {
    margin-right: 10%;
    margin-left: 10%;
  }
`;
