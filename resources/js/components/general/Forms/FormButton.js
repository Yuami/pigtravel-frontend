import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from "reactstrap/es/Button";

class FormButton extends Component {
    render() {
        return (<Button block={this.props.block} className={this.props.className} size='lg' color='primary'
                        href={this.props.page}>{this.props.text}</Button>);
    }
}

FormButton.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
    block: PropTypes.bool,
    page: PropTypes.string
};

export default FormButton;