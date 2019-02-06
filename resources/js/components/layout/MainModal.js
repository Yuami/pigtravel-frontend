import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup} from 'reactstrap';
import PropTypes from 'prop-types';

class MainModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        const secondary = this.props.secondaryButton ?
            <Button color="secondary" onClick={this.toggle}>{this.props.secondaryButton}</Button> : null;


        return (
            <div>
                <Button color="primary" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>{this.props.modalHeader}</ModalHeader>
                    <ModalBody>
                        {this.props.modalBody}
                    </ModalBody>
                    <ModalFooter>
                        <a href={this.props.primaryButtonLink}>
                            <Button color="primary" onClick={this.toggle}>{this.props.primaryButton}</Button>{secondary}
                        </a>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

MainModal.propTypes = {
    buttonLabel: PropTypes.string.isRequired,
    modalHeader: PropTypes.string.isRequired,
    modalBody: PropTypes.string.isRequired,
    primaryButton: PropTypes.string.isRequired,
    secondaryButton: PropTypes.string,
    primaryButtonLink: PropTypes.string
};




export default MainModal;