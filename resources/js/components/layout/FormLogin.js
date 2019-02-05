import React, {Component} from 'react';
import {
    CardTitle,
    CardHeader,
    CardBody,
    Card,
    Col,
    Container,
    Row,
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from "reactstrap";

class FormLogin extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="6" sm="12">
                        <img src="img/clipboard.png" alt="logo" height="100%" width="100%"/>
                    </Col>
                    <Col md="6" sm="12">
                        <Card>
                            <CardHeader className="text-center">
                                <CardTitle><h3>INICIA SESION</h3></CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <Col className="my-2" md="6">
                                        <FormGroup>
                                            <Label for='nombre'>Nombre</Label>
                                            <Input type="text" name='nombre' id='nombre' placeholder="hello"/>
                                        </FormGroup>
                                    </Col>
                                    <Col className="my-2" md="6">
                                        <FormGroup>
                                            <Label for='apellido1'>Primer Apellido</Label>
                                            <Input type="text" name='apellido1' id='apellido1' placeholder="hello"/>
                                        </FormGroup>
                                    </Col>
                                    <Col className="my-2" md="6">
                                        <FormGroup>
                                            <Label for='apellido2'>Segundo Apellido</Label>
                                            <Input type="text" name='apellido2' id='apellido2' placeholder="hello"/>
                                        </FormGroup>
                                    </Col>
                                    <Col className="my-2" md="6">
                                        <FormGroup>
                                            <Label for='dni'>DNI</Label>
                                            <Input type="text" name='dni' id='dni' placeholder="hello"/>
                                        </FormGroup>
                                    </Col>
                                    <Col className="my-2" md="6">
                                        <FormGroup>
                                            <Label for='fechaN'>Fecha de Nacimiento</Label>
                                            <Input type="text" name='fechaN' id='fechaN' placeholder="hello"/>
                                        </FormGroup>
                                    </Col>
                                    <Col className="my-2" md="6">
                                        <FormGroup>
                                            <Label for='email'>Email</Label>
                                            <Input type="text" name='email' id='email' placeholder="hello"/>
                                        </FormGroup>
                                    </Col>
                                    <Col className="my-2" md="6">
                                        <FormGroup>
                                            <Label for='pass'>Contraseña</Label>
                                            <Input type="text" name='pass' id='pass' placeholder="hello"/>
                                        </FormGroup>
                                    </Col>
                                    <Col className="my-2" md="6">
                                        <FormGroup>
                                            <Label for='passC'>Confirmar Contraseña</Label>
                                            <Input type="text" name='passC' id='passC' placeholder="hello"/>
                                        </FormGroup>
                                    </Col>
                                    <Col className="my-2" md="12">
                                        <Row>
                                            <Col md="6">
                                                <Button block color="danger">Cancelar</Button>
                                            </Col>
                                            <Col md="6">
                                                <Button block color="success">Confirmar</Button>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default FormLogin;
