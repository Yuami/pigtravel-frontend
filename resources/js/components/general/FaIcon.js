import React, {Component} from 'react';
import PropTypes from 'prop-types';

class FaIcon extends Component {
    render() {
        let className = this.props.icon;
        className += this.props.size ? ' ' + this.props.size : '';
        className += ' ' + this.props.className;
        className += this.props.primary ? ' text-primary' : '';
        return (<i className={className}/>);
    }
}

FaIcon.propTypes = {
    icon: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['', 'fa-xs', 'fa-sm', 'fa-lg', 'fa-2x', 'fa-3x', 'fa-5x', 'fa-7x', 'fa-10x']),
    className: PropTypes.string,
    primary: PropTypes.bool,
};

export default FaIcon;