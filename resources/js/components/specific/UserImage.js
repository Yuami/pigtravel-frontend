import React, {Component} from 'react';
import PropTypes from "prop-types";
import axios from "axios";


class UserImage extends Component {


    constructor(props) {
        super(props);
        this.state = {
            image: "",

        };
    }

    componentWillMount() {
        axios.get('/api/fotoPerfil/' + this.props.idUser)
            .then(response => {
                this.setState({
                    image: response.data[0].path || "/assets/uploads/img/perfiles/default-image.png"
                });
            })
    }

    render() {
        return (
            <>
                <img className="img-circle img-profile"
                     src={"http://admin.pigtravel.top"+this.state.image}/>
            </>
        );

    }
}

UserImage.propTypes = {
    idUser: PropTypes.number.isRequired,
};
export default UserImage;