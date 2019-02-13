import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from "prop-types";
import DesglosePrecio from "./DesglosePrecio";


class Meta extends React.Component{


    constructor(props) {
        super(props);
    }

    componentDidMount(){
        document.title = this.props.title;
    }

    render(){
        return(
            <b> test </b>
        )
    }
}
Meta.propTypes = {
    title: PropTypes.string.isRequired,
};

ReactDOM.render(
    <Meta title="Pig Travel" />,
    document.getElementById('meta')
);