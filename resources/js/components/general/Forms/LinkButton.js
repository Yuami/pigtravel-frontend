import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from "reactstrap/es/Button";
import Link from "react-router-dom/es/Link";
import {withRouter} from "react-router-dom";

class LinkButton extends Component {
    render() {
        return (<Link to={{
            pathname: this.props.page,
            state: this.props.pageParams
        }}>
            <Button block={this.props.block}
                    className={this.props.className}
                    size='lg' color='primary'
                    disabled={this.props.disabled}>{this.props.text}
            </Button>
        </Link>);
    }
}

LinkButton.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
    block: PropTypes.string,
    page: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    pageParams: PropTypes.object,
};

LinkButton.defaultProps = {
    disabled: false,
    page: '#',
};


export default withRouter(LinkButton);
