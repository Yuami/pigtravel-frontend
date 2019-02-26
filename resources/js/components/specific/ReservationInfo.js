import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import moment from "react-daterange-picker/example/moment-range";
import Col from "reactstrap/es/Col";
import Row from "reactstrap/es/Row";
import Panel from "../layout/Panel";
import Translate from "../../lang/Translate";
import Stars from "../Stars";
import {coin} from "../../LocaleContext";

class ReservationInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            vivienda: [],
            pax: '',
            checkIn: moment(this.props.checkIn),
            checkOut: moment(this.props.checkOut),
            success: false,
        };

        this.state = {
            ...this.state,
            nights: this.state.checkOut.diff(this.state.checkIn, 'days'),
        }
    }

    componentWillMount() {
        const viviendaURL = '/api/viviendas/' + this.props.idVivienda;

        this.state.pax = this.props.pax > 1 ? <Translate type={'searcher'} string={'guests'}/> :
            <Translate type={'searcher'} string={'guest'}/>;

        axios.get(viviendaURL).then((res) => {
            this.setState({
                vivienda: res.data.data,
                success: true
            });
        });
    }


    render() {
        console.log(this.state.vivienda.valoracion);
        const valoracion = this.state.vivienda.valoracion !== undefined  && this.state.vivienda.valoracion.length > 0?
            this.state.vivienda.valoracion[0].media / 1 : 0;
        return (
            <Panel id={'reservationInfo'}>
                <Row>
                    <Col xs="7">
                        <h3 id='houseName'>{this.state.vivienda.nombre}</h3>
                    </Col>

                    <Col xs='5'>
                        <div className={'pull-right'}>
                            {this.state.success ? <Stars rating={valoracion} color={"primary"}/> : null}
                        </div>
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
                                    {this.state.checkIn.format('DD/MM/YYYY')} <span
                                    id={'arrowIcon'}>⇒</span> {this.state.checkOut.format('DD/MM/YYYY')}</p>
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
                        <p className={'pull-right mb-0'}>{this.props.serviceFee}{coin}</p>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col xs='8'>
                        <p><Translate type={'bookingDetails'} string={'total'}/></p>
                    </Col>
                    <Col xs='4'>
                        <p className={'font-weight-bold pull-right'}>{this.props.total}{coin}</p>
                    </Col>
                </Row>
            </Panel>
        );
    }
}

ReservationInfo.propTypes = {
    idVivienda: PropTypes.number.isRequired,
    checkIn: PropTypes.instanceOf(Date),
    checkOut: PropTypes.instanceOf(Date),
    pax: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    serviceFee: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
};

export default ReservationInfo;