import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from "reactstrap/es/Card";

class MainCard extends Component {

    state = {
        hover: false,
        shadowClass: 'shadow-sm'
    };

    handleHover = () => {
        const hover = !this.state.hover;
        let shadowClass = hover ? 'shadow' : 'shadow-sm';
        shadowClass = this.props.shadow ? shadowClass : 'shadow-sm';

        this.setState({
            hover,
            shadowClass
        });
    };

    render() {
        const {children, className} = this.props;
        const shadowClass = className + ' ' + this.state.shadowClass;

        return (
                <Card className={shadowClass} id={this.props.id}>
                    <div onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
                    {children}
                    </div>
                </Card>
        );
    }

    static defaultProps = {
        shadow: false,
        className: ''
    };

    static propTypes = {
        shadow: PropTypes.bool,
    };
}

export default MainCard;