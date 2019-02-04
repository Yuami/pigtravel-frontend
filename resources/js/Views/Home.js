import React, {Component} from 'react';
import Translate from "../lang/Translate";

class Home extends Component {
    render() {
        return (
            <div>
                <h1><Translate type="general" string="home"/></h1>
            </div>
        );
    }
}

export default Home;