import React, {Component} from 'react';
import Translate from "../lang/Translate";
import Container from "reactstrap/es/Container";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import Rater from "react-rater";

class BookingDetail extends Component {
    render() {
        return (
            <Container className="shadow bookingCont mt-5">
                <h4><Translate type="detalleReserva" string="detalleReserva"/></h4>
                <Row>
                    <Col lg="2"></Col>
                    <Col lg="10">
                        <Row>
                            <h1>Sweet home alabama</h1>
                            <Rater rating={2} total={5} interactive={false} />
                        </Row>
                        <Row>
                            <Col>
                            <h4>Philipp Vujic</h4>
                        </Col>
                            <Col>
                                <h1><strong>635€</strong></h1>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default BookingDetail;