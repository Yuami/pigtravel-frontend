import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from "reactstrap";
import FormButton from "./FormButton";
import {Link} from "react-router-dom";

class FormGroupButton extends Component {
    render() {
        return (
            <Col className="my-2" md="12">
                <Row>
                    <Col>
                        <Link to={'/'} className={'btn btn-primary btn-lg btn-block '}>Cancelar</Link>
                    </Col>
                    <Col>
                        <FormButton onclick={this.props.onclick} ref={this.props.page} text={'Confirmar'}
                                    type={'submit'} block={true}/>
                    </Col>
                </Row>
            </Col>
        );
    }
}

FormGroupButton.propTypes = {
    onclick: PropTypes.string,
    page: PropTypes.string
};

export default FormGroupButton;