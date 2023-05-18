import LocationDetail from "../../components/LocationDetails";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function LocationPage({
  loadLocations,
  locations,
  loadComments,
}) {
  const [specificLocation, setSpecificLocation] = useState();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const fetchSpecificLocation = async () => {
        const response = await fetch(`/api/locations/${id}`);
        const specificLocation = await response.json();
        setSpecificLocation(specificLocation);
        console.log("specific location", specificLocation);
      };
      fetchSpecificLocation();
      loadComments();
    }
  }, [id]);
  if (specificLocation) {
    const { name, lngLat, type, address, city, postcode } = specificLocation;

    return (
      <>
        <title>{specificLocation.name}</title>

        <LocationDetail
          loadLocations={loadLocations}
          locations={locations}
          specificLocation={specificLocation}
        />
      </>
    );
  }
}
