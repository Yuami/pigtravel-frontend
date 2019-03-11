import React, {Component} from 'react';
import {Container, Row, Col, Spinner, Alert, Button} from "reactstrap";
import {Map, TileLayer} from "react-leaflet";
import axios from "axios";
import Translate from "../lang/Translate";
import PanelSearcher from "../components/search/PanelSearcher";
import originalMoment from "moment";
import {extendMoment} from "moment-range";
import Panel from "../components/layout/Panel";
import FaIcon from "../components/general/FaIcon";
import HouseList from "../components/HouseList";
import 'react-toastify/dist/ReactToastify.css';
import {LocaleContext} from "../LocaleContext";

const moment = extendMoment(originalMoment);

let mapDetected = false;

class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            houses: [],
            loading: true,
            links: null,
            error: false,
            showMap: true,
            params: {},
            position: [39.3262345, -4.8380649],
            zoom: 4,
            bounds: {
                nE: {lat: 51.56341232867588, lng: 5.537109375000001},
                sW: {lat: 24.44714958973082, lng: -15.205078125000002}
            },
        }
    }

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

    mapPosition(place) {
        if (place > 3000) {
            axios.get(`/api/cities/${place}`)
                .then(res => res.data)
                .then(city => this.setState({
                    position: [city.data.latitude.x, city.data.latitude.y],
                    zoom: 12
                }));
        } else {
            axios.get(`/api/regions/${place}`)
                .then(res => res.data)
                .then(region => this.setState({
                    position: [region.lat, region.lng],
                    zoom: region.zoom
                }));
        }
    }

    reload(params) {
        const endPoint = '/api/viviendas';

        if (params === undefined) {
            this.setState({
                loading: false,
                error: true
            });
        } else {
            this.setState({
                loading: true,
                params
            });

            if (params.place !== undefined || params.place != null)
                this.mapPosition(params.place);

            let query = this.queryBuilder(endPoint, params);

            axios.get(query)
                .then(data => data.data)
                .then(houses => this.setState({
                    loading: false,
                    houses: houses.data,
                    links: houses.links,
                }))
                .catch(e =>
                    this.setState({
                        loading: false,
                        error: true
                    }));
        }
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

    linkState() {
        return {
            guests: this.state.params.guests,
            start: this.state.params.start,
            end: this.state.params.end,
            place: this.state.params.place
        };
    }

    static contextType = LocaleContext;

    render() {
        let {houses, loading: isLoading, error, showMap, params} = this.state;

        houses = houses.filter(this.filterHouse);
        if (houses.length == 0 || !params.place) error = true;
        const loader = (<Col>
            <h1 className="text-primary d-flex justify-content-center mb-5">
                <Translate string="loading" type="general"/>
            </h1>
            <div className="d-flex justify-content-center">
                <Spinner color="primary" size="xl" style={{width: '8rem', height: '8rem'}} type="grow"/>
            </div>
        </Col>);


        let houseList;
        let markers = null;
        if (error) {
            houseList = (
                <Col>
                    <Alert color="warning" fade={false} className="w-100">
                        <Translate type="houselist" string="error"/>
                    </Alert>
                </Col>
            );
        } else if (isLoading) {
            houseList = loader;
        } else {
            houseList = <HouseList links={this.state.links} linkProps={this.linkState()} houses={houses}
                                   mapIsShowing={this.state.showMap}/>;
            markers = <HouseList links={this.state.links} houses={houses} linkProps={this.linkState()} markers/>;
        }

        const map = (
            <Map center={this.state.position} zoom={this.state.zoom} onMoveend={this.updateBounds}
                 onMovestart={this.handleMoveStart}
                 ref={map => this.map = map}>
                <TileLayer
                    attribution={`© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>`}
                    url="https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoieXVhbWk5OSIsImEiOiJjanBtZGViODYwM2hzNDRvYXYyMHdkaWt6In0.VH2qzO2CXgLzAN73axn2AQ"
                />
                {markers}
            </Map>
        );

        const filterBtn = (<Button color="primary" block className="py-2" onClick={() => this.updateModal(true)}>
            <span style={{fontSize: "18px"}}>
            <Translate type="general" string="filters"/>
            </span>
        </Button>);

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
                        <PanelSearcher onSubmit={this.reload.bind(this)}/>
                    </Col>
                    <Col xs="12" lg="3"
                         style={(showMap && window.innerWidth >= 992) ? {position: "fixed", right: 0} : null}>
                        {panelFilter}
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" lg={showMap ? "9" : "12"}>
                        <Row>
                            {houseList}
                        </Row>
                    </Col>
                    <Col lg="3" className={"d-none " + (showMap ? "d-lg-block" : "")}
                         style={{position: "fixed", right: 0}}>
                        {map}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Search;