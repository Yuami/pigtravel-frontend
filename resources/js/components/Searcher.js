import React, {Component} from 'react';
import Translate from "../lang/Translate";
import {Col, Label, Button, Popover, PopoverBody, InputGroup} from 'reactstrap';
import DatePickerInicio from "./specific/DatePickerInicio"

class Searcher extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            clicks: 0,
            show: false,
        };
    }
    IncrementItem = () => {
        this.setState({clicks: this.state.clicks + 1});
    }
    DecreaseItem = () => {
        this.setState({clicks: this.state.clicks - 1});
    }
    ToggleDiv = () => {
        this.setState({show: !this.state.show});
    }



    render() {
        return (

                <Col lg="8" sm="8" xs="10" className="buscador shadow">
                    <Col lg="4" sm="12" xs="12" className="filtro">
                        <InputGroup>
                            <Label>
                                <i className="fa fa-globe"></i>
                            </Label>
                            <div>
                                <input className="form-control" id="autocomplete" type="text"
                                       placeholder="¿Donde quieres ir?"
                                       name="location"></input>
                            </div>
                        </InputGroup>
                    </Col>
                    <Col lg="4" sm="5" xs="12" className="filtro">
                      <DatePickerInicio/>
                    </Col>
                    <Col lg="3" sm="5" xs="12" className="filtro">
                        <InputGroup>
                            <Label><i className="fa fa-user"></i></Label>
                            <Button id="huespedes" color="">
                                <h5>{this.state.clicks} <Translate string={'huespedes'} type={'searcher'}/></h5>
                            </Button>
                            <Popover placement="bottom" isOpen={this.state.show} target="huespedes"
                                     toggle={this.ToggleDiv} trigger="legacy">
                                <PopoverBody>
                                    <Button color="" className="incrementIcon" onClick={this.DecreaseItem}><i className="fa fa-minus"></i></Button>
                                    <Button color="" className="incrementIcon" onClick={this.IncrementItem}><i className="fa fa-plus"></i></Button>
                                </PopoverBody>
                            </Popover>

                        </InputGroup>
                    </Col>
                    <Col lg="1" sm="2" xs="12" className="input-group">
                            <Button color="primary" className="SearcherIcon"><i
                                className="fa fa-search fa-2x "></i></Button>

                    </Col>
                </Col>


        );
    }
}

export default Searcher;