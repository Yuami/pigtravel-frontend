import React, {Component} from 'react';
import Col from "reactstrap/es/Col";
import Row from "reactstrap/es/Row";
import Container from "reactstrap/es/Container";
import {translate} from "../helpers";
import {LocaleContext} from "../LocaleContext";

class LogOut extends Component {
    static contextType = LocaleContext;
    render() {
        document.title =translate(this.context,'logout','header');
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