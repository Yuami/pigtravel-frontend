import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {AvField} from 'availity-reactstrap-validation';

class InputForm extends Component {
    render() {
        return (<AvField type={this.props.type} name={this.props.name} id={this.props.name}
                         placeholder={this.props.placeholder} label={this.props.label}
                         errorMessage={this.props.eMessage} validate={this.props.validate}/>);
    }
}

InputForm.propTypes = {
    type: PropTypes.string.isRequired,
    eMessage: PropTypes.string,
    validate: PropTypes.object.isRequired,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string
};

export default InputForm;