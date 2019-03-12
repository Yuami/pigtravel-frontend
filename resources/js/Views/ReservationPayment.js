import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Translate from "../lang/Translate";
import moment from "react-daterange-picker/example/moment-range";
import Col from "reactstrap/es/Col";
import Row from "reactstrap/es/Row";
import Container from "reactstrap/es/Container";
import Panel from "../components/layout/Panel";
import ReservationInfo from "../components/specific/ReservationInfo";
import Form from "reactstrap/es/Form";
import PaypalCheckout from "../components/specific/PaypalCheckout";
import StripeCheckout from "../components/specific/StripeCheckout";
import {withRouter} from "react-router-dom";
import Redirect from "react-router-dom/es/Redirect";
import {checkIfUndefined, redirectIfUndefined} from "../helpers";
import {Helmet} from "react-helmet";

class ReservationPayment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            disabled: true,
            paymentMethod: "creditCard",
            serviceFee: null,

            idVivienda: null,
            checkIn: null,
            checkOut: null,
            pax: null,
            price: null,
            message: ''
        };

        this.paymentSelected = this.paymentSelected.bind(this);
    }

    rules = [13, 14, 22];

    paymentSelected() {
        let method = $(".paymentMethod.active div").attr('id');
        if (method === 'creditCard') {
            this.setState({paymentMethod: "creditCard"});
        } else if (method === 'paypal') {
            this.setState({paymentMethod: "paypal"});
        }
    }

    componentWillMount() {
        const state = this.props.location.state;
        let idReserva = null;
        if (checkIfUndefined(state, ['idVivienda', 'checkIn', 'checkOut', 'pax', 'price', 'total', 'serviceFee'])) {
            this.setState({redirect: true});
            return;
        }

        if (!checkIfUndefined(state, ['idReserva'])) {
            idReserva = state;
        }

        const {
            idVivienda,
            checkIn,
            checkOut,
            pax,
            price,
            total,
            serviceFee,
            message
        } = state;

        this.setState({
            idVivienda: idVivienda,
            checkIn: checkIn,
            checkOut: checkOut,
            pax: pax,
            serviceFee: serviceFee,
            price: price,
            total: total,
            message: message,
            idReserva: idReserva
        });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={'/'}/>;
        }

        let paymentButton;
        if (this.state.paymentMethod === "creditCard") {
            paymentButton =
                <div id={'creditCard'}>
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="form-group">
                                <label htmlFor="cardNumber">CARD NUMBER</label>
                                <div className="input-group">
                                    <input
                                        type="tel"
                                        className="form-control"
                                        name="cardNumber"
                                        placeholder="Valid Card Number"
                                        autoComplete="cc-number"
                                        required autoFocus
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
                                <input
                                    type="tel"
                                    className="form-control"
                                    name="cardExpiry"
                                    placeholder="MM / YY"
                                    autoComplete="cc-exp"
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-xs-5 col-md-5 pull-right">
                            <div className="form-group">
                                <label htmlFor="cardCVC">CV CODE</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    name="cardCVC"
                                    placeholder="CVC"
                                    autoComplete="cc-csc"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <StripeCheckout {...this.state}/>
                </div>
        } else if (this.state.paymentMethod === "paypal") {
            paymentButton = <PaypalCheckout {...this.state} idReserva={this.state.idReserva}/>
        }

        return (
            <Container fluid className={'pt-5'}>
                <Row>
                    <Col lg='8' className={'order-1 order-lg-0'}>
                        <Panel id={'reservationPayment'}>
                            <h3>{<Translate type={'reservation'} string={'paymentMethod'}/>}</h3>
                            <Form>
                                <div className="paymentWrap">
                                    <div
                                        className="btn-group paymentBtnGroup btn-group-justified justify-content-center d-flex"
                                        data-toggle="buttons" onClick={this.paymentSelected}>
                                        <label className="btn paymentMethod active">
                                            <div id={'creditCard'} className="method creditcard"/>
                                            <input type="radio" name="options" defaultChecked/>
                                        </label>
                                        <label className="btn paymentMethod">
                                            <div id={'paypal'} className="method paypal"/>
                                            <input type="radio" name="options"/>
                                        </label>
                                    </div>
                                </div>
                                <div id={'orderButtons'}>
                                    {paymentButton}
                                </div>
                            </Form>
                        </Panel>
                    </Col>
                    <Col lg='4' className={'order-0 order-lg-1'}>
                        <ReservationInfo {...this.state}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}


export default withRouter(ReservationPayment);