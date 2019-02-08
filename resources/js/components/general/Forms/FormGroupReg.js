import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Col, FormGroup, Input, Label} from "reactstrap";
import LabelForm from "./LabelForm";
import InputForm from "./InputForm";

class FormGroupReg extends Component {
    render() {
        return (
            <Col className="my-2" xs="12" md={this.props.md}>
                <FormGroup>
                    <LabelForm name={this.props.name} text={this.props.text}/>
                    <InputForm type={this.props.type} name={this.props.name} placeholder={this.props.placeholder}/>
                </FormGroup>
            </Col>
        );
    }
}

FormGroupReg.propTypes = {
    md: PropTypes.number,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    placeholder: PropTypes.string
};

export default FormGroupReg;