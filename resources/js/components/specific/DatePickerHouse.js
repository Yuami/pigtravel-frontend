import React, {Component} from 'react';
import DateRangePicker from "react-daterange-picker";
import "react-daterange-picker/dist/css/react-calendar.css";
import originalMoment from "moment";
import {extendMoment} from "moment-range";

const moment = extendMoment(originalMoment);
import {Label, Button, Popover, PopoverBody, InputGroup} from 'reactstrap';
import FormGroup from "reactstrap/es/FormGroup";
import FaIcon from "../general/FaIcon";

class DatePickerHouse extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            show: false
        };
    }

    ToggleDiv = () => {
        this.setState({show: !this.state.show});
    };

    render() {
        const selectedDates = (
            <div className="inputSearcher" style={{cursor: "pointer"}}>
                {this.props.value.start.format("DD-MM")}
                <FaIcon icon={"fa fa-long-arrow-alt-right"}/>
                {this.props.value.end.format("DD-MM")}
            </div>
        );

        const listSelectedDates = (
            <div style={{
                cursor: "pointer",
                fontSize: "18px"
            }}>
                {this.props.value.start.format("DD-MM")}
                <FaIcon icon={"fa fa-long-arrow-alt-right"}/>
                {this.props.value.end.format("DD-MM")}
            </div>
        );

        return (
            <FormGroup id="calendario">
                {this.props.notIcon ? null : <Label><FaIcon icon={"fa fa-calendar"}/></Label>}
                {this.props.list ? listSelectedDates : selectedDates}
                <Popover placement="bottom" isOpen={this.state.show} target="calendario"
                         toggle={this.ToggleDiv} trigger="legacy">
                    <PopoverBody>
                        <DateRangePicker
                            value={this.props.value}
                            onSelect={this.props.onChange}
                            singleDateRange={true}
                            minimumDate={moment().toDate()}

                        />
                    </PopoverBody>
                </Popover>

            </FormGroup>
        );
    }
}

export default DatePickerHouse;