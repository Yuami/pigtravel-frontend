import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {DateRange} from 'react-date-range';
import DateRangePicker from "react-daterange-picker";
import "react-daterange-picker/dist/css/react-calendar.css";
import originalMoment from "moment";
import {extendMoment} from "moment-range";
import Translate from "../lang/Translate";

const moment = extendMoment(originalMoment);

class Searcher extends Component {
    constructor(props, context) {
        super(props, context);

        const today = moment();

        this.state = {
            isOpen: false,
            value: moment.range(today.clone().subtract(7, "days"), today.clone()),
            clicks: 0,
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
                {this.state.value.start.format("DD-MM")}
                {" "}<i className="fa fa-long-arrow-alt-right"></i>{" "}
                {this.state.value.end.format("DD-MM")}
            </div>
        );
    };

    IncrementItem = () => {
        this.setState({clicks: this.state.clicks + 1});
    }
    DecreaseItem = () => {
        this.setState({clicks: this.state.clicks - 1});
    }
    ToggleDiv = () => {
        this.setState({show: !this.state.show});
    }
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
                                <i className="fa fa-globe"></i>
                            </label>
                            <div>
                                <input className="form-control" id="autocomplete" type="text"
                                       placeholder="¿Donde quieres ir?"
                                       name="location"></input>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <button className="btn inputContainer" onClick={this.onToggle}>
                                <label><i className="fa fa-calendar"></i></label>
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
                                <label><i className="fa fa-user"></i></label>
                                <h5 onClick={this.ToggleDiv}> {this.state.clicks} <Translate string={'huespedes'} type={'searcher'}/></h5>
                                {this.state.show ?
                                    <div>
                                        <button className="incrementIcon" onClick={this.DecreaseItem}>-</button>
                                        <button className="incrementIcon" onClick={this.IncrementItem}>+</button>
                                    </div>
                                    : ''}
                            </button>
                        </div>

                        <div className="inputContainer col-lg-1">
                            <button className="btn SearcherIcon"><i className="fa fa-search fa-2x "></i></button>
                        </div>
                    </div>
                </div>

        );
    }
}

export default Searcher;