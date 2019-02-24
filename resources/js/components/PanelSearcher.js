import React, {Component} from 'react';
import Panel from "./layout/Panel";
import originalMoment from "moment";
import {extendMoment} from "moment-range";
import AutocompleteCity from "./specific/AutocompleteCity";
import DatePickerInicio from "./specific/DatePickerInicio";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FaIcon from "./general/FaIcon";
import {Button, Label, Popover, PopoverBody} from "reactstrap";
import Translate from "../lang/Translate";
import FormGroup from "@material-ui/core/FormGroup";
import {Link} from "react-router-dom";

const moment = extendMoment(originalMoment);

class PanelSearcher extends Component {

    state = {
        place: this.props.place || null,
        guests: this.props.guests || 1,
        date: moment.range(this.props.start || moment.format('YYYY-MM-DD'), this.props.end || moment.add(1, 'week').format('YYYY-MM-DD')),
        show: false
    };

    handleChangePlace(place) {
        this.setState({place});
    }

    handleChangeDate(date) {
        this.setState({date});
    }

    increaseGuests() {
        this.setState({
            guests: ++this.state.guests
        });
    }

    decreaseGuests() {
        const guests = this.state.guests - 1 <= 0 ? 1 : this.state.guests

        this.setState({
            guests
        })
    }

    toggleDiv() {
        this.setState({show: !this.state.show});
    }

    render() {
        const datePicker = (
            <div className="mt-2">
                <DatePickerInicio onChange={this.handleChangeDate.bind(this)}
                                  value={this.state.date}
                                  notIcon
                                  list/>
            </div>
        );

        const guests = (
            <div id={"guests"}>
                <div className="mt-2" style={{fontSize: "18px", cursor: "pointer"}}>
                    {this.state.guests} <input type="hidden" name="guests" value={this.state.guests}/>
                    <Translate string={this.state.guests === 1 ? 'guest' : 'guests'} type={'searcher'}/>
                </div>
                <Popover placement="bottom" isOpen={this.state.show} target="guests"
                         toggle={this.toggleDiv.bind(this)} trigger="legacy">
                    <PopoverBody>
                        <Button color="" className="incrementIcon" onClick={this.decreaseGuests.bind(this)}
                                disabled={this.state.guests === 1}>
                            <FaIcon icon={'fa fa-minus'}/>
                        </Button>
                        <Button color="" className="incrementIcon" onClick={this.increaseGuests.bind(this)}>
                            <FaIcon icon={'fa fa-plus'}/>
                        </Button>
                    </PopoverBody>
                </Popover>
            </div>
        );

        const {start, end} = this.state.date;

        const linkProps = {
            pathname: "/search",
            state: {
                guests: this.state.guests,
                place: this.state.place === null ? undefined : this.state.place.value,
                start: start.format('YYYY-MM-DD'),
                end: end.format('YYYY-MM-DD')
            }
        };

        const submit = (
            <Link to={linkProps}>
                <Button color="primary" className="mt-2" block>
                    <FaIcon icon='fa fa-search' size="fa-2x"/>
                    <span className={"d-md-none"} style={{fontSize: "18px"}}> <Translate type="searcher"
                                                                                         string="search"/></span>
                </Button>
            </Link>
        );

        return (
            <Panel>
                <Row>
                    <Col xs="12" sm="12" lg="4">
                        <AutocompleteCity change={this.handleChangePlace.bind(this)} place={this.state.place}/>
                    </Col>
                    <Col xs="12" sm="6" lg="4">
                        {datePicker}
                    </Col>
                    <Col xs="12" sm="6" lg="2">
                        {guests}
                    </Col>
                    <Col xs="12" sm="12" lg="2">
                        {submit}
                    </Col>
                </Row>
            </Panel>
        );
    }

    static propTypes = {}
}

export default PanelSearcher;