import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Input} from "reactstrap";

class InputForm extends Component {
    render() {
        return (<Input type={this.props.type} name={this.props.name} id={this.props.name}
                       placeholder={this.props.placeholder}/>);
    }
}

InputForm.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
};

export default InputForm;