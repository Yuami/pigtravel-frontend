import React, {Component} from 'react';
import FormLogIn from "../components/layout/FormLogIn";
import {CardTitle, CardBody, Card, Col, Container, Row} from "reactstrap";
import {translate} from "../helpers";
import {LocaleContext} from "../LocaleContext";

class LogIn extends Component {
    static contextType = LocaleContext;
    render() {
        document.title =translate(this.context,'login','header');
        return (
            <Container className="my-4">
                <Row>
                    <Col className="d-none d-lg-block" md="6" style={{padding: 7 + '%'}}>
                        <img src="img/clipboard.png" alt="logo" height="100%" width="100%"/>
                    </Col>
                    <Col lg="6" sm="12">
                        <Card className="shadow bg-light" action="/persona">
                            <CardTitle className="mt-5 mb-3 text-center"><h3>Inicia Sesion</h3></CardTitle>
                            <CardBody>
                                <FormLogIn/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default LogIn;