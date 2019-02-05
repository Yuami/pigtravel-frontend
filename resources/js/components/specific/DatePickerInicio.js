import React, {Component} from 'react';
import DateRangePicker from "react-daterange-picker";
import "react-daterange-picker/dist/css/react-calendar.css";
import originalMoment from "moment";
import {extendMoment} from "moment-range";
const moment = extendMoment(originalMoment);
import {Label, Button, Popover, PopoverBody, InputGroup} from 'reactstrap';
import Translate from "../../lang/Translate";

class DatePickerInicio extends Component {
    constructor(props, context) {
        super(props, context);
        const today = moment();
        this.state = {
            value: moment.range(today.clone().subtract(7, "days"), today.clone()),
            show: false
        };
    }

    onSelect = (value, states) => {
        this.setState({value, states});
    };

    ToggleDiv = () => {
        this.setState({show: !this.state.show});
    }


    renderSelectionValue = () => {
        return (
            <div id="fechas">
                <Translate type={'searcher'} string={'checkin'}/>
                {this.state.value.start.format("DD-MM")}
                {" "}<i className="fa fa-long-arrow-alt-right"></i>{" "}
                <Translate type={'searcher'} string={'checkout'}/>
                {this.state.value.end.format("DD-MM")}
            </div>
        );
    };


    render() {
        return (

            <InputGroup>
                <Label><i className="fa fa-calendar"></i></Label>
                <div id="calendario" color="">
                    <h5>{this.renderSelectionValue()}</h5>
                </div>
                <Popover placement="bottom" isOpen={this.state.show} target="calendario"
                         toggle={this.ToggleDiv} trigger="legacy">
                    <PopoverBody>
                        <DateRangePicker
                            value={this.state.value}
                            onSelect={this.onSelect}
                            singleDateRange={true}
                        />
                    </PopoverBody>
                </Popover>

            </InputGroup>
        );
    }
}

export default DatePickerInicio;