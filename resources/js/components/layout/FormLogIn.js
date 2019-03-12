import React, {Component} from 'react';
import {Form, Formik} from 'formik';
import * as Yup from 'yup';
import FormGroupButton from "../general/Forms/FormGroupButton";
import FormGroupReg from "../general/Forms/FormGroupReg";
import axios from "axios";
import {ToastContainer, toast} from 'react-toastify';
import {translate} from "../../helpers";
import {LocaleContext} from "../../LocaleContext"
import Translate from "../../lang/Translate";

class FormLogin extends Component {
    static contextType = LocaleContext;

    submit = (values) => {
        let notify = () => {
            toast.success(translate(this.context, 'success', 'toastLog'));
        };

        axios.post('/login', {values})
            .then(() => window.history.back())
            .then(function () {
                notify();
            });
    };

    render() {
        return (
            <Formik initialValues={{
                correo: '',
                password: '',
            }}
                    onSubmit={this.submit}
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
                        handleChange,
                        handleBlur,
                        handleSubmit,
                    } = props;
                    return (
                        <Form onSubmit={handleSubmit}>
                            <FormGroupReg md={12} invalid={errors.correo && touched.correo ? true : false}
                                          type={'email'} name={'correo'} label={<Translate type={'login'} string={'correo'}/>} onChange={handleChange}
                                          onBlur={handleBlur} value={values.correo} error={errors.correo}/>
                            <FormGroupReg md={12} invalid={errors.password && touched.password ? true : false}
                                          type={'password'} name={'password'} label={<Translate type={'login'} string={'contraseña'}/>}
                                          onChange={handleChange} onBlur={handleBlur} value={values.password}
                                          error={errors.password}/>
                            <FormGroupButton page={'/'}/>
                            <ToastContainer position="top-right" autoClose={5000} closeOnClick
                                            pauseOnVisibilityChangedraggable pauseOnHover/>
                        </Form>
                    );
                }}
            </Formik>
        );
    }
}

export default FormLogin;
