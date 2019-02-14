import React, {Component} from 'react';
import Translate from "../lang/Translate";
import Container from "reactstrap/es/Container";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import UserRouter from "../components/layout/UserRouter";
import PropTypes from "prop-types";
import axios from "axios";
import DesglosePrecio from "../components/specific/DesglosePrecio";

class BookingDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: [],
            days: 0,
        };
        this.renderInformation.bind(this);
    }
    renderInformation() {
        this.state.days= this.props.values.map(p => p.checkOut).diff(this.values.map(p => p.checkIn), 'days');
        console.log(this.state.days);
    }
    componentWillMount() {

        axios.get('/api/bookings/' +this.props.match.params.idReserva)
            .then((res) => this.setState({values: res.data}));
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
                                <Col lg="7" sm="12" xs="12">
                                    <Row>
                                        <Col>
                                            {this.state.values.map((v) => (
                                                <h1>{v.nombreVivienda}</h1>
                                            ))}
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
                                        <strong>{this.state.values.map((v) => (
                                            <h1>{v.estado}</h1>
                                        ))}</strong>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>


                    <Row className="mb-2">
                        <Col lg="6">
                            <Row>
                                <Col lg="12" sm="12" xs="12" className="detalle">
                                    <Row>
                                        <h4><strong><Translate type="bookingDetails" string="owner"/></strong></h4>
                                    </Row>
                                    <Row>
                                        <Col lg="2" sm="2" xs="3">
                                            <img src="/img/user.jpg" height="70px" className="userImg"></img>
                                        </Col>
                                        <Col sm="8" xs="8" className="my-auto">
                                            {this.state.values.map((v) => (
                                                <h3>{v.nombre} {v.apellido1}</h3>
                                            ))}
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
                                        <Col lg="12" className="text-center">
                                            {this.state.values.map((v) => (
                                                <h4>{v.checkIn}</h4>
                                            ))}

                                        </Col>
                                    </Row>
                                    <Row>
                                        <h4><strong><Translate type="bookingDetails" string="checkOut"/></strong></h4>
                                    </Row>
                                    <Row>
                                        <Col lg="12" className="text-center">
                                            {this.state.values.map((v) => (
                                                <h4>{v.checkOut}</h4>
                                            ))}

                                        </Col>
                                    </Row>
                                    <Row>
                                        <h4><strong><Translate type="bookingDetails" string="guests"/></strong></h4>
                                    </Row>
                                    <Row>
                                        <Col lg="12" className="text-center">
                                            {this.state.values.map((v) => (
                                                <h4>{v.totalClientes}</h4>
                                            ))}
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                        </Col>
                        <DesglosePrecio price={this.state.values.map(p => p.precio)} nights={this.state.days} />
                    </Row>
                </Container>
            </div>
        );
    }
}
export default BookingDetail;