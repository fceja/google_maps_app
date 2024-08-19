import { ReactElement } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

import "@scss/components/GoogleMap.scss";
import MyMapComponent from "@/ts/components/MyMapComponent";

// return loading or failure div
const render = (status: Status): ReactElement => {
  if (status === Status.FAILURE) return <div>Error loading map.</div>;
  return <div id="loading">...loading map</div>;
};

// api key
const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY ?? "";

// set map coordinates
const latStr = process.env.REACT_APP_GOOGLE_MAPS_LAT;
const lngStr = process.env.REACT_APP_GOOGLE_MAPS_LNG;
const mapCenter = {
  lat: latStr ? parseFloat(latStr) : 0,
  lng: lngStr ? parseFloat(lngStr) : 0,
};

// set map height and width
const GoogleMap: React.FC = () => {
  return (
    <>
      <Wrapper apiKey={apiKey} render={render}>
        <MyMapComponent
          center={mapCenter}
          zoom={9}
          styles={{ width: "100%", height: "80%" }}
        />
      </Wrapper>
    </>
  );
};

export default GoogleMap;
