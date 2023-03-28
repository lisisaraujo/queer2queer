import { FaGlassMartiniAlt } from "react-icons/fa";
import { BsFillCameraVideoOffFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { MdDirectionsBoat } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import styled from "styled-components";

export default function Location({ specificLocation }) {
  const iconStyles = { color: "white", fontSize: "2em", cursor: "pointer" };
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
          <label>Address: </label>
          <p>Adalbertstr. 1, 10090 Berlin</p>
        </div>
      </StyledLocationHeader>
    </>
  );
}

const StyledLocationHeader = styled.div`
  display: flex;
  flex-direction: column;
  /* border-style: solid; */
  border-radius: 10px;
  /* border-width: 3px; */
  border-color: black;
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  /* align-items: center; */
  height: 100%;
  width: 100%;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 3px rgba(54, 54, 54, 0.75);

  .location-details {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .location-address {
    display: flex;
    flex-direction: column;
    margin-left: 45px;
  }

  .location-icon {
    border-style: solid;
    padding: 15px;
    border-radius: 5px;
    background-color: pink;
  }
`;
