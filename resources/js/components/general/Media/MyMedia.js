import React, {Component} from 'react';
import InstagramIcon from "./InstagramIcon";
import FacebookIcon from "./FacebookIcon";
import PropTypes from "prop-types";

class MyMedia extends Component {
    render() {
        const size = this.props.size ? this.props.size : 'fa-2x';
        return (
                <div>
                    <InstagramIcon to={'https://www.instagram.com/pigtravelbookings'} size={size}
                                   className="mx-3 footer-link"/>
                    <FacebookIcon to={'https://www.facebook.com/PigTravel-1034963623342489'} size={size}
                                  className="mx-3 footer-link"/>
                </div>
        );
    }
}

MyMedia.propTypes = {
    size: PropTypes.string,
};

export default MyMedia;