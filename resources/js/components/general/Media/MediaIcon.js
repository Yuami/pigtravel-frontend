import React, {Component} from 'react';
import PropTypes from "prop-types"
import FaIcon from "../FaIcon";

class MediaIcon extends Component {
    render() {
        return (
            <a href={this.props.to} target="_blank">
                <FaIcon icon={this.props.icon} size={this.props.size} className={this.props.className}/>
            </a>
        );
    }
}

MediaIcon.propTypes = {
    to: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    size: PropTypes.string,
};

export default MediaIcon;