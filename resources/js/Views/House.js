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
import SideBarHouse from "../components/specific/SideBarHouse";
import Form from "reactstrap/es/Form";

class House extends Component {

    constructor(props) {
        super(props);
        this.state = {
            details: [],
            clicks: 1,
            show: false,
            priceNight: 55,
        };
    }
    IncrementItem = () => {
        this.setState({clicks: this.state.clicks + 1});
    };

    DecreaseItem = () => {
        const clicks = this.state.clicks - 1 < 1 ? 1 : this.state.clicks - 1;
        this.setState({clicks});
    };
    componentWillMount() {

        axios.get('/api/houses/'+this.props.match.params.idHouse)
            .then((res) => this.setState({details: res.data}));
    }
    ToggleDiv = () => {
        this.setState({show: !this.state.show});
    };
    render() {
        const decreaseBtn = this.state.clicks === 1 ?
            <Button color="" className="incrementIcon" onClick={this.DecreaseItem} disabled><FaIcon
                icon={'fa fa-minus'}/></Button> :
            <Button color="" className="incrementIcon" onClick={this.DecreaseItem}><FaIcon
                icon={'fa fa-minus'}/></Button>;

        return (
            <div>
                <Container>
                    <h1>{this.state.details.map((v)=> v.nombre)}</h1>
                    <Row className="house">
                        <Col lg="8" className="shadow">
                            <HouseCarrousel/>
                        </Col>
                        <Col>
                            <Row className="shadow m-3">
                                <Col lg="3" sm="2" xs="3">
                                    <img src="/img/user.jpg" height="70px" className="userImg"></img>
                                </Col>
                                <Col sm="8" xs="8" className="my-auto">
                                    {this.state.details.map((v) => (
                                        <h3>{v.vendedor} {v.apellido1}</h3>
                                    ))}
                                </Col>
                            </Row>

                            <Row className="shadow m-3">
                                <Col lg="12">
                                    <Row>
                                        <Col xs="7" lg="12">
                                            <div className={'pull-right'}>{<Stars rating={'5'}/>}</div>
                                        </Col>
                                    </Row>
                                    <Row className="justify-content-center">
                                        <h1 className="precioNoche"><strong>{this.state.details.map((v) => (v.precio))}{coin}</strong></h1>
                                    </Row>
                                    <Row className="justify-content-center">
                                        <h3><Translate type={'house'} string={'priceNight'}/></h3>
                                    </Row>
                                 <Form action="/book">
                                    <Row className="filtro">
                                        <DatePickerInicio/>
                                    </Row>
                                    <Row>
                                        <FormGroup id={"guests"}>
                                            <Label><FaIcon icon={'fa fa-user'}/></Label>
                                            <div className="inputSearcher">
                                                {this.state.clicks} <input type="hidden" name="guests" value={this.state.clicks}/>
                                                <Translate string={this.state.clicks === 1 ? 'guest' : 'guests'} type={'searcher'}/>
                                            </div>
                                            <Popover placement="bottom" isOpen={this.state.show} target="guests"
                                                     toggle={this.ToggleDiv}  trigger="legacy">
                                                <PopoverBody>
                                                    {decreaseBtn}
                                                    <Button color="" className="incrementIcon" onClick={this.IncrementItem}><FaIcon icon={'fa fa-plus'}/></Button>
                                                </PopoverBody>
                                            </Popover>
                                        </FormGroup>
                                    </Row>
                                    <Row>
                                        <button type="submit" className="btn btn-primary btn-block"><Translate type={'house'} string={'book'}/></button>
                                    </Row>
                                 </Form>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="12">
                            <SideBarHouse description={this.state.details.map((v) => (v.descripcion))}
                                          houseID={this.state.details.map((v)=> v.id)}
                                          coordX={this.state.details.map((v)=> v.coordX)}
                                          coordY={this.state.details.map((v)=> v.coordY)}
                            />
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }
}
export default House;
