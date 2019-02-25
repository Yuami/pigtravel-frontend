import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from "reactstrap/es/Button";

class FormButton extends Component {
    render() {
        return (
            <Button page={this.props.page} block={this.props.block} className={this.props.className}
                    size='lg' color='primary' disabled={this.props.disabled} onClick={this.props.onclick}>{this.props.text}
            </Button>)

    }
}

FormButton.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
    onclick: PropTypes.string,
    block: PropTypes.string,
    page: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    pageParams: PropTypes.object,
};


export default FormButton;
