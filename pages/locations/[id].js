import { useRouter } from "next/router";
import CommentForm from "../../Components/CommentForm";
import styled from "styled-components";
import ReturnButton from "../../Components/ReturnButton";

export default function DetailPage({ locations }) {
  const router = useRouter();
  const locationId = locations.find(
    (location) => location._id === router.query._id
  );
  const { name, type, lngLat, comments } = locationId;

  const handleSubmitComment = (event) => {
    event.preventDefault();
    const date = new Date().toLocaleString();
    const myFormData = new FormData(event.target);
    const formDataObj = Object.fromEntries(myFormData.entries());
    const commentAndDate = { ...formDataObj, date: date };

    updateLocationInfo((draft) => {
      let currentLocation = draft.defaultValue.find(
        (location) => location.slug === slug
      );
      if (!currentLocation) {
        draft.defaultValue.push({
          slug,
          isFavorite: false,
          comments: [commentAndDate],
        });
      } else {
        currentLocation.comments = [
          commentAndDate,
          ...currentLocation.comments,
        ];
      }
    });
    event.target.reset();
    const input = document.getElementById("comment");
    input.focus();
  };

  const currentInfo = locationInfo.defaultValue.find((location) => {
    return piece.slug === slug;
  });

  return (
    <Container>
      <ReturnButton />
      {/* <ImageContainer>
        <Image
          src={imageSource}
          alt="image of the day"
          width={600}
          height={600}
          // fill
        />
      </ImageContainer> */}
      {/* <ColorsContainer>
        {colors.map((color) => {
          return (
            <>
              <ColorDiv key={color} style={{ backgroundColor: color }}>
                {color}
              </ColorDiv>
            </>
          );
        })}
      </ColorsContainer> */}
      <section className="paintingDetails">
        <p>Name: {name}</p>
        <p>Address: {lngLat}</p>
        <p>Type: {type}</p>
        <p>Comments: {comments}</p>
      </section>
      {/* <FavoriteButton slug={slug} onToggleFavorite={onToggleFavorite} /> */}
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  margin: 20px 0;
`;

const ColorsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 600px;
`;

const ColorDiv = styled.div`
  background-color: #fff;
  flex-grow: 1;
  color: #000;
  padding: 10px;
  font-size: 0.7rem;
  height: 30px;
  /* color: rgb(60, 60, 60); */
`;
