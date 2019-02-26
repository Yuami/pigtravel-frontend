import React, {Component} from 'react';
import DateRangePicker from "react-daterange-picker";
import "react-daterange-picker/dist/css/react-calendar.css";
import originalMoment from "moment";
import {extendMoment} from "moment-range";
const moment = extendMoment(originalMoment);
import {Label, Button, Popover, PopoverBody, InputGroup} from 'reactstrap';
import FormGroup from "reactstrap/es/FormGroup";
import FaIcon from "../general/FaIcon";

class DatePickerInicio extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            show: false
        };
    }
    onSelect = (value, states) => {
        this.props.onChange(value);
    };

    ToggleDiv = () => {
        this.setState({show: !this.state.show});
    };


    renderSelectionValue = () => {
        return (
            <div className="inputSearcher">
                {this.props.value.start.format("DD-MM")}
                <FaIcon icon={"fa fa-long-arrow-alt-right"}/>
                {this.props.value.end.format("DD-MM")}
            </div>
        );
    };


    render() {
        return (
            <FormGroup id="calendario">
                <Label><FaIcon icon={"fa fa-calendar"}/></Label>
                {this.renderSelectionValue()}
                <Popover placement="bottom" isOpen={this.state.show} target="calendario"
                         toggle={this.ToggleDiv} trigger="legacy">
                    <PopoverBody>
                        <DateRangePicker
                            value={this.props.value}
                            onSelect={this.props.onChange}
                            singleDateRange={true}
                            minimumDate={this.props.value.start.toDate()}
                        />
                    </PopoverBody>
                </Popover>

            </FormGroup>
        );
    }
}

export default DatePickerInicio;