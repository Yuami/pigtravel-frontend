import React, {Component} from 'react';
// import {Form, Input} from 'reactstrap';
// import CSRF from "../general/CSRF";
import {Form, Formik} from 'formik';
import * as Yup from 'yup';
// import InputForm from "../general/Forms/InputForm";
import FormGroupReg from "../general/Forms/FormGroupReg";
import FormGroupButton from "../general/Forms/FormGroupButton";

class FormRegister extends Component {
    render() {
        return (
            <Formik initialValues={{email: ''}} onSubmit={(values, {setSubmitting}) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 500);
            }} validationSchema={Yup.object().shape({
                email: Yup.string().email().required('Required'),
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
                            <FormGroupReg type={'email'} label={'Email'} name={'email'} value={values.email}
                                          onBlur={handleBlur} onChange={handleChange}
                                          className={errors.email && touched.email ? 'text-input error' : 'text-input'}/>
                            {errors.email && touched.email && <div className="input-feedback">{errors.email}</div>}
                            <FormGroupButton page={"/"}/>
                        </Form>
                    );
                }}
            </Formik>
            //     <Form className="row" action="/register" method="POST">
            //         <CSRF/>
            //         {/*<InputForm type={'hidden'} name={'idC'} value="q"/>*/}
            //         {/*<InputForm type={'hidden'} name={'idF'} value="q"/>*/}
            //         {/*<InputForm type={'hidden'} name={'desc'} value="q"/>*/}
            //         <Input type={'text'} className={errors.email && touched.email ? ('text-input error') : ('text-input')}
            //                name={'email'} id={'email'} placeholder={'Enter your Email'} value={values.email}
            //                onChange={handleChange} onBlur={handleBlur}/>
            //         {/*<FormGroupRegFirstLine name={'nombre'} label={'Nombre'} placeholder={'Nombre'}/>*/}
            //         {/*<FormGroupRegFirstLine name={'apellido1'} label={'Primer Apellido'}*/}
            //         {/*placeholder={'Primer Apellido'}/>*/}
            //         {/*<FormGroupRegFirstLine name={'apellido2'} label={'Segundo Apellido'}*/}
            //         {/*placeholder={'Segundo Apellido'}/>*/}
            //         {/*<FormGroupReg md={'6'} type={'text'} name={'dni'} label={'DNI'} placeholder={'12345678X'}/>*/}
            //         {/*<FormGroupReg md={'6'} type={'date'} name={'fechaN'} label={'Fecha Nacimiento'}/>*/}
            //         {/*<FormGroupReg md={'6'} type={'email'} name={'email'} label={'Correo'}*/}
            //         {/*placeholder={'email@example.com'}/>*/}
            //         {/*<FormGroupReg md={'6'} type={'number'} name={'tlf'} label={'Telefono'}*/}
            //         {/*placeholder={'61234567'}/>*/}
            //         {/*<FormGroupReg md={'6'} type={'password'} name={'password'} label={'Contraseña'}*/}
            //         {/*placeholder={'*********'}/>*/}
            //         {/*<FormGroupReg md={'6'} type={'password'} name={'passwordC'} label={'Confirmar Contraseña'}*/}
            //         {/*placeholder={'*********'}/>*/}
            //         <FormGroupButton page={"/"}/>
            //     </Form>
        );
    }
}

export default FormRegister;
