import { useState } from "react";
import { geocoder } from "./mapbox";

export default function AddPlaceForm({ onSubmit }) {
  const [suggestions, setSuggestions] = useState([]);
  const [currentSuggestion, setCurrentSuggestion] = useState({});
  const [text, setText] = useState("");

  function _onSubmit(event) {
    event.preventDefault();
    if (!currentSuggestion.geometry) {
      return;
    }
    onSubmit({
      description: currentSuggestion.place_name,
      lngLat: currentSuggestion.geometry.coordinates,
    });
    setCurrentSuggestion({});
    setText("");
  }

  async function onInput(event) {
    const query = event.target.value;
    const response = await geocoder.forwardGeocode({ query, limit: 5 }).send();
    setSuggestions(response.body.features);
  }

  function onSuggestionClick(suggestion) {
    setCurrentSuggestion(suggestion);
    setText(suggestion.place_name);
    setSuggestions([]);
  }

  function onChange(event) {
    setText(event.target.value);
  }

  return (
    <section className="add-place">
      <h2>Find Place</h2>
      <form onSubmit={_onSubmit} autoComplete="off">
        <input
          type="text"
          required
          onInput={onInput}
          value={text}
          onChange={onChange}
          minLength={3}
          placeholder="Type the place you want to go"
        />
        <button type="submit">Add Place</button>
        <ul>
          {suggestions.map((x) => (
            <li key={x.place_name} onClick={() => onSuggestionClick(x)}>
              {x.place_name}
            </li>
          ))}
        </ul>
      </form>
    </section>
  );
}

// import styled from "styled-components";
// import useSWR from "swr";
// import { useRouter } from "next/router";
// import ReturnButton from "./Buttons/ReturnButton";
// import { AddressAutofill } from "@mapbox/search-js-react";
// import { accessToken } from "../src/mapbox";

// export default function AddPlaceForm({ locationID }) {
//   const router = useRouter();
//   const locations = useSWR("/api/locations");

//   async function handleSubmit(event) {
//     event.preventDefault();
//     const formData = new FormData(event.target);

//     const newLocation = Object.fromEntries(formData);
//     console.log("newLocation", newLocation);

//     const apiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
//       address
//     )}.json?access_token=${accessToken}`;

//     const apiResponse = await fetch(apiUrl);

//     const features = apiResponse.data.features;
//     if (features.length > 0) {
//       const firstFeature = features[0];
//       const { lon, lat } = firstFeature.center;
//       console.log(`The coordinates of ${address} are: [${lon}, ${lat}]`);
//     }

//     const response = await fetch("/api/locations/create", {
//       method: "POST",
//       body: JSON.stringify(newLocation),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (response.ok) {
//       await response.json();
//       locations.mutate();

//       event.target.reset();
//     } else {
//       console.error(`Error: ${response.status}`);
//     }
//   }
//   return (
//     <div>
//       <ReturnButton />
//       <EntryForm onSubmit={handleSubmit}>
//         <InputWrapper>
//           <input
//             type="hidden"
//             id="location"
//             name="location"
//             value={locationID}
//           ></input>
//           <h1>Suggest Location</h1>
//           <label htmlFor="name">Name of location:</label>
//           <input id="name" name="name"></input>

//           <label htmlFor="address">Address:</label>
//           {/* <input id="lngLat" name="lngLat"></input> */}

//           <AddressAutofill accessToken={accessToken}>
//             <input
//               name="address"
//               placeholder="Address"
//               type="text"
//               autoComplete="address-line1"
//             />
//           </AddressAutofill>
//           <input
//             name="city"
//             placeholder="City"
//             type="text"
//             autoComplete="address-level2"
//           />

//           <input
//             name="country"
//             placeholder="Country"
//             type="text"
//             autoComplete="country"
//           />
//           <input
//             name="postcode"
//             placeholder="Postcode"
//             type="text"
//             autoComplete="postal-code"
//           />
//           <label htmlFor="type">Type:</label>
//           <select name="type">
//             <option value="">Select</option>
//             <option value="Bar">Bar</option>
//             <option value="Club">Club</option>
//             <option value="Cruising">Cruising</option>
//             <option value="Community-Center">Community-Center</option>
//             <option value="Other">Other</option>
//           </select>
//           <button>Submit</button>
//         </InputWrapper>
//       </EntryForm>
//     </div>
//   );
// }

// const EntryForm = styled.form`
//   justify-content: center;
// `;

// const InputWrapper = styled.div`
//   /* border: solid; */
//   display: flex;
//   flex-direction: column;
//   padding: 20px;
//   justify-content: center;
//   height: 100%;
//   margin-left: 25%;
//   margin-right: 25%;
//   margin-top: 100px;
//   border-color: blueviolet;
// `;
