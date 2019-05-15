import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import Image from "react-bootstrap/Image";
import Link from "react-router-dom/es/Link";

class ProfileImg extends Component {

    state = {
        img: "/img/default-profileImg.png"
    };

    constructor(props) {
        super(props);
        console.log(props);
    }


    componentWillMount() {

        axios.get(`/api/persona/${this.props.idPersona}/img`)
            .then(res => res.data)
            .then(res => { console.log(res);
                return res})
            .then(res => this.setState({
                img: "http://back.pig.test" + res.foto.path
            }))
            .catch(e => console.error(e));

        this.forceUpdate()
    }


    render() {
        return <Image id={this.props.id} className={"rounded-circle " + this.props.className} src={this.state.img}
                      onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/img/default-profileImg.png"
                      }}/>;
    }

}

ProfileImg.propTypes = {
    idPersona: PropTypes.any.isRequired,
};

export default ProfileImg;