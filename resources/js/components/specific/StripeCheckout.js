import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {LocaleContext} from "../../LocaleContext";
import {translate} from "../../helpers";
import FormButton from "../general/Forms/LinkButton";
import {Button} from "reactstrap";
import axios from "axios";
import Row from "react-bootstrap/es/Row";
import Col from "react-bootstrap/Col";

class StripeCheckout extends Component {


    constructor(props) {
        super(props);

        this.state = {
            disabled: false,
            info: Object.freeze({
                idVivienda: this.props.idVivienda,
                checkIn: this.props.checkIn.toISOString().slice(0, 19).replace('T', ' '),
                checkOut: this.props.checkOut.toISOString().slice(0, 19).replace('T', ' '),
                pax: this.props.pax,
                precio: this.props.total,
                card: null,
                month: null,
                year: null,
                cvc: null,
            })
        }
    }

    addReservation() {
        const $this = this;

        if (this.props.idReserva.idReserva) {
            axios.post('/api/reservation/' + this.props.idReserva.idReserva + '/estado', {
                idReserva: this.props.idReserva.idReserva,
                estado: 4,
            }).then(function (response) {
                window.location = ("/bookings/" + $this.props.idReserva.idReserva);
            }).catch(function (error) {
                window.location = ("/bookings/" + $this.props.idReserva.idReserva);
                console.log(error);
            });
        } else {
            axios.post('/api/reservation', {
                paymentID: "stripe",
                idVivienda: this.state.info.idVivienda,
                checkIn: this.state.info.checkIn,
                checkOut: this.state.info.checkOut,
                pax: this.state.info.pax,
                precio: this.state.info.precio,
                estado: 4,
                message: this.props.message,
                card: this.state.card,
                month: this.state.month,
                year: this.state.year,
                cvc: this.state.cvc
            }).then(function (response) {
                window.location = ("/bookings/" + response.data);
            }).catch(function (error) {
                console.log(error);
            });
        }
    };

    cardChange = (event) => {
        this.setState({card: event.target.value})
    };

    monthChange = (event) => {
        this.setState({month: event.target.value})
    };

    yearChange = (event) => {
        this.setState({year: event.target.value})
    };

    cvcChange = (event) => {
        this.setState({cvc: event.target.value})
    };


    render() {
        return (
            <>
                <div id={'creditCard'}>
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="form-group">
                                <label htmlFor="cardNumber">CARD NUMBER</label>
                                <div className="input-group">
                                    <input
                                        value={this.state.card}
                                        type="tel"
                                        className="form-control"
                                        name="cardNumber"
                                        placeholder="Valid Card Number"
                                        autoComplete="cc-number"
                                        required autoFocus
                                        maxLength={16}
                                        minLength={16}
                                        onChange={this.cardChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-7 col-md-7">
                            <div className="form-group">
                                <label htmlFor="cardExpiry"><span
                                    className="hidden-xs">EXPIRATION</span><span
                                    className="visible-xs-inline">EXP</span> DATE</label>
                                <Row>
                                    <Col xs="6">
                                        <input
                                            value={this.state.month}
                                            type="tel"
                                            className="form-control"
                                            name="cardExpiry"
                                            placeholder="MM"
                                            autoComplete="cc-exp"
                                            required
                                            minLength={2}
                                            maxLength={2}
                                            max={12}
                                            min={1}
                                            onChange={this.monthChange}
                                        />
                                    </Col>
                                    <Col xs="6">
                                        <input
                                            value={this.state.year}
                                            type="tel"
                                            className="form-control"
                                            name="cardExpiry"
                                            placeholder="YY"
                                            autoComplete="cc-exp"
                                            required
                                            minLength={2}
                                            maxLength={2}
                                            max={99}
                                            min={10}
                                            onChange={this.yearChange}
                                        />
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div className="col-xs-5 col-md-5 pull-right">
                            <div className="form-group">
                                <label htmlFor="cardCVC">CV CODE</label>
                                <input
                                    value={this.state.cvc}
                                    type="tel"
                                    className="form-control"
                                    name="cardCVC"
                                    placeholder="CVC"
                                    autoComplete="cc-csc"
                                    required
                                    minLength={3}
                                    maxLength={4}
                                    onChange={this.cvcChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <LocaleContext.Consumer>
                    {locale =>
                        <Button
                            onClick={() => this.addReservation()}
                            className={'pull-right'}
                            color={'primary'}
                            disabled={this.state.disabled}>{translate(locale, 'pay', 'reservation')}</Button>
                    }
                </LocaleContext.Consumer>
            </>
        );
    }
}

StripeCheckout.propTypes = {
    idVivienda: PropTypes.number.isRequired,
    checkIn: PropTypes.instanceOf(Date),
    checkOut: PropTypes.instanceOf(Date),
    pax: PropTypes.number.isRequired,
    price: PropTypes.number,
    serviceFee: PropTypes.number,
    total: PropTypes.number.isRequired,
    message: PropTypes.string,
};

export default StripeCheckout;