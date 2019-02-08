import React, {Component} from 'react';
import {LocaleContext} from "../LocaleContext";
import {translate} from "../helpers";
import Form from "reactstrap/es/Form";
import Container from "reactstrap/es/Container";
import UserRouter from "../components/layout/UserRouter";
import Input from "reactstrap/es/Input";
import Translate from "../lang/Translate";
import Label from "reactstrap/es/Label";
import FormGroup from "reactstrap/es/FormGroup";
import FormButton from "../components/general/Forms/FormButton";

class Contact extends Component {
    render() {
        const contact = [
            {
                type: 'contact',
                link: '/contact'
            },
        ];

        return (
            <>
                <UserRouter title={'contact'} list={contact}/>
                <Container className="contact shadow">
                    <div className="App">
                        <Form> <FormGroup>
                            <LocaleContext.Consumer>
                                {locale => <input type="text" name="email"
                                                  placeholder={translate(locale, 'email', 'contact')}/>}
                            </LocaleContext.Consumer>
                        </FormGroup>
                            <FormGroup>
                                <LocaleContext.Consumer>
                                    {locale => <input type="text" name="title"
                                                      placeholder={translate(locale, 'title', 'contact')}/>}
                                </LocaleContext.Consumer>
                            </FormGroup>
                            <FormGroup>
                                <LocaleContext.Consumer>
                                    {locale => <textarea rows="10" name="message"
                                                         placeholder={translate(locale, 'message', 'contact')}/>}
                                </LocaleContext.Consumer></FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox"/>{' '}
                                    <Translate type={'contact'} string={'checkPolicy'}/>
                                </Label>
                            </FormGroup>
                            <LocaleContext.Consumer>
                                {locale => <FormButton text={translate(locale, 'send', 'contact')}/>}
                            </LocaleContext.Consumer>
                        </Form>
                    </div>
                </Container>
            </>
        );
    }
}

export default Contact;