
import React, {Component} from 'react';
import PropTypes from "prop-types";
import axios from "axios";



class UserImage extends Component {


    constructor(props) {
        super(props);
        this.state = {
            image: [],
        };
    }
    componentWillMount() {
        axios.get('/api/fotoPerfil/' + this.props.idUser)
            .then(user=>
                this.setState({
                image: user.data
            }));
    }
    render() {

            return (
                <>
                    <img className="img-circle img-profile" src={"http://admin.pigtravel.top/assets/uploads/img/perfiles/default-image.png"}/>
                </>
            );

    }
}
UserImage.propTypes = {
    idUser: PropTypes.number.isRequired,
};
export default UserImage;