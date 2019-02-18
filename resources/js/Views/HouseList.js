import React, {Component} from 'react';
import Container from "reactstrap/es/Container";
import HouseCard from "../components/general/HouseCard";
import Col from "reactstrap/es/Col";
import Row from "reactstrap/es/Row";
import axios from "axios";
import PropTypes from "prop-types"
import Link from "react-router-dom/es/Link";
import {cleanURI} from "../helpers";
import Spinner from "reactstrap/es/Spinner";
import Translate from "../lang/Translate";


class HouseList extends Component {

    state = {
        houses: [],
        loading: true
    };

    componentWillMount() {
        const params = this.props.location.state;
        const endPoint = '/api/viviendas';
        let query = '?';

        for (let param in params) {
            if (params[param] !== undefined) {
                query += `${param}=${params[param]}&`;
            }
        }
        query = query.substr(0, query.length - 1);
        query = query === '?' ? '' : query;
        query = endPoint + query;

        axios.get(query)
            .then(res => res.data.data)
            .then(houses =>
                houses.map(house => {
                    if (house.tarifas.general == null) return null;
                    const img = house.backlink + (house.fotos == undefined || house.fotos.length == 0 ? "/assets/uploads/img/casas/default-image.jpg" : house.fotos[0].path);
                    return {
                        id: house.id,
                        name: house.nombre,
                        img,
                        price: house.tarifas.general.precio,
                        type: house.tipoVivienda.nombre[0],
                        rating: house.valoracion === undefined || house.valoracion.length == 0 ? 0 : house.valoracion[0].media
                    }
                }))
            .then(houses => {
                this.setState({
                    houses: houses,
                    loading: false
                });
            })
            .catch(e => console.log(e));
    }


    render() {
        const {houses, loading} = this.state;

        const houseList = loading ?
            (<Col xs="12">
                <h1 className="text-primary d-flex justify-content-center mb-5"><Translate string="loading" type="general"/></h1>
                <p className="d-flex justify-content-center">
                    <Spinner color="primary" size="xl" style={{width: '8rem', height: '8rem'}} type="grow"/>
                </p>
            </Col>) :
            (houses.map(house => {
                        if (house != null)
                            return (
                                <Col key={house.id} xs="12" sm="6" md="4" lg="3" xl="3" className="my-3">
                                    <Link to={`/houses/${house.id}/${cleanURI(house.name)}`}
                                          className="card-house-link">
                                        <HouseCard house={house} clickable/>
                                    </Link>
                                </Col>);
                        return null;
                    }
                )
            );

        return (
            <Container className="my-5" fluid>
                <Row>
                    {houseList}
                </Row>
            </Container>
        );
    }
}

export default HouseList;