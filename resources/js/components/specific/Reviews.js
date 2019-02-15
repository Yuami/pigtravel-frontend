import React, {Component} from 'react';
import PropTypes from "prop-types";
import axios from "axios";
import Stars from "../Stars";

export default class Reviews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: [],
        };
        this.renderReviews=this.renderReviews.bind(this);
    }
    componentWillMount() {

        axios.get('/api/reviews/'+this.props.houseID)
            .then((res) => this.setState({values: res.data}));
    }
    renderReviews() {
        return this.state.values.map(function (value, index, array) {
                return (
                    <div className="review card">
                        <div className="card-header">
                            {value.nombre}
                            <div className={'pull-right'}>{<Stars rating={value.media}/>}</div>
                        </div>
                        <div className="card-body">
                            <p className="card-text">{value.mensaje}</p>
                        </div>
                    </div>
                )

        });
    }


    render() {
        const renderReviews =this.renderReviews();
        return (
            <div>
                {renderReviews}
            </div>
        );
    }
}
Reviews.propTypes = {
    houseID: PropTypes.number.isRequired,
};