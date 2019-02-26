import Col from "reactstrap/es/Col";
import Row from "reactstrap/es/Row";
import React, {Component} from 'react';
import Translate from "../../lang/Translate";
import PropTypes from "prop-types";
import {LocaleContext, coin} from "../../LocaleContext";


class DesglosePrecioCasa extends Component {


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
       console.log(this.props.nights);
        return (
            <>
                <Row>
                    <Col lg="6" sm="6" xs="6">
                        <h4>{this.props.price}{coin} x {this.props.nights} noches</h4>
                    </Col>
                    <Col lg="6" sm="6" xs="6" className="text-right">
                        <h4>{this.props.price*this.props.nights}{coin}</h4>
                    </Col>
                </Row>
                <Row>
                    <Col lg="6" sm="6" xs="6">
                        <h4><Translate type="bookingDetails" string="serviceFee"/></h4>
                    </Col>
                    <Col lg="6" sm="6" xs="6" className="text-right">
                        <h4>{this.props.price * 0.05 + 5}{coin}</h4>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col lg="6" sm="6" xs="6" >
                        <h4><Translate type="bookingDetails" string="total"/></h4>
                    </Col>
                    <Col lg="6" sm="6" xs="6" className="text-right">
                        <h4>{(this.props.price*this.props.nights)+this.props.price * 0.05 + 5}{coin}</h4>
                    </Col>
                </Row>
            </>);
    }
}

DesglosePrecioCasa.propTypes = {
    nights: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
};
export default DesglosePrecioCasa;