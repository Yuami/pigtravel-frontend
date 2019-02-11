import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from "reactstrap/es/Button";

class FormButton extends Component {
    render() {
        return (<Button className={'pull-right'} size='lg' color='primary' href={this.props.page}>{this.props.text}</Button>);
    }
}

FormButton.propTypes = {
    text: PropTypes.string.isRequired,
    page: PropTypes.string
};

export default FormButton;