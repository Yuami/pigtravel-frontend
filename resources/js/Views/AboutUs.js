import React, {Component} from 'react';
import Translate from "../lang/Translate";
import Main from "../components/Main";
import {LocaleContext} from "../LocaleContext";
import {translate} from "../helpers";

class AboutUs extends Component {
    static contextType = LocaleContext;
    render() {
        document.title =translate(this.context,'about-us.who','footer');
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