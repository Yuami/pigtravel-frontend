import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Accordion extends Component {
    render() {
        const {children, id} = this.props;
        return (
            <div className="accordion" id={id}>
                {children}
            </div>
        );
    }

    static propTypes = {
        id: PropTypes.string.isRequired
    }
}

export default Accordion;