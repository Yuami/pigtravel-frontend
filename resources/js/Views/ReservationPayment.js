import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Translate from "../lang/Translate";
import axios from "axios";
import moment from "react-daterange-picker/example/moment-range";
import Col from "reactstrap/es/Col";
import Row from "reactstrap/es/Row";
import Container from "reactstrap/es/Container";
import Panel from "../components/layout/Panel";
import ReservationInfo from "../components/specific/ReservationInfo";
import Cards from 'react-credit-cards';
import Form from "reactstrap/es/Form";
import FormButton from "../components/general/Forms/FormButton";
import {translate} from "../helpers";
import {LocaleContext} from "../LocaleContext";
import PaypalCheckout from "../components/specific/PaypalCheckout";
import StripeCheckout from "../components/specific/StripeCheckout";

class ReservationPayment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            disabled: true,
            paymentMethod: "creditCard"
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

    render() {
        let paymentButton;
        if (this.state.paymentMethod === "creditCard") {
            paymentButton = <StripeCheckout/>
        } else if (this.state.paymentMethod === "paypal") {
            paymentButton = <PaypalCheckout/>
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
                                    {paymentButton }
                                </div>
                            </Form>
                        </Panel>
                    </Col>
                    <Col lg='4' className={'order-0 order-lg-1'}>
                        <ReservationInfo {...this.props}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}


ReservationPayment.propTypes = {
    idVivienda: PropTypes.number.isRequired,
    checkIn: PropTypes.instanceOf(moment).isRequired,
    checkOut: PropTypes.instanceOf(moment).isRequired,
    pax: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
};

export default ReservationPayment;