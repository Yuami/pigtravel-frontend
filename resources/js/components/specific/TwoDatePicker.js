import React from 'react';
import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import {formatDate, parseDate} from 'react-day-picker/moment';
import axios from "axios";
import PropTypes from "prop-types";
import Col from "react-bootstrap/es/Col";
import FaIcon from "../general/FaIcon";


export default class TwoDatePicker extends React.Component {
    constructor(props) {
        super(props);
        this.handleFromChange = this.handleFromChange.bind(this);
        this.handleToChange = this.handleToChange.bind(this);
        this.state = {
            from: moment().toDate(),
            to: moment().add(1, 'days').toDate(),
            bookings: [],
        };
    }

    showFromMonth() {
        const {from, to} = this.state;
        if (!from) {
            return;
        }
        if (moment(to).diff(moment(from), 'months') < 2) {
            this.to.getDayPicker().showMonth(from);
        }
    }

    handleFromChange(from) {
        // Change the from date and focus the "to" input field
        this.setState({from});
    }

    handleToChange(to) {
        this.setState({to}, this.showFromMonth);
    }

    componentWillMount() {
        axios({
            url: '/api/blocks/' + this.props.idHouse,
            method: 'get'
        }).then((response) => {
            this.setState({
                bookings: response.data
            });
        }).catch((error) => {
            console.log(error, 'error books')
        });
    }

    render() {
        const {from, to} = this.state;
        const modifiers = {start: from, end: to};
        const books = this.state.bookings.map(v => {
                return {before: moment(v.checkOut).toDate(), after: moment(v.checkIn).toDate()}
            }
        );
        console.log(books);
        return (
            <div className="InputFromTo col-12 pt-5">
                <Col lg={5} xs={5}>
                    <DayPickerInput
                        value={from}
                        placeholder="From"
                        dayPickerProps={{
                            selectedDays: [from, {from, to}],
                            toMonth: to,

                            modifiers,
                            numberOfMonths: 1,
                            onDayClick: () => this.to.getInput().focus(),
                        }}
                        onDayChange={this.handleFromChange}
                    />
                </Col>
                <Col lg={1} xs={1}>
                    <FaIcon icon={"fa fa-long-arrow-alt-right"}/>
                </Col>
                <Col lg={5} xs={5}>
                    <DayPickerInput
                        ref={el => (this.to = el)}
                        value={to}
                        placeholder="To"
                        dayPickerProps={{
                            selectedDays: [from, {from, to}],

                            modifiers,
                            month: from,
                            fromMonth: from,
                            numberOfMonths: 1,
                        }}
                        onDayChange={this.handleToChange}
                    />
                </Col>
            </div>
        )
    }
}
TwoDatePicker.propTypes = {
    idHouse: PropTypes.number.isRequired,
};