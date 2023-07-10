import styled from "styled-components";
import useSWR from "swr";
import Select from "react-select";
import { useRouter } from "next/router";
import { useState } from "react";
import { AddressAutofill } from "@mapbox/search-js-react";
import { accessToken } from "../../mapbox";

import { selectFilterColorStyles, typeCategories } from "../../utils";

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
    // console.log("newLocation", newLocation);

    const response = await fetch("/api/locations/create", {
      method: "POST",
      body: JSON.stringify(newLocation),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log("response, ", response);
    if (response.ok) {
      await response.json();
      // console.log("RESPONSE", response);
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
          <div className="location-input-field">
            <label htmlFor="name">Name of location:</label>
            <input id="name" name="name"></input>
            <label htmlFor="address">Address:</label>
            <div className="address-input">
              <AddressAutofill accessToken={accessToken}>
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
              </AddressAutofill>
            </div>
            <label htmlFor="type">What type of location is it?</label>
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
  color: black;
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
  margin: 0px 30px;

  .location-input-field {
    margin-top: 25%;
    display: flex;
    flex-direction: column;
    /* justify-content: space-evenly;
    position: relative; */
    gap: 20px;
  }
  .address-input {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .submit-button {
    display: flex;
    width: 207px;
    height: 48px;
    padding: 24px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 200px;
    border: 1px solid #4d96ef;
    background: #4d96ef;
  }

  textarea {
    display: flex;
    position: relative;
    /* background-color: rgb(60, 60, 60); */
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0px 0px 5px 3px rgba(54, 54, 54, 0.75);
    text-align: left;
    width: 100%;
    margin: 40px auto;

    /* background-color: inherit; */
  }

  input {
    color: black;
    border-radius: 5px;
    border: none;
    /* box-shadow: 0px 0px 5px 3px rgba(90, 90, 90, 0.75); */
  }

  #name {
    border-color: black;
  }
`;
