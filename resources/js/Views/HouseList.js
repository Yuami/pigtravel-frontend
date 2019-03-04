import React, {Component} from 'react';
import {Container, Row, Col, Spinner, Alert, Button} from "reactstrap";
import {Map, TileLayer, Marker, Popup} from "react-leaflet";
import HouseCard from "../components/general/HouseCard";
import axios from "axios";
import Link from "react-router-dom/es/Link";
import {cleanURI} from "../helpers";
import Translate from "../lang/Translate";
import PanelSearcher from "../components/PanelSearcher";
import originalMoment from "moment";
import {extendMoment} from "moment-range";
import Panel from "../components/layout/Panel";
import FaIcon from "../components/general/FaIcon";
import HouseListFilters from "../components/general/HouseListFilters";

const moment = extendMoment(originalMoment);

let mapDetected = false;

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
        showMap: true,
        params: null,
        position: [39.3262345, -4.8380649],
        zoom: 4,
        bounds: {
            nE: {lat: 51.56341232867588, lng: 5.537109375000001},
            sW: {lat: 24.44714958973082, lng: -15.205078125000002}
        },
    };

    componentDidMount() {
        this.reload(this.props.location.state);
    }

    componentWillUpdate(nextProps, nextState) {
        if (this.map) {
            mapDetected = this.map;
        }

        if (nextProps.location.state == this.state.params) return;
        this.reload(nextProps.location.state);
    }

    toogleMap() {
        this.setState({showMap: !this.state.showMap})
    }

    queryBuilder(endPoint, params) {
        let query = '?';
        for (let param in params) {
            if (params[param] !== undefined) {
                query += `${param}=${params[param]}&`;
            }
        }
        query = query.substr(0, query.length - 1);
        query = query === '?' ? '' : query;
        return endPoint + query;
    }

    reload(params) {
        this.setState({
            loading: true,
            params,
            guests: params.guests,
            place: params.place,
            start: params.start,
            end: params.end
        });

        if (params.place !== undefined || params.place != null)
            if (params.place > 3000) {
                axios.get(`/api/cities/${params.place}`)
                    .then(res => res.data)
                    .then(city => this.setState({
                        position: [city.data.latitude.x, city.data.latitude.y],
                        zoom: 12
                    }));
            } else {
                axios.get(`/api/regions/${params.place}`)
                    .then(res => res.data)
                    .then(region => this.setState({
                        zoom: 4,
                        bounds: {
                            nE: {lat: 51.56341232867588, lng: 5.537109375000001},
                            sW: {lat: 24.44714958973082, lng: -15.205078125000002}
                        }
                    }));
            }

        const endPoint = '/api/viviendas';
        let query = this.queryBuilder(endPoint, params);

        axios.get(query)
            .then(data => data.data)
            .then(houses => this.setState({
                houses: houses.data,
                links: houses.links,
                meta: houses.meta,
                loading: false,
            }))
            .catch(e => this.setState({
                loading: false,
                error: true,
            }));
    }

    toggleMapShow() {
        this.setState({showMap: !this.state.showMap})
    }

    updateBounds = () => {
        if (mapDetected) {
            let bounds = mapDetected.leafletElement.getBounds();
            this.setState({
                bounds: {
                    nE: bounds._northEast,
                    sW: bounds._southWest,
                }
            });
        }
    };

    handleMoveStart() {
        if (mapDetected) {
            mapDetected.leafletElement.closePopup();
        }
    }

    isInBounds(x, y) {
        let nE = this.state.bounds.nE;
        let sW = this.state.bounds.sW;
        return x < nE.lat &&
            y < nE.lng &&
            x > sW.lat &&
            y > sW.lng;
    }

    filterHouse = (house) => {
        if (!this.isInBounds(house.latitude.x, house.latitude.y) && this.state.showMap && window.innerWidth >= 992) return false;

        return true;
    };

    getHouseProps(house) {
        return {
            pathname: `/houses/${house.id}/${cleanURI(house.nombre)}`,
            state: {
                guests: this.state.guests,
                start: this.state.start,
                end: this.state.end,
                place: this.state.place
            }
        };
    }

    houseToCard(house, isMap = false) {
        const houseProps = this.getHouseProps(house);

        return <Link to={houseProps}
                     className="card-house-link">
            <HouseCard house={house} links={this.state.links}
                       img={'/assets/uploads/img/casas/default-image.jpg'}
                       clickable map={isMap}/>
        </Link>
    }

    render() {
        let {houses, loading: isLoading, error, showMap} = this.state;
        houses = houses.filter(this.filterHouse);
        let houseList;
        const loader = (<Col>
            <h1 className="text-primary d-flex justify-content-center mb-5">
                <Translate string="loading" type="general"/>
            </h1>
            <div className="d-flex justify-content-center">
                <Spinner color="primary" size="xl" style={{width: '8rem', height: '8rem'}} type="grow"/>
            </div>
        </Col>);

        const markers = houses.map(house => {
            const position = [house.latitude.x, house.latitude.y];
            return (
                <Marker key={house.id} position={position}>
                    <Popup>
                        {this.houseToCard(house, true)}
                    </Popup>
                </Marker>)
        });

        const map = (
            <Map center={this.state.position} zoom={this.state.zoom} onMoveend={this.updateBounds}
                 onMovestart={this.handleMoveStart}
                 ref={map => this.map = map}>
                <TileLayer
                    attribution='&amp;copy <a href="https://www.mapbox.com/">Mapbox</a> contributors'
                    url="https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoieXVhbWk5OSIsImEiOiJjanBtZGViODYwM2hzNDRvYXYyMHdkaWt6In0.VH2qzO2CXgLzAN73axn2AQ"
                />
                {markers}
            </Map>
        );

        if (error) {
            houseList = (
                <>
                    <Alert color="warning" fade={false} className="w-100">
                        <Translate type="houselist" string="error"/>
                    </Alert>
                </>);
        } else if (isLoading) {
            houseList = loader;
        } else {
            houseList = houses.map(house =>
                    <Col key={house.id} xs="12" sm="6" md="4" lg={showMap ? "4" : "3"}
                         className="my-3">
                        {this.houseToCard(house)}
                    </Col>);
        }

        const filterBtn = (<HouseListFilters/>);

        const switchMap = (
            <div>
                <Button color={showMap ? "success" : "danger"} onClick={this.toogleMap.bind(this)} block>
                                <span className="mt-2">
                                <FaIcon icon="fa fa-map-marked-alt" size="fa-3x"/>
                                </span>
                </Button>
            </div>);

        const panelFilter =
            (<Panel>
                <Row>
                    <Col xs="12" lg="7">
                        {filterBtn}
                    </Col>
                    <Col lg="5" className="d-none d-lg-block">
                        {switchMap}
                    </Col>
                </Row>
            </Panel>);

        return (
            <Container className="my-5" fluid>
                <Row>
                    <Col xs="12" lg="9">
                        <PanelSearcher start={this.state.start} end={this.state.end} guests={this.state.guests}
                                       place={this.state.place} onSubmit={this.reload.bind(this)}/>
                    </Col>
                    <Col xs="12" lg="3">
                        {panelFilter}
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" lg={showMap ? "9" : "12"}>
                        {houseList}
                    </Col>
                    <Col lg="3" className={"d-none " + (showMap ? "d-lg-block" : "")}>
                        {map}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default HouseList;