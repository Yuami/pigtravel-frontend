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

class ReservationPayment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            disabled: true,
            paymentMethod: "creditCard",
            serviceFee: undefined,

            idVivienda: undefined,
            checkIn: undefined,
            checkOut: undefined,
            pax: undefined,
            price: undefined,
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
        if (checkIfUndefined(state, ['idVivienda', 'checkIn', 'checkOut', 'pax', 'price']))  {
            this.setState({redirect: true});
            return;
        }


        const {idVivienda} = state;
        const {checkIn} = state;
        const {checkOut} = state;
        const {pax} = state;
        const {price} = state;

        this.setState({
            idVivienda: idVivienda,
            checkIn: checkIn,
            checkOut: checkOut,
            pax: pax,
            serviceFee: price * 0.05 + 5,
            price: price,
            total: (price * 0.05 + 5) + price,
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={'/'}/>;
        }

        let paymentButton;
        if (this.state.paymentMethod === "creditCard") {
            paymentButton = <StripeCheckout/>
        } else if (this.state.paymentMethod === "paypal") {
            paymentButton = <PaypalCheckout {...this.state} />
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


ReservationPayment.propTypes = {};

export default withRouter(ReservationPayment);