import React, {Component} from 'react';
import Container from "react-bootstrap/es/Container";
import {translate} from "../helpers";
import {LocaleContext} from "../LocaleContext";

class Profile extends Component {
    static contextType = LocaleContext;

    render() {

        document.title =translate(this.context,'profile','titles');
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