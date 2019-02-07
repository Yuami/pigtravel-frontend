import React, {Component} from 'react';
import Translate from "../lang/Translate";
import Container from "reactstrap/es/Container";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import UserRouter from "../components/layout/UserRouter";

class Contact extends Component {
    render() {
        const contact = [
            {
                type: 'contact',
                link: '/contact'
            },
        ];

        return (
            <div>
                <UserRouter title={'booking'} list={contact}/>
                <Container className="bookingCont shadow">
                    <Row className="mb-2">
                        <Col lg="12">
                            <Row>
                                <Col lg="2" className="image">
                                    <img src="img/casa.png" class="img img-responsive full-width"></img>
                                </Col>
                                <Col lg="7" sm="12" xs="12" >
                                    <Row>
                                        <Col>
                                            <h1>Sweet home alabama</h1>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h4>Palma de Mallorca, España</h4>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg="2" sm="11" xs="11" className="float-right">
                                    <Row className="precio">
                                        <h1><strong>635€</strong></h1>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Contact;