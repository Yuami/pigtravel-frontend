import React, {Component} from 'react';
import Container from "reactstrap/es/Container";
import HouseCard from "../components/general/HouseCard";
import Col from "reactstrap/es/Col";
import Row from "reactstrap/es/Row";
import axios from "axios";
import Link from "react-router-dom/es/Link";
import {cleanURI} from "../helpers";
import Spinner from "reactstrap/es/Spinner";
import Translate from "../lang/Translate";
import {Alert} from "reactstrap";
import CarouselInicio from "../components/layout/CarouselInicio";
import PanelSearcher from "../components/PanelSearcher";
import originalMoment from "moment";
import {extendMoment} from "moment-range";
import Panel from "../components/layout/Panel";
import Button from "react-bootstrap/Button";

const moment = extendMoment(originalMoment);


class HouseList extends Component {

    state = {
        houses: [],
        loading: true,
        links: null,
        meta: null,
        error: false,
        start: moment().format('YYYY-MM-DD'),
        end: moment().add(1, "week").format('YYYY-MM-DD'),
        guests: this.props.location.state.guests,
        place: this.props.location.state.place,
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
            .then(data => data.data)
            .then(houses => this.setState({
                houses: houses.data,
                links: houses.links,
                meta: houses.meta,
                loading: false,
                ...params
            }))
            .catch(e => this.setState({
                loading: false,
                error: true,
                ...params
            }));

    }


    render() {
        const {houses, loading, error} = this.state;
        const params = this.props.location.state;
        let houseList;

        if (!error) {
            houseList = loading ?
                (<Col xs="12">
                    <h1 className="text-primary d-flex justify-content-center mb-5">
                        <Translate string="loading" type="general"/>
                    </h1>
                    <div className="d-flex justify-content-center">
                        <Spinner color="primary" size="xl" style={{width: '8rem', height: '8rem'}} type="grow"/>
                    </div>
                </Col>) :
                (houses.map(house => {
                            if (house !== null)
                                return (
                                    <Col key={house.id} xs="12" sm="6" md="4" lg="3" xl="3" className="my-3">
                                        <Link to={`/houses/${house.id}/${cleanURI(house.nombre)}`}
                                              className="card-house-link">
                                            <HouseCard house={house} links={this.state.links}
                                                       img={'/assets/uploads/img/casas/default-image.jpg'} clickable/>
                                        </Link>
                                    </Col>);
                            return null;
                        }
                    )
                );
        } else {
            houseList = (
                <>
                    <Alert color="danger" fade={false} className="w-100">
                        <Translate type="houselist" string="error"/>
                    </Alert>
                </>);
        }

        return (
            <Container className="my-5" fluid={!error}>
                <Row>
                    <Col xs="12" md="8">
                        <PanelSearcher start={this.state.start} end={this.state.end} guests={this.state.guests} place={this.state.place}/>
                    </Col>
                    <Col xs="12" md="4">
                        <Panel>
                            <Button color="primary"><Translate type="general" string="filters"/></Button>
                        </Panel>
                    </Col>
                </Row>
                <Row>
                    {houseList}
                </Row>
            </Container>
        );
    }
}

export default HouseList;