import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import Image from "react-bootstrap/Image";
import Link from "react-router-dom/es/Link";

class ProfileImg extends Component {

    state = {
        img: "/img/default-profileImg.png"
    };

    componentWillMount() {
        this.profileImg();
    }

    profileImg = () => {
        axios.get(`/api/persona/${this.props.idPersona}/img`)
            .then(res => res.data)
            .then(res => res)
            .then(res => this.setState({
                img: res.back + res.foto.path
            }))
            .catch(e => console.error(e));
    };

    render() {
        return <Image id={this.props.id} className={"rounded-circle " + this.props.className} src={this.state.img}
                      onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/img/default-profileImg.png"
                      }}/>;
    }

    static propTypes = {
        idPersona: PropTypes.any.isRequired,
    }
}

export default ProfileImg;