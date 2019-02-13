import React, {Component} from 'react';
import DateRangePicker from "react-daterange-picker";
import "react-daterange-picker/dist/css/react-calendar.css";
import originalMoment from "moment";
import {extendMoment} from "moment-range";
const moment = extendMoment(originalMoment);
import {Label, Button, Popover, PopoverBody, InputGroup} from 'reactstrap';
import Translate from "../../lang/Translate";
import FormGroup from "reactstrap/es/FormGroup";
import Input from "reactstrap/es/Input";

class DatePickerInicio extends Component {
    constructor(props, context) {
        super(props, context);
        const fromDate = moment();
        const toDate = moment().add(1, 'days');
        this.state = {
            fromD: fromDate,
            value: moment.range(fromDate, toDate),
            show: false
        };
    }

    onSelect = (value, states) => {
        this.setState({value, states});
    };

    ToggleDiv = () => {
        this.setState({show: !this.state.show});
    };


    renderSelectionValue = () => {
        return (
            <div className="inputSearcher">
                {this.state.value.start.format("DD-MM")}
                {" "}<i className="fa fa-long-arrow-alt-right"></i>{" "}
                {this.state.value.end.format("DD-MM")}
                <input type="hidden" name="start" value={this.state.value.start.format("DD-MM")}/>
                <input type="hidden" name="end" value={this.state.value.end.format("DD-MM")}/>
            </div>
        );
    };


    render() {
        return (
            <FormGroup id="calendario">
                <Label><i className="fa fa-calendar"></i></Label>
                {this.renderSelectionValue()}
                <Popover placement="bottom" isOpen={this.state.show} target="calendario"
                         toggle={this.ToggleDiv} trigger="legacy">
                    <PopoverBody>
                        <DateRangePicker
                            value={this.state.value}
                            onSelect={this.onSelect}
                            singleDateRange={true}
                            minimumDate={this.state.fromD}
                        />
                    </PopoverBody>
                </Popover>

            </FormGroup>
        );
    }
}

export default DatePickerInicio;