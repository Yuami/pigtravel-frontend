import React, {Component} from 'react';
import {Form} from "reactstrap";
import CSRF from "../general/CSRF";
import FormGroupRegFirstLine from "../general/Forms/FormGroupRegFirstLine";
import FormGroupReg from "../general/Forms/FormGroupReg";
import FormGroupButton from "../general/Forms/FormGroupButton";

class FormRegister extends Component {
    render() {
        return (
            <Form className="row" action="/register" method="POST">
                <CSRF/>
                <FormGroupRegFirstLine name={'nombre'} text={'Nombre'} placeholder={'Nombre'}/>
                <FormGroupRegFirstLine name={'apellido1'} text={'Primer Apellido'}
                                       placeholder={'Primer Apellido'}/>
                <FormGroupRegFirstLine name={'apellido2'} text={'Segundo Apellido'}
                                       placeholder={'Segundo Apellido'}/>
                <FormGroupReg md={'6'} type={'text'} name={'dni'} text={'DNI'} placeholder={'12345678X'}/>
                <FormGroupReg md={'6'} type={'date'} name={'fechaN'} text={'Fecha Nacimiento'}/>
                <FormGroupReg md={'6'} type={'email'} name={'email'} text={'Correo'}
                              placeholder={'email@example.com'}/>
                <FormGroupReg md={'6'} type={'number'} name={'tlf'} text={'Telefono'}
                              placeholder={'61234567'}/>
                <FormGroupReg md={'6'} type={'password'} name={'pass'} text={'Contraseña'}
                              placeholder={'*********'}/>
                <FormGroupReg md={'6'} type={'password'} name={'passC'} text={'Confirmar Contraseña'}
                              placeholder={'*********'}/>
                <FormGroupButton page={"/"}/>
            </Form>
        );
    }
}

export default FormRegister;
