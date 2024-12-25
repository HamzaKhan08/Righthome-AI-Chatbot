import React from 'react';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';

// Define container style
const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 40.7128,  // Replace with your latitude
  lng: -74.0060, // Replace with your longitude
};

export default function GoogleMapComponent() {
  return (
    <LoadScript
      googleMapsApiKey="YOUR_API_KEY"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}
