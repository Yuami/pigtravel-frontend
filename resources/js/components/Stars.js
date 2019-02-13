import React, {Component} from 'react';
import PropTypes from 'prop-types';
import StarRatingsComponent from 'react-star-rating-component';
import FaIcon from "./general/FaIcon";


class Stars extends Component {
    constructor(props) {
        super(props);
        this.changeRating = this.changeRating.bind(this);
        this.renderStars = this.renderStars.bind(this);
        this.renderHalfStar = this.renderHalfStar.bind(this);
        this.onHoverStart = this.onHoverStart.bind(this)
        this.onHoverEnd = this.onHoverEnd.bind(this)
    }

    style = {
        ...this.props.style,
        fontSize: this.props.size,
        fontStyle: 'normal',
    };

    state = {
        colors: {
            primary: "#FA6839",
            secondary: "#314D68",
        },
        rating: this.props.rating,
        name: this.props.name || 'name',
        editing: this.props.editing,
        hoverRating: this.props.rating,
        isHovering: false
    };

    changeRating(newRating) {
        this.setState({
            rating: newRating,
            hoverRating: newRating
        });
    }

    componentWillMount() {
        this.setState({color: this.state.colors[this.props.color]} || this.state.colors.primary)
    }

    onHoverStart(next) {
        const {editing, rating} = this.state;
        if (!editing) return;
        if (rating == null) return;
        this.setState({
            hoverRating: next,
            isHovering: true
        })
    }

    onHoverEnd(next){
        const {editing, rating} = this.state;
        if (!editing) return;
        if (rating == null) return;
        this.setState({
            hoverRating: next,
            isHovering: false
        })
    }

    renderHalfStar() {
        return <FaIcon icon={'fas fa-star-half-alt'} size={this.props.size} className={'text-primary'}/>
    };

    renderStars(index, value) {
        return <FaIcon icon={index <= value ? 'fas fa-star' : 'far fa-star'} size={this.props.size}/>
    }

    render() {
        const props = {
            name: this.state.name,
            value: parseFloat(this.state.isHovering ? this.state.hoverRating : this.state.rating),
            onStarClick: this.changeRating,
            starColor: this.state.color,
            editing: this.props.editing,
            renderStarIcon: this.renderStars,
            renderStarIconHalf: this.renderHalfStar,
            onStarHover: this.onHoverStart,
            onStarHoverOut: this.onHoverEnd,
        };

        return <StarRatingsComponent {...props} />
    }

    static defaultProps = {
        editing: false
    };

    static propTypes = {
        size: PropTypes.oneOf(['', 'fa-xs', 'fa-sm', 'fa-lg', 'fa-2x', 'fa-3x', 'fa-5x', 'fa-7x', 'fa-10x']),
        editing: PropTypes.bool,
        rating: PropTypes.any.isRequired,
        color: PropTypes.oneOf(["primary", "secondary"])
    };
}

export default Stars;