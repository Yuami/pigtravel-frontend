import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Translate from "../../lang/Translate";
import Panel from "./Panel";
import axios from "axios";
import {Route} from "react-router-dom";
import MainModal from "./MainModal";
import TextAreaForm from "../general/Forms/TextAreaForm";
import FormButton from "../general/Forms/FormButton";
import {LocaleContext, coin} from "../../LocaleContext";
import {translate} from "../../helpers";
import moment from "react-daterange-picker/example/moment-range";
import Stars from "../Stars";
import Col from "reactstrap/es/Col";
import Row from "reactstrap/es/Row";
import Container from "reactstrap/es/Container";

class ReservationForm extends Component {


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

        this.state.pax = this.props.pax > 1 ? <Translate type={'searcher'} string={'guests'}/> : <Translate type={'searcher'} string={'guest'}/>;

        axios.get(servicioURL).then((res) => {
            this.setState({servicios: res.data});
        });

        axios.get(viviendaURL).then((res) => {
            this.setState({casa: res.data});
        });
    }

    static checkServiceLanguage(idioma) {
        return (localStorage["locale"] === idioma);
    };

    renderRules() {
        const rules = this.rules;

        return this.state.servicios.map(function (value, index, array) {
            if (rules.includes(value.idServicio) && ReservationForm.checkServiceLanguage(value.idioma)) {
                if (value.activo) {
                    return (
                        <li key={value.idServicio}><span className={'fas fa-fw ' + value.icon}></span> {value.nombre} <Translate type={"reservation"} string={"allowed"}/>
                        </li>
                    );
                } else {
                    return (
                        <li key={value.idServicio}><span className={'fas fa-fw ' + value.icon}></span> {value.nombre} <Translate type={"reservation"}
                                                                             string={"disallowed"}/></li>
                    )
                }
            }
        });
    }

    renderInformation() {
        const rules = this.rules;
        return this.state.servicios.map(function (value, index, array) {
            if (!rules.includes(value.idServicio) && value.activo && ReservationForm.checkServiceLanguage(value.idioma)) {
                return (
                    <li className={'col-6'} key={value.idServicio}><span className={'fas fa-fw ' + value.icon}></span> {value.nombre}</li>
                )
            }
        });
    }


    render() {
        const renderRules = this.renderRules();
        const renderInformacion = this.renderInformation();

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
                                    <FormButton id="reservationButton" className={'pull-right'} text={translate(locale, 'accept', 'reservation')}/>
                                }
                            </LocaleContext.Consumer>
                        </Panel>
                    </Col>
                    <Col lg='4' className={'order-0 order-lg-1'}>
                        <Panel id={'reservationInfo'}>
                            <Row>
                                <Col xs="7">
                                    <h3 id='houseName'>{this.state.casa.nombre}</h3>
                                </Col>

                                <Col xs='5'>
                                    <div className={'pull-right'}>{<Stars rating={'5'}/>}</div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={'12'} lg={'4'} className={'order-lg-1'}>
                                    <img className={'pull-right'} id="houseImage"
                                         src={'http://admin.pigtravel.top/assets/uploads/img/casas/default-image.jpg'}
                                         alt='house image'/>
                                </Col>
                                <Col xs={'12'} lg={'8'} className={'order-lg-0'}>
                                    <Row>
                                        <Col>
                                            <p className={'mb-0 mt-3'}>
                                                {this.props.checkIn.format('DD/MM/YYYY')} <span id={'arrowIcon'}>⇒</span> {this.props.checkOut.format('DD/MM/YYYY')}</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <p className={'mb-0'}>{this.props.pax}&nbsp;{this.state.pax}</p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <hr/>
                            <Row>
                                <Col xs='8'>
                                    <p className={'mb-0'}>{this.state.nights} x {this.props.price / this.state.nights}{coin}
                                        &nbsp;<Translate type={'houselist'} string={'night'}/></p>
                                </Col>
                                <Col xs='4'>
                                    <p className={'text-right mb-0'}>{this.props.price}{coin}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs='8'>
                                    <p className={'mb-0'}><Translate type={'bookingDetails'} string={'serviceFee'}/></p>
                                </Col>
                                <Col xs='4'>
                                    <p className={'pull-right mb-0'}>{this.state.serviceFee}{coin}</p>
                                </Col>
                            </Row>
                            <hr/>
                            <Row>
                                <Col xs='8'>
                                    <p><Translate type={'bookingDetails'} string={'total'}/></p>
                                </Col>
                                <Col xs='4'>
                                    <p className={'font-weight-bold pull-right'}>{this.state.total}{coin}</p>
                                </Col>
                            </Row>
                        </Panel>
                    </Col>
                </Row>
            </Container>
        )
    }
}

ReservationForm.propTypes = {
    idVivienda: PropTypes.number.isRequired,
    checkIn: PropTypes.instanceOf(moment).isRequired,
    checkOut: PropTypes.instanceOf(moment).isRequired,
    pax: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
};

export default ReservationForm;