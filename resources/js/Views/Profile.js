import React, {Component} from 'react';
import Container from "react-bootstrap/es/Container";

class Profile extends Component {
    render() {
        const {id, name} = this.props.match.params;
        return (
            <Container className="my-3">
                    <h1>
                        Profile {id}: <b>{name}</b>
                    </h1>
            </Container>
        );
    }
}

export default Profile;