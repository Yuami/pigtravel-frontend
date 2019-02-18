import React, {Component} from 'react';
import Translate from "../../lang/Translate";
import {Col, Label, Button, Popover, PopoverBody, InputGroup} from 'reactstrap';
import DatePickerInicio from "../specific/DatePickerInicio"
import FaIcon from "../general/FaIcon";
import {LocaleContext} from "../../LocaleContext";
import {translate} from "../../helpers";
import AutocompleteCity from "../specific/AutocompleteCity";
import FormButton from "../general/Forms/FormButton";
import Form from "reactstrap/es/Form";
import FormGroup from "reactstrap/es/FormGroup";
import originalMoment from "moment";
import {extendMoment} from "moment-range";
import Link from "react-router-dom/es/Link";

const moment = extendMoment(originalMoment);

class Searcher extends Component {
    constructor(props, context) {
        super(props, context);

        const fromDate = moment().add(1, "days");
        const toDate = fromDate.clone().add(7, "days");
        this.state = {
            clicks: 1,
            show: false,
            date: moment.range(fromDate, toDate),
            place: undefined
        };

    }

    IncrementItem = () => {
        this.setState({clicks: this.state.clicks + 1});
    };

    DecreaseItem = () => {
        const clicks = this.state.clicks - 1 < 1 ? 1 : this.state.clicks - 1;
        this.setState({clicks});
    };

    ToggleDiv = () => {
        this.setState({show: !this.state.show});
    };

    handleChangeDates(date) {
        this.setState({date});
    }

    handleChangePlace(place) {
        this.setState({
            place
        });
    }


    render() {
        const decreaseBtn = this.state.clicks === 1 ?
            <Button color="" className="incrementIcon" onClick={this.DecreaseItem} disabled><FaIcon
                icon={'fa fa-minus'}/></Button> :
            <Button color="" className="incrementIcon" onClick={this.DecreaseItem}><FaIcon
                icon={'fa fa-minus'}/></Button>;

        return (
            <Col md="10" lg="8" sm="8" xs="10" className="buscador shadow">
                <Col md="6" lg="5" sm="12" xs="12" className="filtro">
                    <FormGroup>
                        <Label>
                            <FaIcon icon={'fa fa-globe'}/>
                        </Label>
                        <div id="location">
                            <AutocompleteCity change={this.handleChangePlace.bind(this)} place={this.state.place}/>
                        </div>
                    </FormGroup>
                </Col>
                <Col md="6" lg="4" sm="12" xs="12" className="filtro">
                    <DatePickerInicio onChange={this.handleChangeDates.bind(this)} value={this.state.date}/>
                </Col>
                <Col md="6" lg="2" sm="12" xs="12" className="filtro">
                    <FormGroup id={"guests"}>
                        <Label><FaIcon icon={'fa fa-user'}/></Label>
                        <div className="inputSearcher">
                            {this.state.clicks} <input type="hidden" name="guests" value={this.state.clicks}/>
                            <Translate string={this.state.clicks === 1 ? 'guest' : 'guests'} type={'searcher'}/>
                        </div>
                        <Popover placement="bottom" isOpen={this.state.show} target="guests"
                                 toggle={this.ToggleDiv} trigger="legacy">
                            <PopoverBody>
                                {decreaseBtn}
                                <Button color="" className="incrementIcon" onClick={this.IncrementItem}>
                                    <FaIcon icon={'fa fa-plus'}/>
                                </Button>
                            </PopoverBody>
                        </Popover>
                    </FormGroup>
                </Col>
                <Col md="6" lg="1" sm="12" xs="12" className="form-group">
                    <Link to={"/search"}>
                        <Button color="primary" className="SearcherIcon">
                            <FaIcon icon={'fa fa-search'} size={'fa-2x'}/>
                        </Button>
                    </Link>
                </Col>
            </Col>
        );
    }
}

export default Searcher;