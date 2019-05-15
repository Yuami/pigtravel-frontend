import React, {Component} from 'react';
import Container from "reactstrap/es/Container";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import HouseCarrousel from "../components/specific/HouseCarrousel"
import axios from "axios";
import DatePickerHouse from "../components/specific/DatePickerHouse";
import FormGroup from "reactstrap/es/FormGroup";
import {Button, Label, Popover, PopoverBody} from "reactstrap";
import FaIcon from "../components/general/FaIcon";
import Translate from "../lang/Translate";
import {LocaleContext, coin} from "../LocaleContext";
import {checkIfUndefined} from "../helpers";
import Stars from "../components/Stars";
import SideBarHouse from "../components/layout/SideBarHouse";
import Panel from "../components/layout/Panel";
import LinkButton from "../components/general/Forms/LinkButton";
import {translate} from "../helpers";
import originalMoment from "moment";
import {extendMoment} from "moment-range";
import DesglosePrecioCasa from "../components/specific/DesglosePrecioCasa";
import UserImage from "../components/specific/UserImage";
import {withRouter} from "react-router-dom";
import ProfileImg from "../components/general/ProfileImg";
import PanelSearcher from "../components/search/PanelSearcher";
import Link from "react-router-dom/es/Link";

const moment = extendMoment(originalMoment);

class House extends Component {
    constructor(props, context) {
        super(props, context);

        const stateless = checkIfUndefined(this.props.location.state, ["guests", "start", "end", "place"]);

        if (stateless) {
            this.state = {
                details: [{idVendedor: 0}],
                houseDetails: {},
                guests: 1,
                show: false,
                date: moment.range(moment().format('YYYY-MM-DD'), moment().add(1, 'week').format('YYYY-MM-DD')),
                days: moment().add(1, 'week').diff(moment(), 'days'),
            }
        } else {
            this.state = {
                details: [{idVendedor: 0}],
                houseDetails: {},
                image: "",
                place: this.props.location.state.place,
                guests: this.props.location.state.guests,
                show: false,
                date: moment.range(this.props.location.state.start, this.props.location.state.end),
                days: moment(this.props.location.state.end).diff(moment(this.props.location.state.start), 'days'),
            };
        }
    }

    IncrementItem = () => {
        const maxGuests = this.state.details.map((v) => v.capacidad);
        const guests = this.state.guests + 1 > 3 ? 3 : this.state.guests + 1;
        this.setState({guests});

    };

    DecreaseItem = () => {
        const guests = this.state.guests - 1 < 1 ? 1 : this.state.guests - 1;
        this.setState({guests});
    };

    tarifaContains(day, tarifa) {
        let range = moment().range(tarifa.fechaInicio, tarifa.fechaFin);
        return range.contains(day)
    }

    updatePrecio() {
        const range = this.state.date;
        const dates = this.getDates(range.start, range.end);
        const tarifas = this.state.houseDetails.tarifas;
        const general = tarifas.general;
        const extras = tarifas.extra;
        let price = 0;
        for (let day of dates) {
            let dayPrice = general.precio;
            for (let tarifa in extras) {
                if (this.tarifaContains(day, extras[tarifa])) {
                    dayPrice = extras[tarifa].precio;
                    break;
                }
            }
            price += dayPrice;
        }

        let media = price / dates.length;
        let details = this.state.details[0];
        details.precio = Math.round(media * 100) / 100;
        this.setState({details: [details]})
    }

    handleChangeDates(date) {
        this.setState({
            date,
            days: date.end.diff(date.start, 'days')
        });
        this.updatePrecio();
    }

    getDates(startDate, stopDate) {
        let dateArray = [];
        let currentDate = moment(startDate);
        stopDate = moment(stopDate);
        while (currentDate <= stopDate) {
            dateArray.push(moment(currentDate));
            currentDate = moment(currentDate).add(1, 'days');
        }
        return dateArray;
    }


    componentWillMount() {
        axios.get('/api/viviendas/' + this.props.match.params.idHouse)
            .then(res => res.data)
            .then(house => this.setState({
                houseDetails: house.data
            }))
            .then(() => this.updatePrecio());
        axios.get('/api/houses/' + this.props.match.params.idHouse)
            .then(house => this.setState({
                details: house.data
            }));
    }

    ToggleDiv = () => {
        this.setState({show: !this.state.show});
    };

