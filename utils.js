export const typeCategories = [
  { value: "select", label: "Select", isDisabled: true },
  { value: "Bar", label: "Bar" },
  { value: "Club", label: "Club" },
  { value: "Cruising", label: "Cruising" },
  { value: "Community-Center", label: "Community-Center" },
  { value: "Other", label: "Other" },
];

export const ageCategoriesArr = [
  "Select",
  ">18",
  "18-25",
  "26-35",
  "36-45",
  "46-55",
  "55+",
];

export const sexualOrientationCategoriesArr = [
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

export const genderCategoriesArr = [
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

export const bipocCategory = [
  { value: "", label: "All" },
  { value: true, label: "Yes" },
  { value: false, label: "No" },
];

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

export const ageCategories = [
  { value: "", label: "All" },
  { value: ">18", label: ">18" },
  { value: "18-25", label: "18-25" },
  { value: "26-35", label: "26-35" },
  { value: "36-45", label: "36-45" },
  { value: "46-55", label: "46-55" },
  { value: "55+", label: "55+" },
];

export const sexualOrientationCategories = [
  { value: "", label: "All" },
  { value: "Lesbian", label: "Lesbian" },
  { value: "Gay", label: "Gay" },
  { value: "Pansexual", label: "Pansexual" },
  { value: "Bisexual", label: "Bisexual" },
  { value: "Asexual", label: "Asexual" },
  { value: "Aromantic", label: "Aromantic" },
  { value: "Queer", label: "Queer" },
  { value: "Demisexual", label: "Demisexual" },
  { value: "Heterosexual", label: "Heterosexual" },
  { value: "Other", label: "Other" },
];

export const genderCategories = [
  { value: "", label: "All" },
  { value: "Genderfluid", label: "Genderfluid" },
  { value: "Genderqueer", label: "Genderqueer" },
  { value: "Transgender male", label: "Transgender male" },
  { value: "Transgender female", label: "Transgender female" },
  { value: "Nonbinary", label: "Nonbinary" },
  { value: "Intersex", label: "Intersex" },
  { value: "Cisgender female", label: "Cisgender female" },
  { value: "Cisgender male", label: "Cisgender male" },
  { value: "I don’t know", label: "I don’t know" },
  { value: "Other", label: "Other" },
];

export const colorStyles = {
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
