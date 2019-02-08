import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from "reactstrap/es/Card";

class MainCard extends Component {

    state = {
        hover: false,
        shadowClass: 'shadow-sm',
        style: {
            cursor: this.props.clickable ? 'pointer' : 'inherit'
        }
    };

    handleHover = () => {
        const hover = !this.state.hover;
        let shadowClass = hover ? 'shadow' : 'shadow-sm';
        shadowClass = this.props.clickable ? shadowClass : 'shadow-sm';

        this.setState({
            hover,
            shadowClass
        });
    };

    render() {
        const {shadowClass, style} = this.state;
        const {children, className, id} = this.props;
        const shadow = className + ' ' + shadowClass;

        return (
                <Card className={shadow} id={id} style={style}>
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
        clickable: PropTypes.bool,
    };
}

export default MainCard;