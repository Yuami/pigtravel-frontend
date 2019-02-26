import React, {Component} from 'react';
import Container from "reactstrap/es/Container";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import HouseCarrousel from "../components/specific/HouseCarrousel"
import axios from "axios";
import DatePickerInicio from "../components/specific/DatePickerInicio";
import FormGroup from "reactstrap/es/FormGroup";
import {Button, Label, Popover, PopoverBody} from "reactstrap";
import FaIcon from "../components/general/FaIcon";
import Translate from "../lang/Translate";
import {LocaleContext, coin} from "../LocaleContext";
import Stars from "../components/Stars";
import SideBarHouse from "../components/layout/SideBarHouse";
import Panel from "../components/layout/Panel";
import LinkButton from "../components/general/Forms/LinkButton";
import {translate} from "../helpers";
import originalMoment from "moment";
import {extendMoment} from "moment-range";
import DesglosePrecioCasa from "../components/specific/DesglosePrecioCasa";
const moment = extendMoment(originalMoment);

class House extends Component {
    constructor(props, context) {
        super(props, context);
        var startDate = moment("13.04.2016", "DD.MM.YYYY");
        var endDate = moment("28.04.2016", "DD.MM.YYYY");
        this.state = {
            details: [],
            clicks: 2,
            show: false,
            date: moment.range(startDate,endDate),
            days: endDate.diff(startDate, 'days'),
        };
    }
    IncrementItem = () => {
        this.setState({clicks: this.state.clicks + 1});
    };

    DecreaseItem = () => {
        const clicks = this.state.clicks - 1 < 1 ? 1 : this.state.clicks - 1;
        this.setState({clicks});
    };
    handleChangeDates(date) {
        this.setState({date});
    }


    componentWillMount() {
        axios.get('/api/houses/' + this.props.match.params.idHouse)
            .then(house => this.setState({
                details: house.data
            }))

    }

    ToggleDiv = () => {
        this.setState({show: !this.state.show});
    };

    render() {
        console.log(this.props.location.state);
        const decreaseBtn = this.state.clicks === 1 ?
            <Button color="" className="incrementIcon" onClick={this.DecreaseItem} disabled><FaIcon
                icon={'fa fa-minus'}/></Button> :
            <Button color="" className="incrementIcon" onClick={this.DecreaseItem}><FaIcon
                icon={'fa fa-minus'}/></Button>;

        return (
            <div>
                <Container>
                    <h1>{this.state.details.map((v) => v.nombre)}</h1>
                    <Row className="house">
                        <Col lg="8">
                            <Panel>
                                <HouseCarrousel/>
                            </Panel>
                        </Col>
                        <Col>
                            <Panel className=" m-3">
                                <Row>
                                    <Col lg="3" sm="3" xs="4">
                                        <img src="/img/user.jpg" height="70px" className="userImg"></img>
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
                                    <Row>
                                        <Col xs="7" lg="12">
                                            <Stars rating={5}/>
                                        </Col>
                                    </Row>
                                    <Row className="justify-content-center">
                                        <h1 className="precioNoche">
                                            <strong>{this.state.details.map((v) => (v.precio))}{coin}</strong></h1>
                                    </Row>
                                    <Row className="justify-content-center">
                                        <h3><Translate type={'house'} string={'priceNight'}/></h3>
                                    </Row>
                                    <Row className="filtro">
                                        <DatePickerInicio onChange={this.handleChangeDates.bind(this)}
                                                          value={this.state.date}/>
                                    </Row>
                                    <Row>
                                        <FormGroup id={"guests"}>
                                            <Label><FaIcon icon={'fa fa-user'}/></Label>
                                            <div className="inputSearcher">
                                                {this.state.clicks} <input type="hidden" name="guests"
                                                                           value={this.state.clicks}/>
                                                <Translate string={this.state.clicks === 1 ? 'guest' : 'guests'}
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
                                        <Col lg="12" className="mt-4 desglose">
                                            <DesglosePrecioCasa nights={this.state.days}
                                                            price={this.state.details.map((v) => v.precio)}/>
                                        </Col>
                                    </Row>
                                    <Row id={'buttonRow'}>
                                        <LocaleContext.Consumer>
                                            {locale =>
                                                <LinkButton block={true} page={'/reservation'} pageParams={
                                                    {
                                                        idVivienda: this.props.match.params.idHouse,
                                                        checkIn: new Date('2012-01-01'),
                                                        checkOut: new Date('2012-01-04'),
                                                        pax: this.state.clicks,
                                                        price: this.state.priceNight,
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
                                          coordX={this.state.details.map((v) => v.coordX)}
                                          coordY={this.state.details.map((v) => v.coordY)}
                            />
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }
}

export default House;
