import React,{Component} from 'react'
import PropTypes from "prop-types";
import { Map, TileLayer, Marker,Circle,Popup } from 'react-leaflet';

export class MapView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zoom: 50,
        };
    }

    render() {
        const position = [this.props.lat, this.props.lng];

        return (
            <Map center={position} zoom={this.state.zoom}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'/>
                <Circle center={position} color="red" radius={1000} >
                </Circle>
            </Map>
        );
    }
}
MapView.propTypes = {
    lat: PropTypes.number.isRequired,
    lang: PropTypes.number.isRequired,
};


