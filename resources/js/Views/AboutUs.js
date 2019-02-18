import React, {Component} from 'react';
import Translate from "../lang/Translate";
import Main from "../components/Main";

class AboutUs extends Component {
    render() {
        return (
            <>
            <div>
                <h1><Translate type="general" string="about-us"/></h1>
            </div>
            </>
        );
    }
}

export default AboutUs;