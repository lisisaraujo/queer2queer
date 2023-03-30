import styled from "styled-components";
import useSWR from "swr";
import Select from "react-select";
import { useRouter } from "next/router";
import { useState } from "react";

// import { AddressAutofill } from "@mapbox/search-js-react";

import { selectFilterColorStyles, typeCategories } from "../utils";

export default function AddPlaceForm({
  locationID,
  loadLocations,
  closeModal,
}) {
  const router = useRouter();
  const locations = useSWR("/api/locations");
  const [selectedOption, setSelectedOption] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newLocation = Object.fromEntries(formData);
    console.log("newLocation", newLocation);

    const response = await fetch("/api/locations/create", {
      method: "POST",
      body: JSON.stringify(newLocation),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("response, ", response);
    if (response.ok) {
      await response.json();
      console.log("RESPONSE", response);
    } else {
      console.error(`Error: ${response.status}`);
    }
    locations.mutate();
    event.target.reset();
    closeModal();
    loadLocations();
  }
  return (
    <>
      <EntryForm onSubmit={handleSubmit}>
        <InputWrapper>
          <input
            type="hidden"
            id="location"
            name="location"
            value={locationID}
          ></input>
          <h2>Suggest Location</h2>
          <div className="location-input-field">
            {" "}
            <label htmlFor="name">Name of location:</label>
            <input id="name" name="name"></input>
            <label htmlFor="address">Address:</label>
            {/* <AddressAutofill accessToken={accessToken}> */}
            <input
              name="address"
              placeholder="Address"
              type="text"
              autoComplete="address-line1"
            />
            <input
              name="city"
              placeholder="City"
              type="text"
              autoComplete="address-level2"
            />
            <input
              name="postcode"
              placeholder="Postcode"
              type="text"
              autoComplete="postal-code"
            />
            {/* </AddressAutofill> */}
            <label htmlFor="type">Type:</label>
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={typeCategories}
              name="type"
              styles={selectFilterColorStyles}
            />
          </div>

          <button className="submit-button">Submit</button>
        </InputWrapper>
      </EntryForm>
    </>
  );
}

const EntryForm = styled.form`
  display: flex;
  position: relative;
  flex-direction: column;
  text-align: start;
  width: 100%;
  height: 100%;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: auto;
  align-items: center;
  height: auto;
  /* width: auto; */
  justify-content: space-evenly;

  .location-input-field {
    display: flex;
    flex-direction: column;
    /* justify-content: space-evenly;
    position: relative; */
    gap: 10px;
  }

  .submit-button {
    width: 80px;
    height: 40px;
    align-self: center;
    background-color: rgba(77, 150, 239, 0.8);
    box-shadow: 0px 0px 5px 3px rgba(90, 90, 90, 0.75);
    color: whitesmoke;
    border-radius: 10px;
    margin-bottom: 10%;
    border-style: none;
    margin-top: 30px;
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
    border-radius: 5px;
    border: none;
    /* box-shadow: 0px 0px 5px 3px rgba(90, 90, 90, 0.75); */
  }
`;
