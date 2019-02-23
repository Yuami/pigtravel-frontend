import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Panel extends Component {
    constructor(props) {
        super(props);

    }

    render() {
            const header = this.props.header ?
                <div className="panel-heading">{this.props.header}</div> : null;

        return (
                <div id={this.props.id} className="panel panel-default shadow-sm container-fluid">
                    {header}
                    <div className="panel-body">{this.props.children}</div>
                </div>
        );
    }
}

Panel.propTypes = {
    id: PropTypes.string,
    header: PropTypes.string
};

export default Panel;