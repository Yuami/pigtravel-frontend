import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Col, FormGroup} from "reactstrap";
import LabelForm from "./LabelForm";
import InputForm from "./InputForm";
import {FormFeedback} from 'reactstrap';

class FormGroupReg extends Component {
    render() {
        return (
            <Col className="my-2" xs="12" md={this.props.md}>
                <FormGroup>
                    <LabelForm name={this.props.name} label={this.props.label}/>
                    <InputForm invalid={this.props.invalid} type={this.props.type} className={this.props.className}
                               name={this.props.name} id={this.props.name} placeholder={this.props.placeholder}
                               value={this.props.value} onChange={this.props.onChange} onBlur={this.props.onBlur}/>
                    <FormFeedback invalid>{this.props.error}</FormFeedback>
                </FormGroup>
            </Col>
        );
    }
}

FormGroupReg.propTypes = {
    md: PropTypes.number,
    invalid: PropTypes.bool,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
};

export default FormGroupReg;