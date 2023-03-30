import LocationDetail from "../../components/LocationDetails";

export default function LocationPage({ loadLocations, locations }) {
  return (
    <>
      <LocationDetail loadLocations={loadLocations} locations={locations} />
    </>
  );
}
