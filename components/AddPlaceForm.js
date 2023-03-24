import styled from "styled-components";
import useSWR from "swr";
import { useRouter } from "next/router";
import ReturnButton from "./Buttons/ReturnButton";
// import { AddressAutofill } from "@mapbox/search-js-react";
import { accessToken } from "../src/mapbox";

export default function AddPlaceForm({ locationID }) {
  const router = useRouter();
  const locations = useSWR("/api/locations");

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
    if (response.ok) {
      await response.json();
      console.log("RESPONSE", response);
    } else {
      console.error(`Error: ${response.status}`);
    }
    locations.mutate();
    event.target.reset();
    router.push("/");
  }
  return (
    <div>
      <ReturnButton />
      <EntryForm onSubmit={handleSubmit}>
        <InputWrapper>
          <input
            type="hidden"
            id="location"
            name="location"
            value={locationID}
          ></input>
          <h1>Suggest Location</h1>
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
          <select name="type">
            <option value="">Select</option>
            <option value="Bar">Bar</option>
            <option value="Club">Club</option>
            <option value="Cruising">Cruising</option>
            <option value="Community-Center">Community-Center</option>
            <option value="Other">Other</option>
          </select>
          <button onClick={() => console.log("clickeddd")}>Submit</button>
        </InputWrapper>
      </EntryForm>
    </div>
  );
}

const EntryForm = styled.form`
  justify-content: center;
`;

const InputWrapper = styled.div`
  /* border: solid; */
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  height: 100%;
  margin-left: 25%;
  margin-right: 25%;
  margin-top: 100px;
  border-color: blueviolet;
`;
