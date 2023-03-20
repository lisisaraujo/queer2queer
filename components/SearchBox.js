import { accessToken } from "@/mapbox";
import React, { useRef, useEffect, useState } from "react";

export default function SearchBox() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <form>
      <SearchBox
        accessToken={accessToken}
        popoverOptions={{
          placement: "bottom-start",
          flip: true,
          offset: 5,
        }}
      />
    </form>
  );
}
