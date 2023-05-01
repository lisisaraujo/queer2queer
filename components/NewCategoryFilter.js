‍import { useState } from "react";
import "./filter.css";

export default function Filter() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div classname="filter"></div>

      <button onclick={() => setIsOpen(!isOpen)} className="filter__button">

      </button>

        Technologies
      

    
  );
}