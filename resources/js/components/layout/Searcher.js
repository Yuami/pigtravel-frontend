import React, {Component} from 'react';
import Translate from "../../lang/Translate";
import {Col, Label, Button, Popover, PopoverBody, InputGroup} from 'reactstrap';
import DatePickerInicio from "../specific/DatePickerInicio"
import FaIcon from "../general/FaIcon";
import {LocaleContext} from "../../LocaleContext";
import {translate} from "../../helpers";

class Searcher extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            clicks: 1,
            show: false,
        };
    }

    IncrementItem = () => {
        this.setState({clicks: this.state.clicks + 1});
    };
    
    DecreaseItem = () => {
        const clicks = this.state.clicks - 1 < 1 ? 1 : this.state.clicks -1;
        this.setState({clicks});
    };
    
    ToggleDiv = () => {
        this.setState({show: !this.state.show});
    };


    render() {
        return (
            <Col lg="8" sm="8" xs="10" className="buscador shadow">
                <Col lg="4" sm="12" xs="12" className="filtro">
                    <InputGroup>
                        <Label>
                            <FaIcon icon={'fa fa-globe'}/>
                        </Label>
                        <div>
                            <LocaleContext.Consumer>
                                {locale => <input className="form-control" id="autocomplete" type="text"
                                                  placeholder={translate(locale,'city','searcher')}
                                                  name="location"></input>}
                            </LocaleContext.Consumer>
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
                            <h5>{this.state.clicks} <Translate string={'guests'} type={'searcher'}/></h5>
                        </Button>
                        
                        <Popover placement="bottom" isOpen={this.state.show} target="huespedes"
                                 toggle={this.ToggleDiv} trigger="legacy">
                            <PopoverBody>
                                <Button color="" className="incrementIcon" onClick={this.DecreaseItem}><FaIcon icon={'fa fa-minus'}/></Button>
                                <Button color="" className="incrementIcon" onClick={this.IncrementItem}><FaIcon icon={'fa fa-plus'}/></Button>
                            </PopoverBody>
                        </Popover>

                    </InputGroup>
                </Col>
                <Col lg="1" sm="2" xs="12" className="input-group">
                    <Button color="primary" className="SearcherIcon"><FaIcon icon={'fa fa-search'} size={'fa-2x'}/></Button>
                </Col>
            </Col>
        );
    }
}

export default Searcher;