import React, {Component} from 'react';
import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Row,
    Col,
    Navbar, NavbarToggler, Collapse
} from 'reactstrap';
import Translate from "../../lang/Translate";
import PropTypes from "prop-types";
import axios from "axios";
import moment from "moment";
import {MapView} from "../specific/MapView";
import Panel from "./Panel";
import Reviews from "../specific/Reviews";
import BlockedDays from "../specific/BlockedDays";


export default class SideBarHouse extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            activeTab: '1',
            isOpen: false,
            values: [],
            markerPosition: {lat: this.props.coordX, lng: this.props.coordY}
        };
        this.renderInformation=this.renderInformation.bind(this);
    }
    componentWillMount() {

        axios.get('/api/servicio/'+this.props.houseID)
            .then((res) => this.setState({values: res.data}));
    }
    renderInformation() {
        return this.state.values.map(function (value, index, array) {
            if (value.activo  && SideBarHouse.checkServiceLanguage(value.idioma)) {
                return (
                    <li className={'col-6'} key={value.idServicio}>
                        <span className={'fas fa-fw ' + value.icon}></span> {value.nombre}</li>
                )
            }
        });
    }

    static checkServiceLanguage(idioma) {
        return (localStorage["locale"] === idioma);
    };
    toggleNav() {
        this.setState({isOpen: !this.state.isOpen});
    }


    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }


    render() {
        const {markerPosition} = this.state.markerPosition;
        const renderInformation1 =this.renderInformation();
        return (
            <div>
                <Row>
                    <Col lg="2" xs="10" className="m-5 sidebar">
                        <Panel>
                            <Navbar className="justify-content-center" expand="md" color="white" light>
                                <NavbarToggler onClick={this.toggleNav}/>
                                <Collapse isOpen={this.state.isOpen} navbar>
                                    <Nav>
                                        <NavItem>
                                            <NavLink
                                                className={({active: this.state.activeTab === '1'})}
                                                onClick={() => {
                                                    this.toggle('1');
                                                }}>
                                                <Translate type="house" string="description"/>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={{active: this.state.activeTab === '2'}}
                                                onClick={() => {
                                                    this.toggle('2');
                                                }}>

                                                <Translate type="house" string="services"/>

                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={{active: this.state.activeTab === '2'}}
                                                onClick={() => {
                                                    this.toggle('3');
                                                }}>
                                                <Translate type="house" string="reviews"/>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={{active: this.state.activeTab === '2'}}
                                                onClick={() => {
                                                    this.toggle('4');
                                                }}>
                                                <Translate type="house" string="availability"/>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={{active: this.state.activeTab === '2'}}
                                                onClick={() => {
                                                    this.toggle('5');
                                                }}>
                                                <Translate type="house" string="location"/>
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </Collapse>
                            </Navbar>
                        </Panel>
                    </Col>
                    <Col lg="8" className="m-5">
                        <Panel>
                            <TabContent activeTab={this.state.activeTab}>
                                <TabPane tabId="1">
                                    <Row>
                                        <Col sm="12">
                                            <h1><strong><Translate type="house" string="description"/></strong></h1>
                                            <h4>{this.props.description}</h4>
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="2">
                                    <Row>
                                        <Col sm="12" className="services">
                                            <h1><strong><Translate type="house" string="services"/></strong></h1>
                                            {renderInformation1}
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="3">
                                    <Row>
                                        <Col sm="12">
                                            <h1><strong><Translate type="house" string="reviews"/></strong></h1>
                                            <Reviews houseID={this.props.houseID}/>
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="4">
                                    <Row>
                                        <Col sm="12">
                                            <h1><strong><Translate type="house" string="availability"/></strong></h1>
                                            <BlockedDays idHouse={this.props.houseID}/>
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="5">
                                    <Row>
                                        <Col sm="12">
                                            <h1><strong><Translate type="house" string="location"/></strong></h1>
                                            <MapView lat={this.props.coordX} lng={this.props.coordY}/>
                                        </Col>
                                    </Row>
                                </TabPane>
                            </TabContent>
                        </Panel>
                    </Col>
                </Row>
            </div>
        );
    }
}
SideBarHouse.propTypes = {
    description: PropTypes.string.isRequired,
    houseID: PropTypes.number.isRequired,
    coordX: PropTypes.number.isRequired,
    coordY: PropTypes.number.isRequired,
};