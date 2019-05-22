import React, {Component} from 'react';
import {Col} from "reactstrap";
import PropTypes from 'prop-types';
import Translate from "../../../lang/Translate";

class TextBooking extends Component {
    render() {
        return (
            <Col>
                <div className="text-booking">
                    <p><i className={this.props.icon}/> {this.props.text}: {this.props.textData}</p>
                    <p><i className={this.props.icon2}/> {this.props.text2}: {this.props.textData2}</p>
                    {this.props.estado && <p><i className="fas fa-flag"/>
                        <Translate type={'bookings'} string={'estado'}/>: {this.props.estado}</p>}
                </div>
            </Col>
        );
    }
}

TextBooking.propType = {
    text: PropTypes.string.isRequired,
    text2: PropTypes.string.isRequired,
    icon: PropTypes.string,
    icon2: PropTypes.string,
    textData: PropTypes.string.isRequired,
    textData2: PropTypes.string.isRequired,
};
export default TextBooking;