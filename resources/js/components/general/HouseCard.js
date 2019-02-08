import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MainCard from "./MainCard";
import CardTitle from "reactstrap/es/CardTitle";
import CardSubtitle from "reactstrap/es/CardSubtitle";
import Translate from "../../lang/Translate";
import Container from "reactstrap/es/Container";
import Stars from "../Stars";
import {coin} from "../../LocaleContext"

class HouseCard extends Component {

    state = {};

    render() {
        const {clickable, house} = this.props;
        const {img, name, type, price, rating} = house;
        return (
            <MainCard clickable={clickable}>
                <div className="house-card-img">
                    <img src={img} alt={name} width="100%"/>
                    <span><h4>{type}</h4></span>
                </div>
                <Container fluid className="mt-3">
                    <CardTitle><h1>{name}</h1></CardTitle>
                    <CardSubtitle>
                        <p className="mt-3">
                            {price + coin + ' '}<Translate type="houselist" string="night"/>
                        </p>
                        <Stars rating={rating} color="primary"/>
                    </CardSubtitle>
                </Container>
            </MainCard>
        );
    }

    static propTypes = {
        clickable: PropTypes.bool,
        house: PropTypes.shape({
            name: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
        }).isRequired,
    }
}

export default HouseCard;