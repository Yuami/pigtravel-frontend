import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from "reactstrap/es/Button";

class FormButton extends Component {
    render() {
        return (<a href={this.props.page}><Button block={this.props.block} className={this.props.className} size='lg' color='primary' disabled={this.props.disabled}>{this.props.text}</Button></a>);
    }
}

FormButton.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
    block: PropTypes.string,
    page: PropTypes.string,
    disabled: PropTypes.bool,
};

FormButton.defaultProps = {
    disabled: false,
};


export default FormButton;
