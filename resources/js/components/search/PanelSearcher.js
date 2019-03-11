import React, {Component} from 'react';
import Panel from "../layout/Panel";
import originalMoment from "moment";
import {extendMoment} from "moment-range";
import AutocompleteCity from "../specific/AutocompleteCity";
import DatePickerInicio from "../specific/DatePickerInicio";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FaIcon from "../general/FaIcon";
import {Button, Label, Popover, PopoverBody} from "reactstrap";
import Translate from "../../lang/Translate";
import {Link, withRouter} from "react-router-dom";
import axios from "axios";

const moment = extendMoment(originalMoment);

class PanelSearcher extends Component {

    constructor(props) {
        super(props);
        if (this.props.location.state.place === undefined) {
            this.props.history.push(`/`);
        }

        let guests = null;
        let start = null;
        let end = null;
        if ((this.props.location && this.props.location.state)) {
            const state = this.props.location.state;
            guests = state.guests;
            start = state.start;
            end = state.end;
        } else {
            window.location.replace("http://www.pigtravel.top");
        }

        this.state = {
            place: this.props.location.state.place || null,
            guests,
            date: this.formatDate({start, end}),
            show: false,
            first: true
        };
    }

    formatDate(props) {
        let date = moment.range(props.start, props.end);
        if (props.start === null || props.end === null) {
            date = moment.range(moment().format('YYYY-MM-DD'), moment().add(1, 'week').format('YYYY-MM-DD'));
        }
        return date;
    }

    componentDidMount() {
        this.getPlace();
    }

    getPlace() {
        if (!this.state.first) return;
        const place = this.state.place;

        if (place > 3000) {
            axios.get(`/api/cities/${place}`)
                .then(res => res.data)
                .then(city =>
                    this.setState({place: {value: city.data.id, label: city.data.name}})
                );
        } else {
            axios.get(`/api/regions/${place}`)
                .then(res => res.data)
                .then(region =>
                    this.setState({place: {label: region.name, value: region.id}})
                );
        }
    }

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
        const guests = this.state.guests - 1 <= 0 ? 1 : this.state.guests - 1;

        this.setState({guests})
    }

    toggleDiv() {
        this.setState({show: !this.state.show});
    }

    render() {
        const datePicker = (
            <div className="mt-3 mt-md-2">
                <DatePickerInicio onChange={this.handleChangeDate.bind(this)}
                                  value={this.state.date}
                                  notIcon
                                  list
                />
            </div>
        );

        const guests = (
            <div id={"guests"}>
                <div className="mt-3 mt-md-2" style={{cursor: "pointer", fontSize: '18px'}}>
                    <span className="text-nowrap">
                    {this.state.guests} <input type="hidden" name="guests" value={this.state.guests}/>
                    <Translate string={this.state.guests === 1 ? 'guest' : 'guests'} type={'searcher'}/></span>
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
                <Button color="primary" className="mt-3 mt-md-2" block>
                    <FaIcon icon='fa fa-search' size="fa-2x"/>
                    <span className="d-md-none" style={{fontSize: "18px"}}> <Translate type="searcher" string="search"/></span>
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

}

export default withRouter(PanelSearcher);