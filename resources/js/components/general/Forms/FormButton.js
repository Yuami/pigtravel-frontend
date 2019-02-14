import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from "reactstrap/es/Button";

class FormButton extends Component {
    render() {
        return (<Button type={this.props.type} block={this.props.block} className={this.props.className} size='lg'
                        color='primary'
                        href={this.props.page}>{this.props.text}</Button>);
    }
}

FormButton.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
    block: PropTypes.bool,
    type: PropTypes.string,
    page: PropTypes.string
};

export default FormButton;