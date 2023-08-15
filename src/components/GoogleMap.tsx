import { ReactElement } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

import MyMapComponent from "./MyMapComponent";

// return loading or failure div
const render = (status: Status): ReactElement => {
  if (status === Status.FAILURE) return <div>This is error div</div>;
  return <div>this is Loading... div</div>;
};

// get api key
const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY ?? "";

// get google map init vars
const latStr = process.env.REACT_APP_GOOGLE_MAPS_LAT;
const lngStr = process.env.REACT_APP_GOOGLE_MAPS_LNG;
const center = {
  lat: latStr ? parseFloat(latStr) : 0,
  lng: lngStr ? parseFloat(lngStr) : 0,
};

const zoomStr = process.env.REACT_APP_GOOGLE_MAPS_ZOOM;
const zoom = zoomStr ? parseInt(zoomStr) : 0;

const styles = {
  width: process.env.REACT_APP_GOOGLE_MAPS_WIDTH,
  height: process.env.REACT_APP_GOOGLE_MAPS_HEIGHT,
};

const mapDebug = process.env.REACT_APP_GOOGLE_MAPS_DEBUG === "true";
const conditionalStyles = mapDebug
  ? { borderStyle: "dashed", borderColor: "red" }
  : {};
const combinedStyles = { ...styles, ...conditionalStyles };

const GoogleMap = () => {
  return !mapDebug ? (
    <Wrapper apiKey={apiKey} render={render}>
      <MyMapComponent center={center} zoom={zoom} styles={styles} />
    </Wrapper>
  ) : (
    <div style={combinedStyles}>DEBUG is true</div>
  );
};

export default GoogleMap;
