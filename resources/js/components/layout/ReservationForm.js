import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Translate from "../../lang/Translate";
import Panel from "./Panel";
import axios from "axios";
import {Route} from "react-router-dom";
import MainModal from "./MainModal";

class ReservationForm extends Component {


    constructor(props) {
        super(props);
        this.state = {
            servicios: []
        };
    }

    componentWillMount() {
        var url = '/api/servicio/' + this.props.idVivienda;
        axios.get(url).then((res) => {
            this.setState({servicios: res.data});
        });
    }


    render() {
        var renderServicios = this.state.servicios.map(function (value, index, array) {
            console.log(value);
            if ([9,15,34].includes(value.idServicio)) {
                if(value.activo) {
                    return (
                        <li><Translate type={"reservation"} string={"allowed"}/> {value.servicio.toLowerCase()}</li>
                    );
                } else {
                   return (
                       <li><Translate type={"reservation"} string={"disallowed"}/> {value.servicio.toLowerCase()}</li>
                   )
                }
            }
        });

        var renderInformacion = [];
        return (
            <Panel id={"reservationForm"} body={"Body"}>
                <ul>
                    <li><h3><Translate type={'reservation'} string={'house-rules'}/></h3></li>
                    <ul>{renderServicios}</ul>
                    <li><h3><Translate type={'general'} string={'more-information'}/></h3></li>
                </ul>
                <MainModal buttonLabel={"lol"} modalHeader={"ja"} modalBody={"lol"} primaryButton={"ey"}/>
            </Panel>
        );
    }
}

ReservationForm.propTypes = {
    idVivienda: PropTypes.number.isRequired,
    xs: PropTypes.number,
    md: PropTypes.number,
};

export default ReservationForm;