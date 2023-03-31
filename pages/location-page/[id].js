import LocationDetail from "../../components/LocationDetails";

export default function LocationPage({ loadLocations, locations }) {
  return (
    <>
      <title>Location</title>
      <LocationDetail loadLocations={loadLocations} locations={locations} />
    </>
  );
}
