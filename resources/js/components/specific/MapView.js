import React,{Component} from 'react'
import PropTypes from "prop-types";
import { Map, TileLayer, Marker,CircleMarker,Popup } from 'react-leaflet';

export class MapView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zoom: 15,
        };
    }

    render() {
        const position = [this.props.lat, this.props.lng];

        return (
            <Map center={position} zoom={this.state.zoom}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'/>
                <CircleMarker center={position} color="red" radius={100} >
                    <Popup>Popup in CircleMarker</Popup>
                </CircleMarker>
            </Map>
        );
    }
}
MapView.propTypes = {
    lat: PropTypes.number.isRequired,
    lang: PropTypes.number.isRequired,
};


