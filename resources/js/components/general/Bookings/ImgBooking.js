import React, {Component} from 'react';
import {Col} from "reactstrap";
import PropTypes from 'prop-types';

class ImgBooking extends Component {
    render() {
        return (
            <Col md={3}>
                <img src={this.props.url} height={100} width={150} alt={this.props.alt}/>
            </Col>
        );
    }
}


ImgBooking.propTypes = {
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
};
export default ImgBooking;