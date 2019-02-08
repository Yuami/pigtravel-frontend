import React, {Component} from 'react';
import PropTypes from 'prop-types';
import StarRatingsComponent from 'react-star-rating-component';


class Stars extends Component {
    constructor(props) {
        super(props);
        this.changeRating = this.changeRating.bind(this);
        this.renderStars = this.renderStars.bind(this);
    }


    state = {
        colors: {
            primary: "rgb(250,104,57)",
            secondary: "rgb(49,77,104)",
        },
        rating: this.props.rating,
        name: this.props.name || 'name',
        starIcon: '★'
    };

    changeRating(newRating, name) {
        this.setState({
            rating: newRating
        });
    }

    componentWillMount() {
        this.setState({color: this.state.colors[this.props.color]} || this.state.colors.primary)
    }

    handleHover(){

    }

    renderStars() {
        const style = {
            ...this.props.style,
            fontSize: this.props.size,
            fontStyle: 'normal',
        };
        return <span className={this.props.className} style={style}>{this.state.starIcon}</span>
    }

    render() {
        const props = {
            name: this.state.name,
            value: this.state.rating,
            onStarClick: this.changeRating,
            starColor: this.state.color,
            editing: this.props.editing,
            renderStarIcon: this.renderStars
        };

        return <StarRatingsComponent {...props} />
    }

    static defaultProps = {
        editing: false
    };

    static propTypes = {
        editing: PropTypes.bool,
        rating: PropTypes.number.isRequired,
        color: PropTypes.oneOf(["primary", "secondary"])
    };
}

export default Stars;