import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from "reactstrap/es/Card";

class MainCard extends Component {

    state = {
        isHovering: false,
        style: {
            cursor: this.props.clickable ? 'pointer' : 'inherit'
        }
    };

    handleHover = () => {
        const isHovering = !this.state.isHovering;

        this.setState({
            isHovering,
        });
    };

    render() {
        const {style, isHovering} = this.state;
        const {children, className, id, clickable} = this.props;
        const shadow = className + ' ' + clickable && isHovering ? 'shadow' : 'shadow-sm';

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