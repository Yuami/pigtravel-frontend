import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Label from "reactstrap/es/Label";

class LabelForm extends Component {
    render() {
        return (<Label for={this.props.name}>{this.props.label}</Label>);
    }
}

LabelForm.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
};

export default LabelForm;