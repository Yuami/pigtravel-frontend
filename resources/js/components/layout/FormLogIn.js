import React, {Component} from 'react';
import {Form, Formik} from 'formik';
import * as Yup from 'yup';
import FormGroupButton from "../general/Forms/FormGroupButton";
import FormGroupReg from "../general/Forms/FormGroupReg";
import axios from "axios";
import {ToastContainer, toast} from 'react-toastify';

class FormLogin extends Component {
    render() {
        let notify = () => {
            toast.success("Has iniciado Sesion!!");
        };
        return (
            <Formik initialValues={{
                correo: 'q@q.q',
                password: '123123',
            }}
                    onSubmit={(values, {setSubmitting}) => {
                        console.log(values);
                        axios.post('/login', {values})
                            .then(function (response) {
                                console.log(response);
                            }).catch(function (error) {
                            console.log(error);
                        }).then(function () {
                                window.location = '/';
                            }
                        ).then(function () {
                            notify();
                        });
                    }}
                    validationSchema={Yup.object().shape({
                        correo: Yup.string().email('El email no es valido').required('El email es necesario'),
                        password: Yup.string().min(4, 'La contraseña ha de tener minimo 4 caracteres')
                            .required('La contraseña es necesaria'),
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
                            <FormGroupReg md={12} invalid={errors.correo && touched.correo ? true : false}
                                          type={'email'} name={'correo'} label={'Correo'} onChange={handleChange}
                                          onBlur={handleBlur} value={values.correo} error={errors.correo}/>
                            <FormGroupReg md={12} invalid={errors.password && touched.password ? true : false}
                                          type={'password'} name={'password'} label={'Contraseña'}
                                          onChange={handleChange} onBlur={handleBlur} value={values.password}
                                          error={errors.password}/>
                            <FormGroupButton page={'/'}/>
                            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false}
                                            newestOnTop={false} closeOnClick rtl={false} pauseOnVisibilityChange
                                            draggable pauseOnHover/>
                        </Form>
                    );
                }}
            </Formik>
        );
    }
}

export default FormLogin;
