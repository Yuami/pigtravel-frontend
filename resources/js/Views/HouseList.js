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
import PanelSearcher from "../components/PanelSearcher";
import originalMoment from "moment";
import {extendMoment} from "moment-range";
import Panel from "../components/layout/Panel";
import FaIcon from "../components/general/FaIcon";
import Button from "reactstrap/es/Button";

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
        showMap: false
    };

    componentWillMount() {
        this.reload();
    }

    toogleMap() {
        this.setState({showMap: !this.state.showMap})
    }

    reload() {
        this.setState({
            loading: true
        });

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

    changeMapShow() {
        this.setState({showMap: !this.state.showMap})
    }

    render() {
        const {houses, loading, error, showMap} = this.state;
        let houseList;

        if (!error) {
            houseList = loading ?
                (<Col>
                    <h1 className="text-primary d-flex justify-content-center mb-5">
                        <Translate string="loading" type="general"/>
                    </h1>
                    <div className="d-flex justify-content-center">
                        <Spinner color="primary" size="xl" style={{width: '8rem', height: '8rem'}} type="grow"/>
                    </div>
                </Col>) :
                (<Row>
                        <Col xs="12" lg={showMap ? "9" : "12"}>
                            {houses.map(house => {
                                if (house !== null)
                                    return (
                                        <Col key={house.id} xs="12" sm="6" md="4" lg={showMap ? "4" : "3"} className="my-3">
                                            <Link to={`/houses/${house.id}/${cleanURI(house.nombre)}`}
                                                  className="card-house-link">
                                                <HouseCard house={house} links={this.state.links}
                                                           img={'/assets/uploads/img/casas/default-image.jpg'}
                                                           clickable/>
                                            </Link>
                                        </Col>);
                                return null;
                            })
                            }
                        </Col>
                        <Col lg="3" className={"d-none " + (showMap ? "d-lg-block" : "")}>
                            Mapa
                        </Col>
                    </Row>
                )
        } else {
            houseList = (
                <>
                    <Alert color="danger" fade={false} className="w-100">
                        <Translate type="houselist" string="error"/>
                    </Alert>
                </>);
        }

        const filterBtn = (
            <Button color="primary" block>
                <span style={{fontSize: "18px"}}>
                    <Translate type="general" string="filters"/>
                </span>
            </Button>
        );

        const switchMap = (
            <div>
                <Button color={this.state.showMap ? "success" : "danger"} onClick={this.toogleMap.bind(this)} block>
                <span className="mt-2">
                    <FaIcon icon="fa fa-map-marked-alt" size="fa-3x"/>
                </span>
                </Button>
            </div>);

        return (
            <Container className="my-5" fluid={!error}>
                <Row>
                    <Col xs="12" lg="9">
                        <PanelSearcher start={this.state.start} end={this.state.end} guests={this.state.guests}
                                       place={this.state.place} onSubmit={this.reload.bind(this)}/>
                    </Col>

                    <Col xs="12" lg="3">
                        <Panel>
                            <Row>
                                <Col xs="12" lg="7">
                                    {filterBtn}
                                </Col>
                                <Col lg="5" className="d-none d-lg-block">
                                    {switchMap}
                                </Col>
                            </Row>
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