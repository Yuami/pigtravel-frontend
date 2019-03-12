import React, {Component} from 'react';
import Translate from "../lang/Translate";
import Container from "reactstrap/es/Container";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import UserRouter from "../components/layout/UserRouter";
import PropTypes from "prop-types";
import axios from "axios";
import DesglosePrecio from "../components/specific/DesglosePrecio";
import moment from "moment";
import Panel from "../components/layout/Panel";
import {translate} from "../helpers";
import {LocaleContext} from "../LocaleContext";
import Button from "react-bootstrap/es/Button";
import UserImage from "../components/specific/UserImage";

class BookingDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: [],
            states: [],
            houseImg:[],
            days: 0,
        };
    }

    static checkServiceLanguage(idIdioma) {
        const idioma = idIdioma === 1 ? "en" : "es";
        return (localStorage["locale"] === idioma);
    };

    getNombreEstado() {
        return this.state.states.map(function (value, index, array) {
            if (BookingDetail.checkServiceLanguage(value.idIdioma)) {
                return value.nombre;
            }
        });
    }
    ;

    componentWillMount() {
        axios.get('/api/bookings/' + this.props.match.params.idReserva)
            .then((res) => this.setState({values: res.data}));
        axios.get('/api/reservas/' + this.props.match.params.idReserva)
            .then((res) => {
                if (res.data.data.estados.ultimo.id)
                    axios.get('/api/estados/' + res.data.data.estados.ultimo.id)
                        .then((res) => this.setState(
                            {
                                states: res.data,
                                state: res.data[0].idEstado
                            }
                        ));
            });
    }

    fotoCasa($id){
        axios.get('/api/fotoCasa/' + $id)
            .then(response => {
                this.setState({
                    imageHouse: response.data[0].path || "/assets/uploads/img/casas/default-image.jpg"
                })
            });
    }


    static contextType = LocaleContext;

    render() {
        const payButton = this.state.state === 2 &&
            <Row className="float-right mr-5 mt-5">
                <Button><Translate type={"reservation"} string={"pay"}/></Button>
            </Row>;

        document.title = translate(this.context, 'booking', 'titles') + " " + this.state.values.map((v) => (v.nombreVivienda));
        const precio = this.state.values.map((p) => (p.precio));
        const estado = this.state.values.map((p) => (p.idEstado));
        this.fotoPerfil(this.state.values.map((v) => v.idVendedor));
        this.fotoCasa(this.state.values.map((v) => v.idVivienda));
        const book = (
            <>
                <Row className="mb-2">
                    <Col lg="12">
                        <Row>
                            <Col lg="2" className="image">
                                <img src={"http://admin.pigtravel.top"+this.state.imageHouse}></img>
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
                                        {this.state.values.map((v) => (
                                            <h4>{v.cityName},{v.countryName}</h4>
                                        ))}
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg="2" sm="11" xs="11" className="float-right">
                                <Row className="precio">
                                    <strong>
                                        <h4>
                                            {this.getNombreEstado()}
                                        </h4>
                                    </strong>
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
                                        <UserImage idUser={this.state.values.map((p) => (p.idVendedor))}/>

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
                                    <Col lg="6">
                                        <h4><strong><Translate type="bookingDetails" string="checkIn"/></strong>
                                        </h4>
                                    </Col>
                                    <Col lg="6">
                                        {this.state.values.map((v) => (
                                            <h4>{v.checkIn}</h4>
                                        ))}

                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg="6">
                                        <h4><strong><Translate type="bookingDetails" string="checkOut"/></strong>
                                        </h4>
                                    </Col>
                                    <Col lg="6">
                                        {this.state.values.map((v) => (
                                            <h4>{v.checkOut}</h4>
                                        ))}

                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg="6">
                                        <h4><strong><Translate type="bookingDetails" string="guests"/></strong></h4>
                                    </Col>
                                    <Col lg="6">
                                        {this.state.values.map((v) => (
                                            <h4>{v.totalClientes}</h4>
                                        ))}
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
                                <DesglosePrecio price={precio} nights={2}/>
                            </Col>
                        </Row>

                    </Col>
                </Row>
                {payButton}
            </>

        );
        return (
            <div>
                <Container className="bookingCont">
                    <Panel>
                        {book}
                    </Panel>
                </Container>
            </div>
        );
    }
}

export default BookingDetail;