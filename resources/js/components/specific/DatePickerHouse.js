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
            showHouse: false
        };
    }

    ToggleDivHouse = () => {
        this.setState({showHouse: !this.state.showHouse});
    };

    render() {
        const selectedDatesHouse = (
            <div className="inputSearcher" style={{cursor: "pointer"}}>
                {this.props.value.start.format("DD-MM")}
                <FaIcon icon={"fa fa-long-arrow-alt-right"}/>
                {this.props.value.end.format("DD-MM")}
            </div>
        );

        const listSelectedDatesHouse = (
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
            <FormGroup id="calendarioHouse">
                {this.props.notIcon ? null : <Label><FaIcon icon={"fa fa-calendar"}/></Label>}
                {this.props.list ? listSelectedDatesHouse : selectedDatesHouse}
                <Popover placement="bottom" isOpen={this.state.showHouse} target="calendarioHouse"
                         toggle={this.ToggleDivHouse} trigger="legacy">
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