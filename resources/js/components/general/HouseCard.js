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

    state = {
    };

    render() {
        console.log(this.props);
        const {clickable, house, img} = this.props;
        const {fotos, nombre: name, tipoVivienda: type, tarifas, valoracion} = house;
        let image =  this.props.links.back + (fotos.length === 0 ? img : fotos[0].path);
        let tarifa = tarifas.general == null ? tarifas.extra[0] : tarifas.general;
        return (
            <MainCard clickable={clickable}>
                <div className="house-card-img">
                    <img src={image} alt={name} width="100%"/>
                    <span><h4>{type.nombre}</h4></span>
                </div>
                <Container fluid className="mt-3">
                    <CardTitle><h1>{name}</h1></CardTitle>
                    <CardSubtitle>
                        <p className="mt-3" style={{textDecoration: "none"}}>
                            {tarifa.precio + coin + ' '}<Translate type="houselist" string="night"/>
                        </p>
                        <Stars rating={valoracion == undefined || valoracion.length == 0 ? 0 : valoracion[0].media}
                               color="primary"/>
                    </CardSubtitle>
                </Container>
            </MainCard>
        );
    }

    static propTypes = {
        clickable: PropTypes.bool,
        house: PropTypes.object.isRequired,
    }
}

export default HouseCard;