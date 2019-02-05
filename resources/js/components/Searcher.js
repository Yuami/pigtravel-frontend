import React, {Component} from 'react';
import {DateRange} from 'react-date-range';
import DateRangePicker from "react-daterange-picker";
import "react-daterange-picker/dist/css/react-calendar.css";
import originalMoment from "moment";
import {extendMoment} from "moment-range";
import Translate from "../lang/Translate";
import FaIcon from "./general/FaIcon";
import {LocaleContext} from '../LocaleContext.js';
import {translate} from "../helpers.js";

const moment = extendMoment(originalMoment);

class Searcher extends Component {
    constructor(props) {
        super(props);

        const today = moment();

        this.state = {
            isOpen: false,
            value: moment.range(today.clone().subtract(7, "days"), today.clone()),
            guests: 1,
            show: false,
        };
    }

    onSelect = (value, states) => {
        this.setState({value, states});
    };

    onToggle = () => {
        this.setState({isOpen: !this.state.isOpen});
    };

    renderSelectionValue = () => {
        return (
            <div>
                <Translate type={'searcher'} string={'checkin'}/>
                {this.state.value.start.format("DD-MM")}
                {" "}<FaIcon icon={'fa fa-long-arrow-alt-right'}/>{" "}
                <Translate type={'searcher'} string={'checkout'}/>
                {this.state.value.end.format("DD-MM")}
            </div>
        );
    };

    IncrementItem = () => {
        this.setState({guests: this.state.guests + 1});
    };

    DecreaseItem = () => {
        const guests = this.state.guests - 1 < 1 ? 1 : this.state.guests - 1;
        this.setState({guests});
    };

    ToggleDiv = () => {
        this.setState({show: !this.state.show});
    };

    onToggle = () => {
        this.setState({isOpen: !this.state.isOpen});
    };


    render() {
        return (
            <div className="jumbotron_cont" id="searcher">
                <div className="buscador col-lg-8">
                    <div className=" col-lg-4">
                        <div className="inputContainer">
                            <label>
                                <FaIcon icon={'fa fa-globe'}/>
                            </label>
                            <div>
                                <LocaleContext.Consumer>
                                    {locale => <input className="form-control" id="autocomplete" type="text"
                                           placeholder={translate(locale, 'city', 'searcher')}
                                           name="location"></input>}
                                </LocaleContext.Consumer>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <button className="btn inputContainer" onClick={this.onToggle}>
                            <label><FaIcon icon={'fa fa-calendar'}/></label>
                            <h5>{this.renderSelectionValue()}</h5>
                        </button>
                        {this.state.isOpen && (
                            <DateRangePicker
                                value={this.state.value}
                                onSelect={this.onSelect}
                                singleDateRange={true}
                            />
                        )}
                    </div>
                    <div className="col-lg-3">
                        <button className="btn inputContainer">
                            <label><FaIcon icon={'fa fa-user'}/></label>
                            <h5 onClick={this.ToggleDiv}> {this.state.guests} <Translate string={'guests'}
                                                                                         type={'searcher'}/></h5>
                            {this.state.show ?
                                <div>
                                    <button className="incrementIcon" onClick={this.DecreaseItem}>-</button>
                                    <button className="incrementIcon" onClick={this.IncrementItem}>+</button>
                                </div>
                                : ''}
                        </button>
                    </div>

                    <div className="inputContainer col-lg-1">
                        <button className="btn SearcherIcon"><FaIcon icon={'fa fa-search'} size={'fa-2x'}/></button>
                    </div>
                </div>
            </div>

        );
    }
}

export default Searcher;