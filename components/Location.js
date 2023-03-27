import { FaGlassMartiniAlt } from "react-icons/fa";
import { BsFillCameraVideoOffFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { MdDirectionsBoat } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import styled from "styled-components";

export default function Location({ specificLocation }) {
  const iconStyles = { color: "black", fontSize: "2em", cursor: "pointer" };
  const barIcon = <FaGlassMartiniAlt style={iconStyles} />;
  const clubIcon = <BsFillCameraVideoOffFill style={iconStyles} />;
  const cruisingIcon = <MdDirectionsBoat style={iconStyles} />;
  const communityIcon = <IoIosPeople style={iconStyles} />;
  const otherIcon = <MdLocationOn style={iconStyles} />;
  return (
    <>
      <StyledLocationHeader>
        {" "}
        <section className="location-details">
          <div className="location-icon">
            {" "}
            {specificLocation.type === "Bar" && barIcon}
            {specificLocation.type === "Club" && clubIcon}
            {specificLocation.type === "Cruising" && cruisingIcon}
            {specificLocation.type === "Community-Center" && communityIcon}
            {specificLocation.type === "Other" && otherIcon}
          </div>
          <div className="location-description">
            {" "}
            <h3>{specificLocation.name}</h3>
            <h4>{specificLocation.type}</h4>
          </div>
        </section>
        <div className="location-address">
          <p>lorem ipsum</p>
        </div>
      </StyledLocationHeader>
    </>
  );
}

const StyledLocationHeader = styled.div`
  display: flex;
  flex-direction: column;
  border-style: solid;
  border-radius: 10px;
  /* align-items: center; */
  /* justify-content: space-around; */

  .location-details {
    display: flex;

    flex-direction: row;
    /* align-items: center; */
    justify-content: space-around;
  }

  /* .location-icon {
    display: flex;
    flex-direction: column;
  } */
`;
