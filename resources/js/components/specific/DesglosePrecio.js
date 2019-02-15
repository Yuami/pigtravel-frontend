import Col from "reactstrap/es/Col";
import Row from "reactstrap/es/Row";
import React, {Component} from 'react';
import Translate from "../../lang/Translate";
import PropTypes from "prop-types";
import {LocaleContext, coin} from "../../LocaleContext";


class DesglosePrecio extends Component {


    constructor(props) {
        super(props);
        this.state = {
            serviceFee: this.props.price * 0.05 + 5,
        };

        this.state = {
            ...this.state,
            total:  this.props.price+this.state.serviceFee,
        };
    }
        render() {

        return (
            <Col lg="5" className="ml-auto">
                <Row>
                    <Col lg="12" className="detalle">
                        <Row>
                            <h4><strong><Translate type="bookingDetails" string="priceBreakdown"/></strong></h4>
                        </Row>
                        <Row>
                            <Col lg="6" sm="6" xs="6" className="text-center">
                                <h4>{this.props.price / this.props.nights}{coin} x {this.props.nights} noches</h4>
                            </Col>
                            <Col lg="6" sm="6" xs="6" className="text-center">
                                <h4>{this.props.price}{coin}</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="6" sm="6" xs="6" className="text-center">
                                <h4><Translate type="bookingDetails" string="serviceFee"/></h4>
                            </Col>
                            <Col lg="6" sm="6" xs="6" className="text-center">
                                <h4>{this.state.serviceFee}{coin}</h4>
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            <Col lg="6" sm="6" xs="6" className="text-center">
                                <h4><Translate type="bookingDetails" string="total"/></h4>
                            </Col>
                            <Col lg="6" sm="6" xs="6" className="text-center">
                                <h4>{this.state.total}{coin}</h4>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>);
    }
}

DesglosePrecio.propTypes = {
    nights: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
};
export default DesglosePrecio;