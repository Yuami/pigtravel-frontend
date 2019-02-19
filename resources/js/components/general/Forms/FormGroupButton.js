import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from "reactstrap";
import FormButton from "./FormButton";
import {Link} from "react-router-dom";

class FormGroupReg extends Component {
    render() {
        return (
            <Col className="my-2" md="12">
                <Row>
                    <Col>
                        <Link to={'/'} className={'btn btn-primary btn-lg btn-block '}>Cancelar</Link>
                    </Col>
                    <Col>
                        <FormButton ref={this.props.page} text={'Confirmar'} type={'submit'} block={true}/>
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