import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Translate from "../lang/Translate";
import axios from "axios";
import {LocaleContext, coin} from "../LocaleContext";
import {translate} from "../helpers";
import Col from "reactstrap/es/Col";
import Row from "reactstrap/es/Row";
import Container from "reactstrap/es/Container";
import TextAreaForm from "../components/general/Forms/TextAreaForm";
import LinkButton from "../components/general/Forms/LinkButton";
import Panel from "../components/layout/Panel";
import ReservationInfo from "../components/specific/ReservationInfo";
import {withRouter} from "react-router-dom";
import {FormGroup, Input, Label} from "reactstrap";
import Textarea from "@material-ui/core/InputBase/Textarea";
import Button from "react-bootstrap/Button";

class Reservation extends Component {


    constructor(props) {
        super(props);

        const allPrices = Object.freeze({
            price: this.props.price,
            serviceFee: this.props.price * 0.05 + 5,
            total: (this.props.price * 0.05 + 5) + this.props.price,
        });

        this.state = {
            message: '',
            servicios: [],
            price: allPrices.price,
            serviceFee: allPrices.serviceFee,
            total: allPrices.total,
            vivienda: [],
        };

        this.renderInformation.bind(this);
        this.renderRules.bind(this);
        this.renderSubmitButton.bind(this);
    }

    rules = [13, 14, 22];

    componentWillMount() {
        const servicioURL = '/api/servicio/' + this.props.idVivienda;
        const viviendaURL = '/api/viviendas/' + this.props.idVivienda;

        axios.get(viviendaURL).then((res) => {
            this.setState({vivienda: res.data});
        });

        axios.get(servicioURL).then((res) => {
            this.setState({servicios: res.data});
        });

    }

    static checkServiceLanguage(idioma) {
        return (localStorage["locale"] === idioma);
    };

    renderRules() {
        const rules = this.rules;

        console.log(this.state);
        return this.state.servicios.map(function (value, index, array) {
            if (rules.includes(value.idServicio) && Reservation.checkServiceLanguage(value.idioma)) {
                if (value.activo) {
                    return (
                        <li key={value.idServicio}><span
                            className={'fas fa-fw ' + value.icon}/> {value.nombre}&nbsp;
                            <Translate type={"reservation"} string={"allowed"}/>
                        </li>
                    );
                } else {
                    return (
                        <li key={value.idServicio}><span
                            className={'fas fa-fw ' + value.icon}/> {value.nombre}&nbsp;
                            <Translate type={"reservation"}
                                       string={"disallowed"}/></li>
                    )
                }
            }
        });
    }

    renderSubmitButton() {
        const info = {
            idVivienda: this.props.idVivienda,
            checkIn: this.props.checkIn,
            checkOut: this.props.checkOut,
            pax: this.props.pax,
            price: this.state.price,
            serviceFee: this.state.serviceFee,
            total: this.state.total,
            message: this.state.total,
        };

        return this.state.vivienda.alquilerAutomatico ?
            <LocaleContext.Consumer>
                {locale =>
                    <LinkButton page={'/payment'} pageParams={info}
                                id="reservationButton" className={'pull-right'}
                                text={translate(locale, 'accept', 'reservation')
                                } size={'lg'}/>
                }
            </LocaleContext.Consumer> :
            <LocaleContext.Consumer>
                {locale =>
                    <form onSubmit={this.handleSubmit}>
                        <Button
                            type={'submit'}
                            className='pull-right'
                            size={'lg'} color='primary'>{translate(locale, 'request', 'reservation')}
                        </Button>
                    </form>
                }
            </LocaleContext.Consumer>

    }



    renderInformation() {
        const rules = this.rules;
        return this.state.servicios.map(function (value, index, array) {
            if (!rules.includes(value.idServicio) && value.activo && Reservation.checkServiceLanguage(value.idioma)) {
                return (
                    <li className={'col-6'} key={value.idServicio}>
                        <span className={'fas fa-fw ' + value.icon}/> {value.nombre}</li>
                )
            }
        });
    }

    handleChange = (event) => {
        this.setState({message: event.target.value});
    };

    handleSubmit = (event) => {
        axios.post('/api/reservation', {
            idVivienda: this.props.idVivienda,
            checkIn: this.props.checkIn,
            checkOut: this.props.checkOut,
            pax: this.props.pax,
            precio: this.state.total,
            estado: 3,
            message: this.state.message,
        }).then(function (response) {
            window.location = ("/bookings/" + response.data);
        }).catch(function (error) {
            console.log(error);
        });
    };

    render() {
        const renderRules = this.renderRules();
        const renderInformacion = this.renderInformation();
        const renderSubmitButton = this.renderSubmitButton();

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
                            <FormGroup>
                                <Label for={'message'}/>
                                <Textarea className={'customTextarea'} rows='6' type="textarea" name="message"
                                          id={'message'}
                                          value={this.state.value} onChange={this.handleChange}/>
                            </FormGroup>
                            {renderSubmitButton}
                        </Panel>
                    </Col>
                    <Col lg='4' className={'order-0 order-lg-1'}>
                        <ReservationInfo {...this.props} serviceFee={this.state.serviceFee} total={this.state.total}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

Reservation.propTypes = {
    idVivienda: PropTypes.number.isRequired,
    checkIn: PropTypes.instanceOf(Date),
    checkOut: PropTypes.instanceOf(Date),
    pax: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
};

export default withRouter(Reservation);