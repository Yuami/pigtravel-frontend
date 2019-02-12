import React, {Component} from 'react';
import {AvForm} from 'availity-reactstrap-validation';
import CSRF from "../general/CSRF";
import InputForm from "../general/Forms/InputForm";

class FormRegister extends Component {
    render() {
        return (
            <AvForm className="row" action="/register" method="POST">
                <CSRF/>
                {/*<InputForm type={'hidden'} name={'idC'} value="q"/>*/}
                {/*<InputForm type={'hidden'} name={'idF'} value="q"/>*/}
                {/*<InputForm type={'hidden'} name={'desc'} value="q"/>*/}
                <InputForm type={'text'} label={'Nombre'} validate={{
                    required: {value: true},
                    pattern: {value: '^[A-Za-z0-9]+$'},
                    minLength: {value: 6},
                    maxLength: {value: 16}
                }} name={'nombre'}/>
                <InputForm type={'text'} label={'Primer Apellido'} validate={{
                    required: {value: true},
                    pattern: {value: '^[A-Za-z0-9]+$'},
                    minLength: {value: 6}
                }} name={'apellido1'}/>
                <InputForm type={'text'} label={'Segundo Apellido'} validate={{
                    required: {value: true},
                    pattern: {value: '^[A-Za-z0-9]+$'},
                    minLength: {value: 6}
                }} name={'apelldo2'}/>
                <InputForm type={'date'} label={'Fecha Nacimiento'} validate={{
                    dateRange: {
                        start: {value: 0, units: 'years',},
                        end: {value: +10, units: 'years',},
                        errorMessage: 'La fecha no es valida'
                    }
                }} name={'fechaN'}/>
                <InputForm type={'text'} label={'Dni'} validate={{
                    required: {value: true},
                    pattern: {value: '^[A-Za-z0-9]+$'},
                    minLength: {value: 9},
                    maxLength: {value: 9}
                }} name={'dni'}/>
                <InputForm type={'email'} label={'Email'} validate={{
                    required: {value: true},
                    email: {value: true, errorMessage: 'El email no es valido'}
                }} name={'email'}/>
                <InputForm type={'text'} label={'Telefono'} eMessage={'El telefono no es valido'}
                           validate={{
                               required: {value: true},
                               pattern: {value: '^[0-9]+$'},
                               minLength: {value: 9},
                               maxLength: {value: 9}
                           }} name={'tlf'}/>
                <InputForm type={'password'} label={'Contraseña'} validate={{
                    required: {value: true},
                    pattern: {value: '^[A-Za-z0-9]+$'},
                    minLength: {value: 6}
                }} name={'password'}/>
                <InputForm type={'password'} label={'Confirmar Contraseña'} validate={{
                    required: {value: true},
                    match: {value: 'password'}
                }} name={'passwordC'}/>
                {/*<FormGroupRegFirstLine name={'nombre'} text={'Nombre'} placeholder={'Nombre'}/>*/}
                {/*<FormGroupRegFirstLine name={'apellido1'} text={'Primer Apellido'}*/}
                {/*placeholder={'Primer Apellido'}/>*/}
                {/*<FormGroupRegFirstLine name={'apellido2'} text={'Segundo Apellido'}*/}
                {/*placeholder={'Segundo Apellido'}/>*/}
                {/*<FormGroupReg md={'6'} type={'text'} name={'dni'} text={'DNI'} placeholder={'12345678X'}/>*/}
                {/*<FormGroupReg md={'6'} type={'date'} name={'fechaN'} text={'Fecha Nacimiento'}/>*/}
                {/*<FormGroupReg md={'6'} type={'email'} name={'email'} text={'Correo'}*/}
                {/*placeholder={'email@example.com'}/>*/}
                {/*<FormGroupReg md={'6'} type={'number'} name={'tlf'} text={'Telefono'}*/}
                {/*placeholder={'61234567'}/>*/}
                {/*<FormGroupReg md={'6'} type={'password'} name={'password'} text={'Contraseña'}*/}
                {/*placeholder={'*********'}/>*/}
                {/*<FormGroupReg md={'6'} type={'password'} name={'passwordC'} text={'Confirmar Contraseña'}*/}
                {/*placeholder={'*********'}/>*/}
                {/*<FormGroupButton page={"/"}/>*/}
            </AvForm>
        )
            ;
    }
}

export default FormRegister;
