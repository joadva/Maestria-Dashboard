import React from "react";
import { GoogleMapReact, withScriptjs } from 'google-map-react';

function Tracker() {
    return (
        <GoogleMapReact
            defaultZoom={10}
            defaultCenter={{ lat: 19.4978, lng: -99.1269 }}

        />
    );
}



export default function Tracker(); {
    return <div>Map here</div>
}

