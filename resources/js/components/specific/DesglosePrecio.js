import Col from "reactstrap/es/Col";
import Row from "reactstrap/es/Row";
import React, {Component} from 'react';
import Translate from "../../lang/Translate";



class DesglosePrecio extends Component {

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
            </Col>);
    }
}
export default DesglosePrecio;