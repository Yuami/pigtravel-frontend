import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Translate from "../../../lang/Translate";
import {Col} from "reactstrap";
import PropTypes from 'prop-types';


class BtnBooking extends Component {
    render() {
        return (
            <Col>
                <Link to={'/bookings/' + this.props.bookingID} className="btn btn-primary btn-book">
                    <Translate type={'bookings'} string={'button'}/>
                </Link>
            </Col>
        );
    }
}

BtnBooking.propsType = {
    bookingID: PropTypes.string.isRequired
};
export default BtnBooking;