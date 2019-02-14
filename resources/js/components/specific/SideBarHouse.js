import React from 'react';
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
import BlockedDays from "./BlockedDays";


export default class SideBarHouse extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            activeTab: '1',
            isOpen: false,
            markerPosition: { lat: 49.8419, lng: 24.0315 }
    };
    }

    toggleNav(){
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
        const { markerPosition } = this.state.markerPosition;
        return (
            <div>
                <Row>
                    <Col lg="2" xs="12" className="shadow m-5">
                        <Navbar className="justify-content-center shadow-sm" expand="md" color="white" light>
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
                                            <Translate type="house" string="availability"/>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={{active: this.state.activeTab === '2'}}
                                            onClick={() => {
                                                this.toggle('4');
                                            }}>
                                            <Translate type="house" string="location"/>
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>
                    </Col>
                    <Col lg="8" className="shadow m-5">
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
                                    <Col sm="12">
                                        <h1><strong><Translate type="house" string="services"/></strong></h1>

                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="3">
                                <Row>
                                    <Col sm="12">
                                        <h1><strong><Translate type="house" string="availability"/></strong></h1>
                                        <BlockedDays idHouse={this.props.houseID}/>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="4">
                                <Row>
                                    <Col sm="12">
                                        <h1><strong><Translate type="house" string="location"/></strong></h1>

                                    </Col>
                                </Row>
                            </TabPane>
                        </TabContent>
                    </Col>
                </Row>
            </div>
        );
    }
}
SideBarHouse.propTypes = {
    description: PropTypes.string.isRequired,
    houseID: PropTypes.number.isRequired,
};