import styled from "styled-components";
import { FiFilter } from "react-icons/fi";
import Select from "react-select";
import { useState } from "react";
import { selectFilterColorStyles, typeCategories } from "../utils";
import { useRouter } from "next/router";

export default function CategoryFilter({ onChangeCategory }) {
  const iconStyles = { color: "white", fontSize: "1.2em", cursor: "pointer" };
  const router = useRouter();

  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <>
      {/* <div class="w-64">
        <div class="relative mt-1">
          <button
            type="button"
            class="relative w-full py-3 pl-3 pr-10 text-left bg-white rounded-md shadow-lg cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <span class="flex items-center">
              <span class="block ml-3 truncate">John Jackson</span>
            </span>
            <span class="absolute inset-y-0 right-0 flex items-center pr-2 ml-3 pointer-events-none">
              <svg
                class="w-5 h-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
          </button>
          <div class="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg">
            <ul
              tabindex="-1"
              role="listbox"
              aria-labelledby="listbox-label"
              aria-activedescendant="listbox-item-3"
              class="py-1 overflow-auto text-base rounded-md max-h-56 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            >
              <li
                id="listbox-item-0"
                role="option"
                class="relative py-2 pl-3 text-gray-900 cursor-default select-none hover:bg-indigo-500 hover:text-white pr-9"
              >
                <div class="flex items-center">
                  <span class="block ml-3 font-normal truncate">
                    Mick Poulaz
                  </span>
                </div>
                <span class="absolute inset-y-0 right-0 flex items-center pr-4">
                  <svg
                    class="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </li>
              <li
                id="listbox-item-1"
                role="option"
                class="relative py-2 pl-3 text-gray-900 cursor-default select-none hover:bg-indigo-500 hover:text-white pr-9"
              >
                <div class="flex items-center">
                  <span class="block ml-3 font-normal truncate">
                    Julien Schiano
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div> */}

      {
        <StyledFilter>
          <select
            name="category-list"
            id="category-list"
            onChange={onChangeCategory}
            selected
            class="block px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            name="homeFilter"
          >
            <option defaultValue="Select Filter" disabled>
              Filter
            </option>
            <option value="">All</option>
            <option value="Bar">Bar</option>
            <option value="Club">Club</option>
            <option value="Cruising">Cruising</option>
            <option value="Community-Center">Community-Center</option>
            <option value="Other">Other</option>
          </select>
        </StyledFilter>
      }
    </>
  );
}

export const StyledFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  width: fit-content;

  #category-list {
    color: white;
    background-color: rgba(77, 150, 239, 1);
    border-radius: 10px;
    width: 60px;
    height: 30px;
    border-color: transparent;
  }
  .type-list {
    background-color: rgba(77, 150, 239, 1);
  }
`;
