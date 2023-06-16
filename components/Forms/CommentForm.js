import styled from "styled-components";
import useSWR from "swr";
import { useRouter } from "next/router";
import Select from "react-select";
import { useState } from "react";
import {
  ageCategories,
  genderCategories,
  sexualOrientationCategories,
  colorStyles,
} from "../../utils.js";
export default function CommentForm({ locationID, closeModal, loadComments }) {
  const router = useRouter();
  const comments = useSWR("/api/comments");
  const [selectedOption, setSelectedOption] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newComment = Object.fromEntries(formData);
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let currentDate = `${day}/${month}/${year}`;
    console.log(currentDate);
    newComment.date = currentDate;

    const response = await fetch("/api/comments/create", {
      method: "POST",
      body: JSON.stringify(newComment),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      await response.json();
    } else {
      console.error(`Error: ${response.status}`);
    }
    comments.mutate();
    event.target.reset();
    closeModal();
    loadComments();
  }

  return (
    <div>
      <EntryForm onSubmit={handleSubmit}>
        <InputWrapper>
          <input
            type="hidden"
            id="location"
            name="location"
            value={locationID}
          ></input>
          <div className="comment-card">
            <label>
              What's on your mind:
              <textarea
                name="comment"
                rows={6}
                cols={32}
                maxLength={200}
                placeholder="make it 200 characteres max :)"
              />
            </label>
          </div>
          <label htmlFor="comment-title">Tell us about you (OPTIONAL)</label>
          <div className="demographic-data">
            <label htmlFor="age">Age:</label>
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={ageCategories}
              name="age"
              styles={colorStyles}
            />
            <label htmlFor="sexual-orientation">Sexual Orientation:</label>
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={sexualOrientationCategories}
              name="sexual_orientation"
              styles={colorStyles}
            />
            <label htmlFor="gender">Gender:</label>

            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={genderCategories}
              name="gender"
              styles={colorStyles}
            />
            <checkbox className="checkbox">
              {" "}
              <label htmlFor="bipoc">BiPoc:</label>
              <input type="checkbox" name="bipoc"></input>
            </checkbox>
          </div>
          <button className="submit-button">Submit</button>
        </InputWrapper>
      </EntryForm>
    </div>
  );
}

const EntryForm = styled.form`
  display: flex;
  flex-direction: column;
  text-align: start;
  width: 100%;
  height: 100%;
  color: whitesmoke;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: auto;
  align-items: center;
  height: 100%;
  margin-left: 10%;
  margin-right: 10%;
  justify-content: space-evenly;

  .location-input-field {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .comment-card {
    display: flex;
    position: relative;
    align-self: center;
    width: auto;
  }

  .demographic-data {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    padding: 20px;
    align-content: space-around;
  }
  .submit-button {
    width: 120px;
    height: 50px;
    align-self: center;
    background-color: rgba(1, 72, 224, 0.7);
    box-shadow: 0px 0px 5px 3px rgba(90, 90, 90, 0.75);
    border-radius: 10px;
    margin-bottom: 10%;
    border-style: none;
    margin-top: 10px;
    color: whitesmoke;
    font-size: 1.2em;
    &:hover {
      box-shadow: 0px 0px 18px 2px rgba(125, 125, 125, 0.75);
    }
  }

  textarea {
    display: flex;
    position: relative;
    background-color: rgb(60, 60, 60);
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0px 0px 5px 3px rgba(0, 24, 255, 0.5);
    text-align: left;
    width: 100%;
    margin: 15px auto 40px auto;
    background-color: whitesmoke;
  }

  input {
    color: black;
    border-radius: 5px;
    border-style: none;
    padding: 10px;
  }
  .checkbox {
    font-size: 1.5em;
    display: flex;
    justify-content: space-evenly;
    margin: 10px auto;
  }
`;
