import React, {Component} from 'react';
import {Input} from 'reactstrap';
import PropTypes from 'prop-types';

class InputForm extends Component {
    render() {
        return (
            <Input invalid={this.props.invalid} type={this.props.type} className={this.props.className} name={this.props.name} id={this.props.name}
                   placeholder={this.props.placeholder} value={this.props.value} onChange={this.props.onChange}
                   onBlur={this.props.onBlur}/>);
    }
}

InputForm.propTypes = {
    type: PropTypes.string.isRequired,
    invalid: PropTypes.bool,
    className: PropTypes.string,
    value: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string
};

export default InputForm;