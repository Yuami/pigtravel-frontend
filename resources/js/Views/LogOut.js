import React, {Component} from 'react';
import Col from "reactstrap/es/Col";
import Row from "reactstrap/es/Row";
import Container from "reactstrap/es/Container";

class LogOut extends Component {
    render() {
        return (
            <Container fluid className={'pt-5'}>
                <Row>
                    <Col><p>LogOut</p></Col>
                </Row>
            </Container>
        );
    }
}

export default LogOut;