    render() {
        document.title = this.state.details.map((v) => v.nombre) + " | Pig Travel";

        var meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = this.state.details.map((v) => v.descripcion);
        document.head.appendChild(meta);


        const coordX = this.state.details.map((v) => v.coordX).toString();
        const coordY = this.state.details.map((v) => v.coordY).toString();
        const decreaseBtn = this.state.guests === 1 ?
            <Button color="" className="incrementIcon" onClick={this.DecreaseItem} disabled><FaIcon
                icon={'fa fa-minus'}/></Button> :
            <Button color="" className="incrementIcon" onClick={this.DecreaseItem}><FaIcon
                icon={'fa fa-minus'}/></Button>;

        return (
            <div className="mt-3">
                <Container>
                    <PanelSearcher/>
                    <h1>{this.state.details.map((v) => v.nombre)}</h1>
                    <Row className="house">
                        <Col lg="8">
                            <Panel>
                                <HouseCarrousel idHouse={this.props.match.params.idHouse}/>
                            </Panel>
                        </Col>
                        <Col>
                            <Panel className=" m-3">
                                <Row>
                                    <Col lg="3" sm="3" xs="4">
                                        <ProfileImg idPersona={this.state.houseDetails.vendedor}
                                                    className="img-profile"/>
                                    </Col>
                                    <Col lg="9" sm="9" xs="8" className="my-auto">
                                        {this.state.details.map((v) => (
                                            <h3>{v.vendedor} {v.apellido1}</h3>
                                        ))}
                                    </Col>
                                </Row>
                            </Panel>
                            <Panel id='reservationPanel' className="shadow m-3">
                                <Col lg="12">
                                    <Row className={'justify-content-end mr-0'}>
                                        <Stars rating={5} color={"primary"}/>
                                    </Row>
                                    <Row className="justify-content-center">
                                        <h1 className="precioNoche">
                                            <strong>{this.state.details.map((v) => (v.precio))}{coin}</strong></h1>
                                    </Row>
                                    <Row className="justify-content-center">
                                        <h3><Translate type={'house'} string={'priceNight'}/></h3>
                                    </Row>
                                    <Row className="filtro justify-content-center">
                                        <DatePickerHouse onChange={this.handleChangeDates.bind(this)}
                                                         value={this.state.date}/>
                                    </Row>
                                    <Row className="justify-content-center">
                                        <FormGroup id={"guests"}>
                                            <Label><FaIcon icon={'fa fa-user'}/></Label>
                                            <div className="inputSearcher">
                                                {this.state.guests} <input type="hidden" name="guests"
                                                                           value={this.state.guests}/>
                                                <Translate string={this.state.guests === 1 ? 'guest' : 'guests'}
                                                           type={'searcher'}/>
                                            </div>
                                            <Popover placement="bottom" isOpen={this.state.show} target="guests"
                                                     toggle={this.ToggleDiv} trigger="legacy">
                                                <PopoverBody>
                                                    {decreaseBtn}
                                                    <Button color="" className="incrementIcon"
                                                            onClick={this.IncrementItem}><FaIcon
                                                        icon={'fa fa-plus'}/></Button>
                                                </PopoverBody>
                                            </Popover>
                                        </FormGroup>
                                    </Row>
                                    <Row>
                                        <Col lg="12" className="mt-4">
                                            <DesglosePrecioCasa nights={this.state.days}
                                                                price={this.state.details.map((v) => v.precio)}/>
                                        </Col>
                                    </Row>
                                    <Row id={'buttonRow'}>
                                        <LocaleContext.Consumer>
                                            {locale =>
                                                <LinkButton block={true} page={'/reservation'} pageParams={
                                                    {
                                                        idVivienda: parseInt(this.props.match.params.idHouse),
                                                        checkIn: new Date(this.state.date.start),
                                                        checkOut: new Date(this.state.date.end),
                                                        pax: this.state.guests,
                                                        price: this.state.details.map((v) => (v.precio))[0] * this.state.days ?
                                                            this.state.details.map((v) => (v.precio))[0] * this.state.days : 0,
                                                    }}
                                                            id="reservationButton"
                                                            className={'btn btn-primary btn-block'}
                                                            text={translate(locale, 'book', 'house')}/>}
                                        </LocaleContext.Consumer>
                                    </Row>
                                </Col>
                            </Panel>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="12">
                            <SideBarHouse description={this.state.details.map((v) => (v.descripcion))}
                                          houseID={this.props.match.params.idHouse}
                                          coordX={coordX}
                                          coordY={coordY}
                            />
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }
}

export default withRouter(House);
