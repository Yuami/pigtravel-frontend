import React, {Component} from 'react';
import Translate from "../lang/Translate";
import Container from "reactstrap/es/Container";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import Rater from "react-rater";

class BookingDetail extends Component {
    render() {
        return (
            <Container className="bookingCont mt-5">
                <h2><Translate type="bookingDetails" string="bookingDetails"/></h2>
                <Row className="ml-5 mb-2 mt-5">
                        <Col lg="12" className="shadow ">
                            <Row>
                                <Col lg="2" className="image">
                                    <img src="img/casa.png" class="img img-responsive full-width"></img>
                                </Col>
                                <Col lg="10">
                                    <Row>
                                        <Col>
                                            <h1>Sweet home alabama</h1>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h4>Palma de Mallorca, España</h4>
                                        </Col>
                                        <Col>
                                            <h1><strong>635€</strong></h1>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                </Row>


                <Row className="ml-5 mb-2">
                    <Col lg="5">
                        <Row className="mb-2 mt-5">
                            <Col lg="12" className="shadow ">
                                <Row className="ml-5">
                                    <h4><strong><Translate type="bookingDetails" string="owner"/></strong></h4>
                                </Row>
                                <Col lg="2">
                                    <img src="/img/user.jpg" height="50px" className="userImg"></img>
                                </Col>
                                <Col lg="5">
                                    <h3>Philipp Vujic</h3>
                                </Col>
                            </Col>
                        </Row>
                        <Row className="mb-2 mt-5">
                            <Col lg="12" className="shadow ">
                                <Row className="ml-5 mt-2">
                                    <h4><strong><Translate type="bookingDetails" string="checkIn"/></strong></h4>
                                </Row>
                                <Row className="ml-5 mt-2">
                                    <Col lg="6">
                                        <h4>21/05/19</h4>
                                    </Col>
                                    <Col lg="6">
                                        <h4>12:00h</h4>
                                    </Col>
                                </Row>
                                <Row className="ml-5 mt-2">
                                    <h4><strong><Translate type="bookingDetails" string="checkOut"/></strong></h4>
                                </Row>
                                <Row className="ml-5 mt-2">
                                    <Col lg="6">
                                        <h4>31/05/19</h4>
                                    </Col>
                                    <Col lg="6">
                                        <h4>13:00h</h4>
                                    </Col>
                                </Row>
                                <Row className="ml-5 mt-2">
                                    <h4><strong><Translate type="bookingDetails" string="guests"/></strong></h4>
                                </Row>
                                <Row className="ml-5 mt-2">
                                    <Col lg="12">
                                        <h4>2 huespedes</h4>
                                    </Col>
                                </Row>
                                <Row className="ml-5 mt-2">
                                    <h4><strong><Translate type="bookingDetails" string="pricePerNight"/></strong></h4>
                                </Row>
                                <Row className="ml-5 mt-2">
                                    <Col lg="12">
                                        <h4>55€</h4>
                                    </Col>
                                </Row>

                            </Col>
                        </Row>
                    </Col>
                    <Col lg="5">
                        <Row className="mb-2 mt-5">
                            <Col lg="12" className="shadow ">
                                <Row className="ml-5 mt-2">
                                    <h4><strong><Translate type="bookingDetails" string="checkIn"/></strong></h4>
                                </Row>
                                <Row className="ml-5 mt-2">
                                    <Col lg="6">
                                        <h4>21/05/19</h4>
                                    </Col>
                                    <Col lg="6">
                                        <h4>12:00h</h4>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default BookingDetail;