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
import {LocaleContext} from "../LocaleContext";
import {translate} from "../helpers";

class Register extends Component {
    static contextType = LocaleContext;

    render() {
        document.title = translate(this.context, 'register', 'header');
        return (
            <Container className="my-4">
                <Row>
                    <Col className="d-none d-lg-block logoLog" md="6">
                        <img src="img/clipboard.png" alt="logo" width="100%"/>
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
