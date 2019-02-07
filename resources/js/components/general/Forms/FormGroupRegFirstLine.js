import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Col, FormGroup} from "reactstrap";
import LabelForm from "./LabelForm";
import InputForm from "./InputForm";

class FormGroupRegFirstLine extends Component {
    render() {
        return (
            <Col className="my-2" xs="12" md="4">
                <FormGroup>
                    <LabelForm name={this.props.name} text={this.props.text}/>
                    <InputForm type='text' name={this.props.name} placeholder={this.props.placeholder}/>
                </FormGroup>
            </Col>
        );
    }
}

FormGroupRegFirstLine.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    text: PropTypes.string.isRequired
};

export default FormGroupRegFirstLine;