import styled from "styled-components";
import useSWR from "swr";
import { useRouter } from "next/router";
import Select from "react-select";
import { useState } from "react";

export default function CommentForm({ locationID }) {
  const router = useRouter();
  const comments = useSWR("/api/comments");
  const [selectedOption, setSelectedOption] = useState(null);

  const ageCategories = [
    { value: "select", label: "Select", isDisabled: true },
    { value: ">18", label: ">18" },
    { value: "18-25", label: "18-25" },
    { value: "26-35", label: "26-35" },
    { value: "36-45", label: "36-45" },
    { value: "46-55", label: "46-55" },
    { value: "55+", label: "55+" },
  ];

  const sexualOrientationCategories = [
    { value: "select", label: "Select", isDisabled: true },
    { value: "Lesbian", label: "Lesbian" },
    { value: "Gay", label: "Gay" },
    { value: "Pansexual", label: "Pansexual" },
    { value: "Bisexual", label: "Bisexual" },
    { value: "Asexual", label: "Asexual" },
    { value: "Aromantic", label: "Aromantic" },
    { value: "Queer", label: "Queer" },
    { value: "Demisexual", label: "Demisexual" },
    { value: "Heterosexual", label: "Heterosexual" },
    { value: "Other", label: "Other" },
  ];

  const genderCategories = [
    { value: "select", label: "Select", isDisabled: true },
    { value: "Genderfluid", label: "Genderfluid" },
    { value: "Genderqueer", label: "Genderqueer" },
    { value: "Transgender male", label: "Transgender male" },
    { value: "Transgender female", label: "Transgender female" },
    { value: "Nonbinary", label: "Nonbinary" },
    { value: "Intersex", label: "Intersex" },
    { value: "Cisgender female", label: "Cisgender female" },
    { value: "Cisgender male", label: "Cisgender male" },
    { value: "I don’t know", label: "I don’t know" },
    { value: "Other", label: "Other" },
  ];

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newComment = Object.fromEntries(formData);
    newComment.date = new Date();
    console.log("newComment", newComment);

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
    router.push("/");
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
          <label htmlFor="comment-title">Tell us about you (optional)</label>
          <div className="demographic-data">
            <label htmlFor="name">Name:</label>
            <input key="name" id="name" name="name"></input>
            <label htmlFor="age">Age:</label>

            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={ageCategories}
              name="age"
            />
            <label htmlFor="sexual-orientation">Sexual Orientation:</label>
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={sexualOrientationCategories}
              name="sexual_orientation"
            />
            <label htmlFor="gender">Gender:</label>

            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={genderCategories}
              name="gender"
            />
            <checkbox>
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
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 5px; */
  /* justify-content: center; */
  height: 100%;
  width: auto;
  margin-left: 10%;
  margin-right: 10%;

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
    width: 80px;
    height: 40px;
    align-self: center;
    background-color: rgb(60, 60, 60);
    box-shadow: 0px 0px 5px 3px rgba(54, 54, 54, 0.75);
    color: white;
    border-radius: 10px;
    margin-bottom: 10%;
    border-style: none;
  }

  textarea {
    display: flex;
    position: relative;
    background-color: rgb(60, 60, 60);
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0px 0px 5px 3px rgba(54, 54, 54, 0.75);
    text-align: left;
    width: 100%;
    margin: 40px auto;
    .date {
      font-size: 0.7rem;
      text-align: right;
    }
    .comment {
      align-self: center;
    }
    background-color: inherit;
  }

  input {
    color: black;
  }
  select {
    background-color: black;
  }
`;
