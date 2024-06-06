import { useEffect, useRef } from "react";

const MyMapComponent = ({
  center,
  zoom,
  styles,
}: {
  center: google.maps.LatLngLiteral;
  zoom: number;
  styles: Object;
}) => {
  // create html elem for map
  const mapDiv = useRef<HTMLDivElement | null>(null);

  // on load, create google map
  useEffect(() => {
    if (mapDiv.current) {
      new window.google.maps.Map(mapDiv.current, {
        center,
        zoom,
      });
    }
  }, [center, zoom]);

  return <div ref={mapDiv} id="map" style={styles} aria-label="Google Map" />;
};

export default MyMapComponent;
