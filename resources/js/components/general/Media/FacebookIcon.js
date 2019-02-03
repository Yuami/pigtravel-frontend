import React, {Component} from 'react';
import PropTypes from "prop-types"
import MediaIcon from "./MediaIcon";

class FacebookIcon extends Component {
    render() {
        return (
            <MediaIcon to={this.props.to} icon={'fab fa-facebook'} size={this.props.size} className={this.props.className}/>
        );
    }
}

FacebookIcon.propTypes = {
    to: PropTypes.string.isRequired,
    size: PropTypes.string
};

export default FacebookIcon;