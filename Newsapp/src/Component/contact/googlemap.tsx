import React from 'react'
import styles from './contact.module.css'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';



const containerStyle = {
  width: '400px',
  height: '550px'
};

const center = {
  lat: 51.219448,
  lng: 4.402464
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY!
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <div className={styles.googlemap}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        //onLoad={onLoad}
      onUnmount={onUnmount}
      >
        { <Marker position={{lat:51.219448,lng:4.402464}} title='Hier is onze hooefkantoor'/>}
        <></>
        
      </GoogleMap>
      </div>
  ) : <></>
}

export default MyComponent;