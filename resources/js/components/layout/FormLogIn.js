import React, {Component} from 'react';
import {
    Col,
    Row,
    Form
} from "reactstrap";
import CSRF from "../general/CSRF";
import MyMedia from "../general/Media/MyMedia";
import FormGroupReg from "../general/Forms/FormGroupReg";
import FormGroupButton from "../general/Forms/FormGroupButton";

class FormLogIn extends Component {
    render() {
        return (
            <Form className="row" action="/login" method="POST">
                <CSRF/>
                <FormGroupReg md={'12'} type={'email'} name={'correo'} text={'Correo'}
                              placeholder={'email@example.com'}/>
                <FormGroupReg md={'12'} type={'password'} name={'pass'} text={'Contraseña'} placeholder={'*********'}/>
                <Col className="my-2">
                    <Row className="justify-content-center">
                        <MyMedia/>
                    </Row>
                </Col>
                <FormGroupButton page={'/'}/>
            </Form>
        );
    }
}

export default FormLogIn;
