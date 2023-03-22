import React from "react";
import styled from "styled-components";
import useInput from "./hooks/useInput";

const InputField = () => {
  const address = useInput("");

  return (
    <Wrapper>
      <Input placeholder="Address" {...address} />
      {address.suggestions?.length > 0 && (
        <div>
          {address.suggestions.map((suggestion, index) => {
            return (
              <p
                key={index}
                onClick={() => {
                  address.setValue(suggestion.place_name);
                  address.setSuggestions([]);
                }}
              >
                {suggestion.place_name}
              </p>
            );
          })}
        </div>
      )}
    </Wrapper>
  );
};

export default InputField;

// const Wrapper = styled.div`
//   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
//     Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
//   margin: 0 auto;
// `;

// const Input = styled.input`
//   width: 400px;
//   background: white;
//   border: none;
//   padding: 10px 20px;
//   border-radius: 30px;
//   position: relative;
//   display: grid;
//   justify-self: center;
//   &:focus {
//     outline: none;
//   }
// `;

// const SuggestionWrapper = styled.div`
//   background: white;
//   position: absolute;
//   width: 400px;
//   padding: 10px 20px;
//   border-radius: 0px 0px 10px 10px;
// `;

// const Suggestion = styled.p`
//   cursor: pointer;
//   max-width: 400px;
// `;
