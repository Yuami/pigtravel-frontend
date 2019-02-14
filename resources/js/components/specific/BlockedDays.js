import React,{Component} from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import axios from "axios";
import PropTypes from "prop-types";

export default class BlockedDays extends Component{
    constructor(props) {
        super(props);
        this.state = {
            bookings: [],
        };
    }

    getBookings() {
        axios({
            url: '/api/book/'+this.props.idHouse,
            method: 'get'
        }).then((response) => {
            this.setState({
                bookings: response.data
            });
        }).catch((error) => {
            console.log(error, 'error books')
        });
    }

    componentDidMount() {
        this.getBookings();
    }
    render() {

        return (
            <DayPicker
                initialMonth={new Date(2019, 3,5)}
                numberOfMonths={2}
                disabledDays={[
                    {
                        after: new Date(2019, 3, 20),
                        before: new Date(2019, 3, 25),
                    },
                ]}
            />
        );
    }
}

BlockedDays.propTypes = {
   idHouse: PropTypes.number.isRequired,
};