import styled from "styled-components";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function CommentForm({ locationID }) {
  const router = useRouter();
  const comments = useSWR("/api/comments");
  const ageCategories = [">18", "18-25", "26-35", "36-45", "46-55", "55+"];
  const sexualOrientationCategories = [
    "Lesbian",
    "Gay",
    "Pansexual",
    "Bisexual",
    "Asexual",
    "Aromantic",
    "Queer",
    "Demisexual",
    "Heterosexual",
    "Other",
  ];
  const genderCategories = [
    "Genderfluid",
    "Genderqueer",
    "Transgender male",
    "Transgender female",
    "Nonbinary",
    "Intersex",
    "Cisgender female",
    "Cisgender male",
    "I don’t know",
    "Other",
  ];

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
                cols={40}
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
            <select value="age">
              <option>select</option>
              {ageCategories &&
                ageCategories.map((age) => (
                  <option key={age} value={age}>
                    {age}
                  </option>
                ))}
            </select>

            <label htmlFor="sexual-orientation">Sexual Orientation:</label>
            <select value={sexualOrientationCategories}>
              <option>select</option>
              {sexualOrientationCategories &&
                sexualOrientationCategories.map((orientation) => (
                  <option key={orientation} value={orientation}>
                    {orientation}
                  </option>
                ))}
            </select>
            {/* <input name="sexual_orientation" placeholder="Other: "></input> */}
            <label htmlFor="gender">Gender:</label>
            <select value={genderCategories}>
              <option>select</option>
              {genderCategories &&
                genderCategories.map((gender) => (
                  <option key={gender} value={gender}>
                    {gender}
                  </option>
                ))}
            </select>
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
  /* align-items: center; */
  text-align: start;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  /* justify-content: center; */
  height: 100%;
  margin-left: 10%;
  margin-right: 10%;

  .comment-card {
    display: flex;
    position: relative;
    padding: 20px;
    align-self: center;
  }

  .demographic-data {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    padding: 20px;
    align-content: space-around;
  }
  .submit-button {
    width: 100px;
    height: 40px;
    align-self: center;
    background-color: blue;
    color: white;
    border-radius: 10px;
  }
`;
