import React, {Component} from 'react';
import Container from "reactstrap/es/Container"
import Translate from "../lang/Translate";
import FormGroup from "reactstrap/es/FormGroup";
import {LocaleContext} from "../LocaleContext";
import {translate} from "../helpers";
import FormButton from "../components/general/Forms/LinkButton";
import Label from "reactstrap/es/Label";
import UserRouter from "../components/layout/UserRouter";
import Panel from "../components/layout/Panel";


const FormErrors = ({formErrors}) =>
    <div className='formErrors'>
        {Object.keys(formErrors).map((fieldName, i) => {
            if (formErrors[fieldName].length > 0) {
                return (
                    <p key={i}>{formErrors[fieldName]}</p>
                )
            } else {
                return '';
            }
        })}
    </div>;


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            message: '',
            contactName: '',
            formErrors: {email: '', message: '', contactName: ''},
            emailValid: false,
            nameValid: false,
            messageValid: false,
            formValid: false
        };


        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput(e) {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({[name]: value},
            () => {
                this.validateField(name, value)
            });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let messageValid = this.state.messageValid;
        let nameValid = this.state.nameValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'message':
                messageValid = value.length >= 5;
                fieldValidationErrors.message = messageValid ? '' :
                    <Translate type={'contact'} string={'invalidMessage'}/>;
                break;
            case 'contactName':
                nameValid = value.length >= 1;
                fieldValidationErrors.contactName = nameValid ? '' : ' is not valid';
                break;
            default:
                break;
        }

        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            messageValid: messageValid,
            nameValid: nameValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.messageValid && this.state.nameValid});
    }

    errorClass(error) {
        return (error.length === 0 ? '' : 'has-danger');
    }

    render() {

        const contact = {
                type: 'contact',
                link: '/contact'
            };
        return (
            <> <UserRouter title={'contact'} list={contact}/>
                <Container className="contact">
                    <Panel className="App">
                        <form>
                            <FormGroup className={`${this.errorClass(this.state.formErrors.contactName)}`}>
                                <label htmlFor="nameContact"><Translate type={'contact'} string={'name'}/></label>
                                <LocaleContext.Consumer>
                                    {locale => <input className="form-control"
                                                      type="text"
                                                      name="contactName"
                                                      value={this.state.contactName}
                                                      onChange={this.handleUserInput}
                                                      placeholder={translate(locale, 'name', 'contact')}/>}
                                </LocaleContext.Consumer>
                            </FormGroup>
                            <FormGroup className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                                <label htmlFor="email"><Translate type={'contact'} string={'email'}/></label>
                                <LocaleContext.Consumer>
                                    {locale => <input
                                        className="form-control"
                                        type="email"
                                        name="email"
                                        placeholder={translate(locale, 'email', 'contact')}
                                        value={this.state.email}
                                        onChange={this.handleUserInput}>
                                    </input>}
                                </LocaleContext.Consumer>
                            </FormGroup>

                            <FormGroup className={`form-group ${this.errorClass(this.state.formErrors.message)}`}>
                                <Label htmlFor="message"><Translate type={'contact'} string={'message'}/></Label>
                                <LocaleContext.Consumer>
                                    {locale => <textarea
                                        rows="10"
                                        className="form-control"
                                        name="message"
                                        placeholder={translate(locale, 'message', 'contact')}
                                        value={this.state.message}
                                        onChange={this.handleUserInput}>
                                </textarea>}
                                </LocaleContext.Consumer>
                            </FormGroup>
                            <div>
                                <FormErrors formErrors={this.state.formErrors}/>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block"
                                    disabled={!this.state.formValid}><Translate type={'contact'} string={'send'}/>
                            </button>
                        </form>
                    </Panel>
                </Container>
            </>
        );
    }
}


export default Contact;