import React, {Component} from 'react';
import {FormFeedback, Col, Row} from 'reactstrap';
import {Form, Formik} from 'formik';
import * as Yup from 'yup';
import FormGroupButton from "../general/Forms/FormGroupButton";
import FormGroupReg from "../general/Forms/FormGroupReg";
import FormButton from "../general/Forms/FormButton";
import axios from "axios";
import Input from "reactstrap/es/Input";

class FormRegister extends Component {
    render() {
        return (
            <Formik initialValues={{
                email: 'q@q.q',
                nombre: 'q',
                ap1: 'q',
                ap2: 'q',
                dni: '123123123',
                tlf: '123123123',
                desc: '123123123',
                idF: '1',
                idC: '1',
                fechaN: '02/02/2002',
                password: '123123',
                passwordC: '123123'
            }}
                    onSubmit={(values, {setSubmitting}) => {
                        delete values.passwordC;
                        console.log(values);
                        axios.post('/register', {values})
                            .then(function (response) {
                                console.log(response);
                            }).catch(function (error) {
                            console.log(error);
                        });
                    }}
                    validationSchema={Yup.object().shape({
                        nombre: Yup.string().required('El nombre es necesario'),
                        ap1: Yup.string().required('El primer apellido es necesario'),
                        ap2: Yup.string(),
                        dni: Yup.string().required('El dni es necesario').length(9, 'El dni tiene que tener 9 caracteres'),
                        email: Yup.string().email('El email no es valido').required('El email es necesario'),
                        tlf: Yup.number().required('El telefono es necesario')
                            .min(9, 'El telefono es demasiado corto')
                            .positive('El telefono ha de ser positivo'),
                        fechaN: Yup.date().max(new Date(), 'No puedes poner una fecha mayor que hoy')
                            .min('1919/02/14', 'La fecha debe ser mas actual').required('La fecha es necesaria'),
                        password: Yup.string().min(4, 'La contraseña ha de tener minimo 4 caracteres')
                            .max(15, 'La contraseña solo puede ser maximo de 15 caracteres')
                            .required('La contraseña es necesaria'),
                        passwordC: Yup.string()
                            .oneOf([Yup.ref('password'), null], 'Passwords must match')
                    })}>
                {props => {
                    const {
                        values,
                        touched,
                        errors,
                        dirty,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        handleReset,
                    } = props;
                    return (
                        <Form onSubmit={handleSubmit}>
                            <Input type={'hidden'} value={values.idC} name={'idC'}/>
                            <Input type={'hidden'} value={values.idF} name={'idF'}/>
                            <Input type={'hidden'} value={values.desc} name={'desc'}/>
                            <Row>
                                <FormGroupReg md={4} invalid={errors.nombre && touched.nombre ? true : false}
                                              type={'text'}
                                              name={'nombre'} label={'Nombre'} onChange={handleChange}
                                              onBlur={handleBlur} value={values.nombre} error={errors.nombre}/>
                                <FormGroupReg md={4} invalid={errors.ap1 && touched.ap1 ? true : false} type={'text'}
                                              name={'ap1'} label={'Primer Apellido'} onChange={handleChange}
                                              onBlur={handleBlur} value={values.ap1} error={errors.ap1}/>
                                <FormGroupReg md={4} type={'text'} name={'ap2'} label={'Segundo Apellido'}
                                              onChange={handleChange} onBlur={handleBlur} value={values.ap2}
                                              error={errors.ap2}/>
                            </Row>
                            <Row>

                                <FormGroupReg md={6} invalid={errors.dni && touched.dni ? true : false} type={'text'}
                                              name={'dni'} label={'Dni'} onChange={handleChange}
                                              onBlur={handleBlur} value={values.dni} error={errors.dni}/>
                                <FormGroupReg md={6} invalid={errors.fechaN && touched.fechaN ? true : false}
                                              type={'date'} name={'fechaN'} label={'Fecha Nacimiento'}
                                              onChange={handleChange}
                                              onBlur={handleBlur} value={values.fechaN} error={errors.fechaN}/>
                            </Row>
                            <Row>
                                <FormGroupReg md={6} invalid={errors.email && touched.email ? true : false}
                                              type={'email'} name={'email'} label={'Correo'} onChange={handleChange}
                                              onBlur={handleBlur} value={values.email} error={errors.email}/>
                                <FormGroupReg md={6} invalid={errors.tlf && touched.tlf ? true : false} type={'tel'}
                                              name={'tlf'} label={'Telefono'} onChange={handleChange}
                                              onBlur={handleBlur} value={values.tlf} error={errors.tlf}/>
                            </Row>
                            <Row>
                                <FormGroupReg md={6} invalid={errors.password && touched.password ? true : false}
                                              type={'password'} name={'password'} label={'Contraseña'}
                                              onChange={handleChange} onBlur={handleBlur} value={values.password}
                                              error={errors.passweord}/>
                                <FormGroupReg md={6} invalid={errors.passwordC && touched.passwordC ? true : false}
                                              type={'password'} name={'passwordC'} label={'Confirmar Contraseña'}
                                              onChange={handleChange} onBlur={handleBlur} value={values.passwordC}
                                              error={errors.passwordC}/>
                            </Row>
                            <Col className="my-2" md="12">
                                <Row>
                                    <Col>
                                        <FormButton text={'Cancelar'} block={true}/>
                                    </Col>
                                    <Col>
                                        <FormButton text={'Confirmar'} type={'submit'} block={true}/>
                                    </Col>
                                </Row>
                            </Col>
                        </Form>
                    );
                }}
            </Formik>
        );
    }
}

export default FormRegister;
