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
            <div>
                <div id={this.props.id} className="panel panel-default shadow">
                    {header}
                    <div className="panel-body">{this.props.children}</div>
                </div>
            </div>
        );
    }
}

Panel.propTypes = {
    id: PropTypes.string,
    header: PropTypes.string,
    body: PropTypes.string.isRequired
};

export default Panel;