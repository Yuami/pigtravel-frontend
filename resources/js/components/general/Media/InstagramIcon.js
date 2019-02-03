import React, {Component} from 'react';
import PropTypes from "prop-types"
import MediaIcon from "./MediaIcon";

class InstagramIcon extends Component {
    render() {
        return (
            <MediaIcon to={this.props.to} icon={'fab fa-instagram'} size={this.props.size} className={this.props.className}/>
        );
    }
}

InstagramIcon.propTypes = {
    to: PropTypes.string.isRequired,
    size: PropTypes.string,
};

export default InstagramIcon;