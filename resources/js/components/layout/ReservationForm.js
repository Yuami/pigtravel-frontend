import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Translate from "../../lang/Translate";
import Panel from "./Panel";
import axios from "axios";
import {Route} from "react-router-dom";
import MainModal from "./MainModal";
import TextAreaForm from "../general/Forms/TextAreaForm";
import FormButton from "../general/Forms/FormButton";
import {LocaleContext} from "../../LocaleContext";
import {translate} from "../../helpers";

class ReservationForm extends Component {


    constructor(props) {
        super(props);
        this.state = {
            servicios: []
        };

        this.renderInformation.bind(this);
        this.renderRules.bind(this);
    }

    rules = [13, 14, 22];

    componentWillMount() {
        const url = '/api/servicio/' + this.props.idVivienda;
        axios.get(url).then((res) => {
            this.setState({servicios: res.data});
        });
    }

    static checkServiceLanguage(idioma, index = '') {
        return (localStorage["locale"] === idioma);
    };

    convertDate(date) {
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();
    }

    renderRules() {
        const rules = this.rules;

        return this.state.servicios.map(function (value, index, array) {
            if (rules.includes(value.idServicio) && ReservationForm.checkServiceLanguage(value.idioma, index)) {
                if (value.activo) {
                    return (
                        <li key={value.idServicio}>{value.nombre} <Translate type={"reservation"} string={"allowed"}/>
                        </li>
                    );
                } else {
                    return (
                        <li key={value.idServicio}>{value.nombre} <Translate type={"reservation"}
                                                                             string={"disallowed"}/></li>
                    )
                }
            }
        });
    }

    renderInformation() {
        const rules = this.rules;
        return this.state.servicios.map(function (value, index, array) {
            if (!rules.includes(value.idServicio) && value.activo && ReservationForm.checkServiceLanguage(value.idioma, index)) {
                return (
                    <li key={value.idServicio}>{value.nombre}</li>
                )
            }
        });
    }


    render() {
        const renderRules = this.renderRules();

        const renderInformacion = this.renderInformation();

        return (
            <div className={'container-fluid'}>
                <div className={'col-md-8'}>
                    <Panel id={"reservationForm"}>
                        <ul>
                            <li><h3><Translate type={'reservation'} string={'house-rules'}/></h3></li>
                            <ul className={'mb-4'}>{renderRules}</ul>
                            <li><h3><Translate type={'reservation'} string={'includes'}/></h3></li>
                            <ul className={'mb-4'}>{renderInformacion}</ul>
                            <li><h3><Translate type={'reservation'} string={'message'}/></h3></li>
                            <TextAreaForm classname={'customTextarea'} name={'message'}/>
                        </ul>
                        <LocaleContext.Consumer>
                            {locale =>
                                <FormButton text={translate(locale, 'accept', 'reservation')}/>
                            }
                        </LocaleContext.Consumer>
                    </Panel>
                </div>
                <div className={'col-md-4'}>
                    <Panel id={'reservationInfo'}>

                    </Panel>
                </div>
            </div>
        );
    }
}

ReservationForm.propTypes = {
    idVivienda: PropTypes.number.isRequired,
    pax: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
};

export default ReservationForm;