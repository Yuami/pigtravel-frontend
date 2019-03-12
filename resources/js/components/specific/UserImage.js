import React, {Component} from 'react';
import PropTypes from "prop-types";
import axios from "axios";


class UserImage extends Component {


    constructor(props) {
        super(props);
        this.state = {
            image: '',
        };
    }

    componentWillMount() {
        axios.get('/api/persona/' + 1 + '/img')
            .then(
                (res) => {
                    this.setState({
                        image: res.data.back + res.data.foto.path
                    });
                });
    }

    render() {
        return (
            <>
                <img className="img-circle img-profile" src={this.state.image}/>
            </>
        );

    }
}

UserImage.propTypes = {
    idUser: PropTypes.number.isRequired,
};
export default UserImage;