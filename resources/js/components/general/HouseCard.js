import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MainCard from "./MainCard";
import CardTitle from "reactstrap/es/CardTitle";
import CardImg from "reactstrap/es/CardImg";
import CardSubtitle from "reactstrap/es/CardSubtitle";
import {translate} from "../../helpers";

class HouseCard extends Component {

    state = {

    };

    render() {
        const {shadow, houseName, price} = this.props;

        return (
            <MainCard shadow={shadow}>
                <CardTitle>Esto es una prueba</CardTitle>
                <CardSubtitle>

                </CardSubtitle>
            </MainCard>
        );
    }

    static propTypes = {
        shadow: PropTypes.bool,

    }
}

export default HouseCard;