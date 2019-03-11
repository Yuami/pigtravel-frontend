import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MainCard from "./MainCard";
import CardTitle from "reactstrap/es/CardTitle";
import CardSubtitle from "reactstrap/es/CardSubtitle";
import Translate from "../../lang/Translate";
import Container from "reactstrap/es/Container";
import Stars from "../Stars";
import {coin} from "../../LocaleContext"
import NumeroValoraciones from "../specific/NumeroValoraciones";

class HouseCard extends Component {

    state = {};

    render() {
        const {clickable, house, links} = this.props;
        const {fotos, nombre: name, tipoVivienda: type, tarifas, valoracion} = house;
        let image = fotos.length == 0 ? "/img/house-default.jpeg" : links.back + fotos[0].path;
        let tarifa = tarifas.general == null ? tarifas.extra[0] : tarifas.general;

        let cardImg = this.props.map ? null :
            <div className="house-card-img">
                <img src={image} alt={name} width="100%"/>
                <span><h4>{type.nombre}</h4></span>
            </div>;

        let stars =
            (<>
                <Stars
                    rating={valoracion == undefined || valoracion.length == 0 ? 0 : valoracion[0].media == null ? 0 : valoracion[0].media}
                    color="primary"/>
                { this.props.map ? null : <NumeroValoraciones idVivienda={house.id}/>}
            </>);

        const info = (
            <>
                {cardImg}
                <Container fluid className="mt-3">
                    <CardTitle><h1 className="text-truncate">{name}</h1></CardTitle>
                    <CardSubtitle>
                        <p className="mt-3" style={{textDecoration: "none"}}>
                            {tarifa.precio + coin + ' '}<Translate type="houselist" string="night"/>
                        </p>
                        {stars}
                    </CardSubtitle>
                </Container>
            </>);

        return this.props.map ? info :
            <MainCard clickable={clickable}>
                {info}
            </MainCard>
    }

    static propTypes = {
        clickable: PropTypes.bool,
        house: PropTypes.object.isRequired,
    }
}

export default HouseCard;