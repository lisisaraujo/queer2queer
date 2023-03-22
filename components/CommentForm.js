import styled from "styled-components";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function CommentForm({ onSubmitComment, locationID }) {
  const router = useRouter();
  const comments = useSWR("/api/comments");

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const newComment = Object.fromEntries(formData);
    // console.log("newComment", newComment);

    const response = await fetch("/api/comments/create", {
      method: "POST",
      body: JSON.stringify(newComment),
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
          <input
            type="hidden"
            id="location"
            name="location"
            value={locationID}
          ></input>
          <label htmlFor="comment">Comment:</label>
          <input id="comment" name="comment"></input>
          <label htmlFor="name">Name:</label>
          <input id="name" name="name"></input>
          <label htmlFor="age">Age</label>
          <select name="age">
            <option value="">Select</option>
            <option value="<18">&gt; 18</option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36-45">36-45</option>
            <option value="46-55">46-55</option>
            <option value="55+">55+</option>
          </select>
          <label htmlFor="sexual-orientation">Sexual Orientation:</label>
          <select name="sexual_orientation">
            <option value="">Select</option>
            <option value="Lesbian">Lesbian</option>
            <option value="Gay">Gay</option>
            <option value="Pansexual">Pansexual</option>
            <option value="Bisexual">Bisexual</option>
            <option value="Asexual">Asexual</option>
            <option value="Aromantic">Aromantic</option>
            <option value="Queer">Queer</option>
            <option value="Demisexual">Demisexual</option>
            <option value="Heterosexual">Heterosexual</option>
            <option value="Other(specify)">Other(specify)</option>
          </select>
          {/* <input name="sexual_orientation" placeholder="Other: "></input> */}
          <label htmlFor="gender">Gender:</label>
          <select name="gender">
            <option value="">Select</option>
            <option value="Genderfluid">Genderfluid</option>
            <option value="Genderqueer">Genderqueer</option>
            <option value="Transgender male">Transgender male</option>
            <option value="Transgender female">Transgender female</option>
            <option value="Nonbinary">Nonbinary</option>
            <option value="Intersex">Intersex</option>
            <option value="Cisgender female">Cisgender female</option>
            <option value="Cisgender male">Cisgender male</option>
            <option value="I don't know">I don't know</option>
            <option value="Other(specify)">Other(specify)</option>
          </select>
          {/* <input name="gender" placeholder="Other: "></input> */}
          <label htmlFor="bipoc">BiPoc:</label>
          <input type="checkbox" name="bipoc"></input>
          <button>Submit</button>
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
  margin-top: 100px;
  border-color: blueviolet;
`;
