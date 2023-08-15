import { ReactElement } from "react";
import { Wrapper, Status} from "@googlemaps/react-wrapper";

import MyMapComponent from "./MyMapComponent"

const render = (status: Status): ReactElement => {
    if (status === Status.FAILURE) return <div>This is error div</div>;
    return <div>this is  Loading... div</div>
}

const center = { lat: -34.397, lng: 150.644}
const zoom = 4;
const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY ?? "";

const GoogleMap = () => {
    return(
        <Wrapper apiKey={apiKey} render={render}>
            <MyMapComponent center={center} zoom={zoom}/>
        </Wrapper>
    )
}

export default GoogleMap;