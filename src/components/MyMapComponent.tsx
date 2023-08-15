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
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      new window.google.maps.Map(ref.current, {
        center,
        zoom,
      });
    }
  }, [center, zoom]);

  return <div ref={ref} id="map" style={styles} />;
};

export default MyMapComponent;
