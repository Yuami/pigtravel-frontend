import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Translate from "../lang/Translate";
import axios from "axios";
import {LocaleContext, coin} from "../LocaleContext";
import {translate} from "../helpers";
import moment from "react-daterange-picker/example/moment-range";
import Col from "reactstrap/es/Col";
import Row from "reactstrap/es/Row";
import Container from "reactstrap/es/Container";
import TextAreaForm from "../components/general/Forms/TextAreaForm";
import FormButton from "../components/general/Forms/FormButton";
import Panel from "../components/layout/Panel";
import Stars from "../components/Stars";
import ReservationInfo from "../components/specific/ReservationInfo";

class Reservation extends Component {


    constructor(props) {
        super(props);
        this.state = {
            servicios: [],
            casa: [],
            pax: '',
            nights: this.props.checkOut.diff(this.props.checkIn, 'days'),
            serviceFee: this.props.price * 0.05 + 5,
        };

        this.state = {
            ...this.state,
            total: this.state.serviceFee + this.props.price,
        };

        this.renderInformation.bind(this);
        this.renderRules.bind(this);
    }

    rules = [13, 14, 22];

    componentWillMount() {
        const servicioURL = '/api/servicio/' + this.props.idVivienda;
        const viviendaURL = '/api/viviendas/' + this.props.idVivienda;



        axios.get(servicioURL).then((res) => {
            this.setState({servicios: res.data});
        });

        axios.get(viviendaURL).then((res) => {
            this.setState({casa: res.data});
        });
    }

    static checkServiceLanguage(idioma) {
        return (localStorage["locale"] === idioma);
    }
    ;

    renderRules() {
        const rules = this.rules;

        return this.state.servicios.map(function (value, index, array) {
            if (rules.includes(value.idServicio) && Reservation.checkServiceLanguage(value.idioma)) {
                if (value.activo) {
                    return (
                        <li key={value.idServicio}><span className={'fas fa-fw ' + value.icon}></span> {value.nombre}
                            <Translate type={"reservation"} string={"allowed"}/>
                        </li>
                    );
                } else {
                    return (
                        <li key={value.idServicio}><span className={'fas fa-fw ' + value.icon}></span> {value.nombre}
                            <Translate type={"reservation"}
                                       string={"disallowed"}/></li>
                    )
                }
            }
        });
    }

    renderInformation() {
        const rules = this.rules;
        return this.state.servicios.map(function (value, index, array) {
            if (!rules.includes(value.idServicio) && value.activo && Reservation.checkServiceLanguage(value.idioma)) {
                return (
                    <li className={'col-6'} key={value.idServicio}>
                        <span className={'fas fa-fw ' + value.icon}></span> {value.nombre}</li>
                )
            }
        });
    }


    render() {
        const renderRules = this.renderRules();
        const renderInformacion = this.renderInformation();
        console.log(this.props);

        return (
            <Container fluid className={'pt-5'}>
                <Row>
                    <Col lg='8' className={'order-1 order-lg-0'}>
                        <Panel id={"reservationForm"}>
                            <li><h3><Translate type={'reservation'} string={'house-rules'}/></h3></li>
                            <ul className={'mb-4'}>{renderRules}</ul>
                            <li><h3><Translate type={'reservation'} string={'includes'}/></h3></li>
                            <ul className={'row mb-4'}>{renderInformacion}</ul>
                            <li><h3><Translate type={'reservation'} string={'message'}/></h3></li>
                            <TextAreaForm classname={'customTextarea'} name={'message'}/>
                            <LocaleContext.Consumer>
                                {locale =>
                                    <FormButton id="reservationButton" className={'pull-right'}
                                                text={translate(locale, 'accept', 'reservation')}/>
                                }
                            </LocaleContext.Consumer>
                        </Panel>
                    </Col>
                    <Col lg='4' className={'order-0 order-lg-1'}>
                        <ReservationInfo {...this.props}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

Reservation.propTypes = {
    idVivienda: PropTypes.number.isRequired,
    checkIn: PropTypes.instanceOf(moment).isRequired,
    checkOut: PropTypes.instanceOf(moment).isRequired,
    pax: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
};

export default Reservation;