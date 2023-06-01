// Map.js
import React from 'react';
import GoogleMapReact from 'google-map-react';
import Property from './Property';

const Map = ({ properties }) => {
    const defaultProps = {
        center: {
            lat: -33.4489,
            lng: -70.6693
        },
        zoom: 11
    };

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                {properties.map((property) => (
                    <Property
                        key={property.nombre}
                        lat={property.latitud}
                        lng={property.longitud}
                        text={property.nombre}
                    />
                ))}
            </GoogleMapReact>
        </div>
    );
}

export default Map;
