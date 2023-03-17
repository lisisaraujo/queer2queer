import styled from "styled-components";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function CommentForm({ onSubmitComment }) {
  const router = useRouter();
  const comments = useSWR("/api/comments");

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const newComment = Object.fromEntries(formData);
    console.log("newComment", newComment);

    const response = await fetch("/api/comments/create", {
      method: "POST",
      body: JSON.stringify(newLocation),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      await response.json();
      comments.mutate();

      event.target.reset();
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  return (
    <div>
      <EntryForm onSubmit={handleSubmit}>
        <InputWrapper>
          <label htmlFor="comment">Comment:</label>
          <input id="comment" name="comment"></input>
          <label htmlFor="name">Name:</label>
          <input id="name" name="name"></input>
          <label htmlFor="age">Age</label>
          <input id="age" name="age"></input>
          <label htmlFor="sexual-orientation">Sexual Orientation:</label>
          <input id="sexual-orientation" name="sexual-orientation"></input>
          <label htmlFor="gender">Gender:</label>
          <input id="gender" name="gender"></input>
          <label htmlFor="bipoc">BiPoc:</label>
          <input id="bipoc" name="bipoc"></input>
          <button onClick={() => router.push("/")}>Submit</button>
        </InputWrapper>
      </EntryForm>
    </div>
  );
}

const EntryForm = styled.form`
  justify-content: center;
`;

const InputWrapper = styled.div`
  border: solid;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  height: 100%;
  margin-left: 10%;
  margin-right: 10%;
`;
