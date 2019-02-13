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

class ReservationPayment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            casa: [],
            pax: '',
            nights: this.props.checkOut.diff(this.props.checkIn, 'days'),
            serviceFee: this.props.price * 0.05 + 5,
        };

        this.state = {
            ...this.state,
            total: this.state.serviceFee + this.props.price,
        };

    }

    rules = [13, 14, 22];

    componentWillMount() {
        const viviendaURL = '/api/viviendas/' + this.props.idVivienda;

        this.state.pax = this.props.pax > 1 ? <Translate type={'searcher'} string={'guests'}/> :
            <Translate type={'searcher'} string={'guest'}/>;

        axios.get(viviendaURL).then((res) => {
            this.setState({casa: res.data});
        });
    }

    paymentSelected() {
        let method = $(".paymentMethod.active div").attr('id');
        if (method === 'creditCard') {

        } else if (method === 'paypal') {

        }
    }

    render() {
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
                                        <label className="btn paymentMethod">
                                            <div id={'creditCard'} className="method creditcard"/>
                                            <input type="radio" name="options"/>
                                        </label>
                                        <label className="btn paymentMethod">
                                            <div id={'paypal'} className="method paypal"/>
                                            <input type="radio" name="options"/>
                                        </label>
                                    </div>
                                </div>
                                <LocaleContext.Consumer>
                                    {locale =>
                                        <FormButton className={'pull-right'}
                                                    text={translate(locale, 'pay', 'reservation')}
                                                    disabled/>
                                    }
                                </LocaleContext.Consumer>
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