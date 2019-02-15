import React, {Component} from 'react';
import FormRegister from "../components/layout/FormRegister";
import {
    CardTitle,
    CardBody,
    Card,
    Col,
    Container,
    Row
} from "reactstrap";
import Panel from "../components/layout/Panel";

class Register extends Component {
    render() {
        return (
            <Container className="my-4">
                <Row>
                    <Col className="d-none d-lg-block" md="6" style={{padding: 7 + '%'}}>
                        <img src="img/clipboard.png" alt="logo" height="100%" width="100%"/>
                    </Col>
                    <Col lg="6" sm="12">
                        <Panel>
                            <Card>
                                <CardTitle className="mt-5 mb-3 text-center"><h3>REGISTRATE</h3></CardTitle>
                                <CardBody>
                                    <FormRegister/>
                                </CardBody>
                            </Card>
                        </Panel>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Register;
