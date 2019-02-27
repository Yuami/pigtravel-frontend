import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import { Map, TileLayer, Marker,Popup } from 'react-leaflet'
import PropTypes from "prop-types";

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
                <Marker position={position}>

                </Marker>
            </Map>
        );
    }
}
MapView.propTypes = {
    lat: PropTypes.number.isRequired,
    lang: PropTypes.number.isRequired,
};


