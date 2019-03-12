/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import Input from "reactstrap/es/Input";
import Translate from "../../lang/Translate";
import * as PropTypes from "prop-types";
import {LocaleContext} from "../../LocaleContext";
import {translate} from "../../helpers";
import Label from "reactstrap/es/Label";
import CSRF from "../general/CSRF";

class ForgotPasswordModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: open,
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    static contextType = LocaleContext;

    render() {
        return (
            <>
                <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal centered={true} fade={false} isOpen={this.state.modal} toggle={this.toggle}
                       className={this.props.className}>
                    <form action={'/recover'} method={'post'}>
                        <ModalHeader toggle={this.toggle}><Translate
                            type={'passwordModal'} string={'title'}/></ModalHeader>
                        <ModalBody>
                            <input name={'token'} type="hidden" className="border-0 w-100 bg-transparent" value={this.props.token}/>
                            <Label for={'new'}><Translate type={'passwordModal'} string={'new'}/></Label>
                            <Input id="new" name={'new'} type="password"/>
                            <Label for={'repeat'}><Translate type={'passwordModal'} string={'repeat'}/></Label>
                            <Input id="repeat" name={'new_confirmation'} type="password"/>
                        </ModalBody>
                        <ModalFooter>
                            <Button type={'submit'} color="primary">Change Password</Button>
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </form>
                </Modal>
            </>
        );
    }
}

ForgotPasswordModal.propTypes = {
    token: PropTypes.string,
};

export default ForgotPasswordModal;