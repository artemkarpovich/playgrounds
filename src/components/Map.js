import React, { Component } from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markers: [
        { lat: 25.363882, lng: 131.044922 },
        { lat: 23.363882, lng: 134.044922 }
      ],
    };
  }
  render() {
    return (
      <section style={{height: "100%"}}>
        <GoogleMapLoader
          containerElement={
          <div
            style={{
              height: "100%",
            }}
          />
        }
          googleMapElement={
          <GoogleMap
            ref={(map) => console.log(map)}
            defaultZoom={3}
            defaultCenter={{ lat: -34.397, lng: 150.644 }}
          >
            {this.state.markers.map((marker, index) => {
              return (
                <Marker {...marker} />
              );
            })}
          </GoogleMap>
        }
        />
      </section>
    );
  }
}

export default Map;