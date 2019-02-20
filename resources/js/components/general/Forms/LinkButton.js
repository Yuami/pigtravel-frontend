import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from "reactstrap/es/Button";
import Link from "react-router-dom/es/Link";
import {withRouter} from "react-router-dom";

class LinkButton extends Component {
    render() {
        return (
            <Link to={{
            pathname: this.props.page,
            state: this.props.pageParams
        }}>
            <Button
                    className={this.props.className}
                    size={this.props.size} color='primary'
                    disabled={this.props.disabled}>{this.props.text}
            </Button>
        </Link>);
    }
}

LinkButton.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
    page: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    pageParams: PropTypes.object,
    size: PropTypes.string,
};

LinkButton.defaultProps = {
    disabled: false,
    page: '#'
};


export default withRouter(LinkButton);
