import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from "reactstrap";
import FormButton from "./FormButton";

class FormGroupReg extends Component {
    render() {
        return (
            <Col className="my-2" md="12">
                <Row>
                    <Col>
                        <FormButton page={this.props.page} text={'Cancelar'} block={true}/>
                    </Col>
                    <Col>
                        <FormButton page={this.props.page} text={'Confirmar'} type={'submit'} block={true}/>
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