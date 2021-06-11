import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Component } from 'react';
import './Map.css'

const api = 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo';


export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };

    render() {
        return (
                <Map google={this.props.google}
                    onClick={this.onMapClicked}
                    style={{width: '850px', height: '550px'}}
                    >
                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'}

                        />

                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                        </div>
                    </InfoWindow>
                </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: (api)
})(MapContainer)