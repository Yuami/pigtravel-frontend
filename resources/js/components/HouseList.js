import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Col} from "reactstrap";
import {Link} from "react-router-dom";
import {Marker, Popup} from "react-leaflet";
import {cleanURI} from "../helpers";
import HouseCard from "./general/HouseCard";

class HouseList extends Component {

    houseToCard = (house, isMap = false) => {
        const linkProps = {
            pathname: `/houses/${house.id}/${cleanURI(house.nombre)}`,
            state: this.props.linkProps
        };

        const card = (<Link to={linkProps} className="card-house-link">
            <HouseCard house={house} links={this.props.links} clickable map={isMap}/>
        </Link>);

        return !isMap ? (
            <Col key={house.id} sm="6" md="4" lg={this.props.mapIsShowing ? "4" : "3"} className="my-3">
                {card}
            </Col>) : <div key={house.id}>{card}</div>;
    };

    houseToMarker = (house) => {
        const position = [house.latitude.x, house.latitude.y];
        return (
            <Marker key={house.id} position={position}>
                <Popup>
                    {this.houseToCard(house, true)}
                </Popup>
            </Marker>)
    };

    render() {
        const markers = this.props.markers || false;

        return this.props.houses.map(house => markers ? this.houseToMarker(house) : this.houseToCard(house));
    }


    static propTypes = {
        houses: PropTypes.array.isRequired,
        markers: PropTypes.bool,
        linkProps: PropTypes.object.isRequired,
        mapIsShowing: PropTypes.bool
    }
}

export default HouseList;