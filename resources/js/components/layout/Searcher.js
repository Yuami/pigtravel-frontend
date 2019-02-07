import React, {Component} from 'react';
import Translate from "../../lang/Translate";
import {Col, Label, Button, Popover, PopoverBody, InputGroup} from 'reactstrap';
import DatePickerInicio from "../specific/DatePickerInicio"
import FaIcon from "../general/FaIcon";
import {LocaleContext} from "../../LocaleContext";
import {translate} from "../../helpers";
import AutocompleteCity from "../specific/AutocompleteCity";

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
        const decreaseBtn = this.state.clicks === 1 ?
            <Button color="" className="incrementIcon" onClick={this.DecreaseItem} disabled><FaIcon icon={'fa fa-minus'}/></Button> :
            <Button color="" className="incrementIcon" onClick={this.DecreaseItem}><FaIcon icon={'fa fa-minus'}/></Button>;

        return (
            <Col md="10" lg="8" sm="8" xs="10"  className="buscador shadow">
                <Col md="6" lg="4" sm="12"  xs="12" className="filtro">
                    <InputGroup>
                        <Label>
                            <FaIcon icon={'fa fa-globe'}/>
                        </Label>
                        <div id="location">
                            <AutocompleteCity/>
                        </div>
                    </InputGroup>
                </Col>
                <Col md="6" lg="4" sm="12" xs="12"  className="filtro">
                    <DatePickerInicio/>
                </Col>
                <Col md="6" lg="3" sm="12" xs="12" className="filtro">
                    <InputGroup>
                        <Label><FaIcon icon={'fa fa-user'}/></Label>
                        <div id="calendario">
                        <Button id="guests" color="" className="inputSearcher">
                            {this.state.clicks} <Translate string={'guests'} type={'searcher'}/>
                        </Button>
                        </div>
                        <Popover placement="bottom" isOpen={this.state.show} target="guests"
                                 toggle={this.ToggleDiv} >
                            <PopoverBody>
                                {decreaseBtn}
                                <Button color="" className="incrementIcon" onClick={this.IncrementItem}><FaIcon icon={'fa fa-plus'}/></Button>
                            </PopoverBody>
                        </Popover>

                    </InputGroup>
                </Col>
                <Col md="6" lg="1" sm="12" xs="12" className="input-group">
                    <Button color="primary" className="SearcherIcon"><FaIcon icon={'fa fa-search'} size={'fa-2x'}/></Button>
                </Col>
            </Col>
        );
    }
}

export default Searcher;