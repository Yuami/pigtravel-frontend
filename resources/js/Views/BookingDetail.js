import React, {Component} from 'react';
import Translate from "../lang/Translate";
import Container from "reactstrap/es/Container";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import UserRouter from "../components/layout/UserRouter";
import PropTypes from "prop-types";
import axios from "axios";

class BookingDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: []
        };
        this.getOptions = this.getOptions.bind(this)
    }

    getOptions() {
        axios({
            url: '/api/bookings/1',
            method: 'get'
        }).then((response) => {
            this.setState({
                values: response.data
            });
        }).catch((error) => {
            console.log(error, 'error booking')
        });
    }

    componentDidMount() {
        this.getOptions()
    }
    render() {
        const bookingDetails = [
            {
                type: 'bookings',
                link: '/bookings'
            },
            {
                type: 'booking',
                link: '/bookings/booking'
            },
        ];

        return (
            <div>
                <UserRouter title={'booking'} list={bookingDetails}/>
            <Container className="bookingCont shadow">
                <Row className="mb-2">
                        <Col lg="12">
                            <Row>
                                <Col lg="2" className="image">
                                    <img src="img/casa.png" class="img img-responsive full-width"></img>
                                </Col>
                                <Col lg="7" sm="12" xs="12" >
                                    <Row>
                                        <Col>
                                            <h1>values</h1>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h4>Palma de Mallorca, España</h4>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg="2" sm="11" xs="11" className="float-right">
                                    <Row className="precio">
                                            <h1><strong>Pagada</strong></h1>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                </Row>


                <Row className="mb-2">
                    <Col lg="6">
                        <Row>
                        <Col lg="12" sm="12" xs="12" className="detalle" >
                            <Row>
                                <h4><strong><Translate type="bookingDetails" string="owner"/></strong></h4>
                            </Row>
                            <Row>
                                <Col lg="2" sm="2" xs="3" >
                                    <img src="/img/user.jpg" height="70px" className="userImg"></img>
                                </Col>
                                <Col sm="8" xs="8" className="my-auto">
                                    <h3>Philipp Vujic</h3>
                                </Col>
                            </Row>
                        </Col>
                        </Row>
                        <Row>
                            <Col lg="12" className="detalle">
                                <Row>
                                    <h4><strong><Translate type="bookingDetails" string="checkIn"/></strong></h4>
                                </Row>
                                <Row>
                                    <Col lg="6" xs="6" className="text-center">
                                        <h4>21/05/19</h4>
                                    </Col>
                                    <Col lg="6" xs="6" className="text-center">
                                        <h4>12:00h</h4>
                                    </Col>
                                </Row>
                                <Row>
                                    <h4><strong><Translate type="bookingDetails" string="checkOut"/></strong></h4>
                                </Row>
                                <Row>
                                    <Col lg="6" xs="6" className="text-center">
                                        <h4>31/05/19</h4>
                                    </Col>
                                    <Col lg="6" xs="6" className="text-center">
                                        <h4>13:00h</h4>
                                    </Col>
                                </Row>
                                <Row>
                                    <h4><strong><Translate type="bookingDetails" string="guests"/></strong></h4>
                                </Row>
                                <Row>
                                    <Col lg="6" xs="6" className="text-center">
                                        <h4>2</h4>
                                    </Col>
                                </Row>
                                <Row>
                                    <h4><strong><Translate type="bookingDetails" string="pricePerNight"/></strong></h4>
                                </Row>
                                <Row>
                                    <Col lg="6"  xs="6" className="text-center">
                                        <h4>55€</h4>
                                    </Col>
                                </Row>

                            </Col>
                        </Row>

                    </Col>
                    <Col lg="5" className="ml-auto">
                        <Row>
                            <Col lg="12" className="detalle">
                                <Row>
                                    <h4><strong><Translate type="bookingDetails" string="priceBreakdown"/></strong></h4>
                                </Row>
                                <Row>
                                    <Col lg="6" sm="6" xs="6" className="text-center">
                                        <h4>55€ x 10 noches</h4>
                                    </Col>
                                    <Col lg="6" sm="6" xs="6" className="text-center">
                                        <h4>550€</h4>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg="6" sm="6" xs="6" className="text-center">
                                        <h4><Translate type="bookingDetails" string="serviceFee"/></h4>
                                    </Col>
                                    <Col lg="6" sm="6" xs="6" className="text-center">
                                        <h4>85€</h4>
                                    </Col>
                                </Row>
                                <Row className="mt-5">
                                    <Col lg="6" sm="6" xs="6" className="text-center">
                                        <h4><Translate type="bookingDetails" string="total"/></h4>
                                    </Col>
                                    <Col lg="6" sm="6" xs="6" className="text-center">
                                        <h4>635€</h4>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Container>
                </div>
        );
    }
}

BookingDetail.propTypes = {
    bookingID: PropTypes.string,

};
export default BookingDetail;