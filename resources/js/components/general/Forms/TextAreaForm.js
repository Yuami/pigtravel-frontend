import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class TextAreaForm extends Component {
    render() {
        return (
                <FormGroup>
                    <Label for={this.props.name}>{this.props.label}</Label>
                    <Input className={this.props.classname} rows='6' type="textarea" name="text" id={this.props.name} />
                </FormGroup>
        );
    }
}

TextAreaForm.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    classname: PropTypes.string,
};

TextAreaForm.defaultProps = {
    label: "",
};

export default TextAreaForm;
