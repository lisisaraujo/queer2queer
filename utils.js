export const typeCategories = [
  { value: "select", label: "Select", isDisabled: true },
  { value: "Bar", label: "Bar" },
  { value: "Club", label: "Club" },
  { value: "Cruising", label: "Cruising" },
  { value: "Community-Center", label: "Community-Center" },
  { value: "Other", label: "Other" },
];

export const ageCategories = [
  "Select",
  ">18",
  "18-25",
  "26-35",
  "36-45",
  "46-55",
  "55+",
];

export const sexualOrientationCategories = [
  "Select",
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

export const genderCategories = [
  "Select",
  "Genderfluid",
  "Genderqueer",
  "Transgender male",
  "Transgender female",
  "Nonbinary",
  "Intersex",
  "Cisgender female",
  "Cisgender male",
  "I don't know",
  "Other",
];

export const bipocCategory = ["true", "false"];

export const selectFilterColorStyles = {
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: "rgba(77, 150, 239, 0.8)",
      color: "#FFF",
      cursor: isDisabled ? "not-allowed" : "default",
    };
  },
};
