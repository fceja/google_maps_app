import { ReactElement } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

import "@scss/components/GoogleMaps/GoogleMap.scss";
import MyMapComponent from "@components/googleMap/MyMapComponent";

// return loading or failure div
const render = (status: Status): ReactElement => {
  if (status === Status.FAILURE) return <div>Error while loading...</div>;
  return <div id="loading">Loading...</div>;
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

// set map zoom
const zoomStr = process.env.REACT_APP_GOOGLE_MAPS_ZOOM;
const mapZoom = zoomStr ? parseInt(zoomStr) : 0;

// set map height and width
const mapStyles = {
  width: process.env.REACT_APP_GOOGLE_MAPS_WIDTH,
  height: process.env.REACT_APP_GOOGLE_MAPS_HEIGHT,
};

const GoogleMap = () => {
  return (
    <Wrapper apiKey={apiKey} render={render}>
      <MyMapComponent center={mapCenter} zoom={mapZoom} styles={mapStyles} />
    </Wrapper>
  );
};

export default GoogleMap;
