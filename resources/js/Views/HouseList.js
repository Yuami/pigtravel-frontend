import React, {Component} from 'react';
import Container from "reactstrap/es/Container";
import HouseCard from "../components/general/HouseCard";
import Col from "reactstrap/es/Col";
import Row from "reactstrap/es/Row";
import axios from "axios";
import PropTypes from "prop-types"
import Link from "react-router-dom/es/Link";
import {cleanURI} from "../helpers";


class HouseList extends Component {

    state = {
        houses: []
    };

    componentWillMount() {
        axios.get("/api/viviendas")
            .then(res => res.data.data)
            .then(houses => houses.map(house => {
                if (house.tarifas.general == null) return null;
                const img = house.backlink + (house.fotos == undefined || house.fotos.length == 0 ? "/assets/uploads/img/casas/default-image.jpg" : house.fotos[0].path);
                return {
                    id: house.id,
                    name: house.nombre,
                    img,
                    price: house.tarifas.general.precio,
                    type: house.tipoVivienda.nombre[0],
                    rating: house.valoracion == undefined || house.valoracion.length == 0 ? 0 : house.valoracion[0].media
                }
            }))
            .then(houses => {
                this.setState({
                    houses: houses
                });
            });
    }


    render() {
        const {houses} = this.state;

        return (
            <Container className="my-5" fluid>
                <Row>
                    {
                        houses.map(house => {
                                if (house != null)
                                    return (
                                        <Col key={house.id} xs="12" sm="6" md="4" lg="3" xl="3" className="my-3">
                                            <Link to={`/houses/${house.id}/${cleanURI(house.name)}`} className="card-house-link">
                                                <HouseCard house={house} clickable/>
                                            </Link>
                                        </Col>);
                                return null;
                            }
                        )
                    }
                </Row>
            </Container>
        );
    }
}

export default HouseList;