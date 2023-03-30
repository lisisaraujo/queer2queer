import { AddressAutofill } from "@mapbox/search-js-react";

export default function Autofill() {
  return (
    <form>
      <AddressAutofill accessToken="my-access-token-here">
        <input
          name="address"
          placeholder="Address"
          type="text"
          autoComplete="address-line1"
        />
      </AddressAutofill>
      <input
        name="apartment"
        placeholder="Apartment number"
        type="text"
        autoComplete="address-line2"
      />
      <input
        name="city"
        placeholder="City"
        type="text"
        autoComplete="address-level2"
      />
      <input
        name="state"
        placeholder="State"
        type="text"
        autoComplete="address-level1"
      />
      <input
        name="country"
        placeholder="Country"
        type="text"
        autoComplete="country"
      />
      <input
        name="postcode"
        placeholder="Postcode"
        type="text"
        autoComplete="postal-code"
      />
    </form>
  );
}
