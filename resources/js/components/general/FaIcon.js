import React, {Component} from 'react';
import PropTypes from 'prop-types';

class FaIcon extends Component {
    render() {
        let className = this.props.icon;
        className += this.props.size ? ' ' + this.props.size : '';
        className += ' ' + this.props.className;
        return (<i className={className}></i>);
    }
}

FaIcon.propTypes = {
    icon: PropTypes.string.isRequired,
    size: PropTypes.string,
    className: PropTypes.string
};

export default FaIcon;