import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from "reactstrap";
import FormButton from "./FormButton";

class FormGroupReg extends Component {
    render() {
        return (
            <Col className="my-2" xs="12">
                <Row>
                    <Col>
                        <FormButton page={this.props.page} text={'Cancelar'}/>
                    </Col>
                    <Col>
                        <FormButton text={'Confimar'}/>
                    </Col>
                </Row>
            </Col>
        );
    }
}

FormGroupReg.propTypes = {
    page: PropTypes.string
};

export default FormGroupReg;