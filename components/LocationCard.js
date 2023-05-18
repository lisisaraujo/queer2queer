import { FaGlassMartiniAlt } from "react-icons/fa";
import { MdNoPhotography } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { MdDirectionsBoat } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import styled from "styled-components";

export default function LocationCard({ specificLocation }) {
  const iconStyles = { color: "white", fontSize: "2em", cursor: "pointer" };
  const barIcon = <FaGlassMartiniAlt style={iconStyles} />;
  const clubIcon = <MdNoPhotography style={iconStyles} />;
  const cruisingIcon = <MdDirectionsBoat style={iconStyles} />;
  const communityIcon = <IoIosPeople style={iconStyles} />;
  const otherIcon = <MdLocationOn style={iconStyles} />;
  return (
    <>
      <StyledLocationHeader>
        <div className="location-icon">
          {specificLocation.type === "Bar" && barIcon}
          {specificLocation.type === "Club" && clubIcon}
          {specificLocation.type === "Cruising" && cruisingIcon}
          {specificLocation.type === "Community-Center" && communityIcon}
          {specificLocation.type === "Other" && otherIcon}
        </div>
        <div className="location-description">
          <h2>{specificLocation.name}</h2>
          <h4>{specificLocation.type}</h4>
          {specificLocation.address ? (
            <h4>
              {specificLocation.address}, {specificLocation.city}
              {specificLocation.postcode}
            </h4>
          ) : (
            <p>Adalbertstr. 1, 10090 Berlin</p>
          )}
        </div>
      </StyledLocationHeader>
    </>
  );
}

const StyledLocationHeader = styled.div`
  flex-direction: column;
  display: flex;
  /* padding: 20px; */
  align-items: center;
  color: #101828;
  text-align: center;

  .location-icon {
    padding: 30px;
    border-radius: 50%;
    background-color: rgba(77, 150, 239, 0.5);
    /* box-shadow: 0px 0px 5px 3px rgba(95, 94, 94, 0.4); */
  }
  h2 {
    font-weight: bold;
  }
`;
