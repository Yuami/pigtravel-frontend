/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import Input from "reactstrap/es/Input";
import Translate from "../../lang/Translate";
import * as PropTypes from "prop-types";

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

    render() {
        return (
            <div>
                <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal centered={true} fade={false} isOpen={this.state.modal} toggle={this.toggle}
                       className={this.props.className}>
                    <ModalHeader toggle={this.toggle}><Translate type={'passwordModal'} string={'title'}/></ModalHeader>
                    <ModalBody>
                        <input type="hidden" className="border-0 w-100 bg-transparent" value={this.props.token}/>

                        <input type="text"
                               className="border-0 w-100 bg-transparent" value={value}/>

                        <input type="text"
                               className="border-0 w-100 bg-transparent" value={value}/>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Change Password</Button>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

ForgotPasswordModal.propTypes = {
    token: PropTypes.string,
};

export default ForgotPasswordModal;