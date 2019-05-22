import React,{Component} from 'react'
import PropTypes from "prop-types";
import { Map, TileLayer, Marker,Circle,Popup } from 'react-leaflet';

export class MapView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zoom: 10,
        };
    }

    render() {
        const position = [this.props.lat || 0, this.props.lng || 0];

        return (
            <Map center={position} zoom={this.state.zoom}>
                <TileLayer
                    attribution={`© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>`}
                    url="https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoieXVhbWk5OSIsImEiOiJjanBtZGViODYwM2hzNDRvYXYyMHdkaWt6In0.VH2qzO2CXgLzAN73axn2AQ"
                />
                <Circle center={position} color="red" radius={1000} >
                </Circle>
            </Map>
        );
    }
}
MapView.propTypes = {
    lat: PropTypes.any.isRequired,
    lang: PropTypes.any.isRequired,
};


