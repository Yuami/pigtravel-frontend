import React, {Component} from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import axios from "axios";
import PropTypes from "prop-types";
import moment from "moment";

export default class BlockedDays extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookings: [],
        };
    }

    componentWillMount() {
        axios({
            url: '/api/blocks/'+this.props.idHouse,
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

        return (
            <>
                <DayPicker
                    disabledDays={this.state.bookings.map(v => {
                            return {before: moment(v.checkOut).toDate(),after: moment(v.checkIn).toDate()}
                        }
                    )}
                    />

         </>
        );
    }
}

BlockedDays.propTypes = {
    idHouse: PropTypes.number.isRequired,
};