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
        loading: true,
        links: null,
        meta: null,
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
        console.log(query);
        axios.get(query)
            .then(data => data.data)
            .then(houses => this.setState({
                houses: houses.data,
                links: houses.links,
                meta: houses.meta,
                loading: false
            }))
            .catch(e => console.log(e));
    }


    render() {
        const {houses, loading} = this.state;
        const params =  this.props.location.state;

        const houseList = loading ?
            (<Col xs="12">
                <h1 className="text-primary d-flex justify-content-center mb-5"><Translate string="loading" type="general"/></h1>
                <div className="d-flex justify-content-center">
                    <Spinner color="primary" size="xl" style={{width: '8rem', height: '8rem'}} type="grow"/>
                </div>
            </Col>) :
            (houses.map(house => {
                        if (house != null)
                            return (
                                <Col key={house.id} xs="12" sm="6" md="4" lg="3" xl="3" className="my-3">
                                    <Link to={`/houses/${house.id}/${cleanURI(house.nombre)}`}
                                          className="card-house-link">
                                        <HouseCard house={house} img={this.state.links.back + '/assets/uploads/img/casas/default.jpg'} clickable/>
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