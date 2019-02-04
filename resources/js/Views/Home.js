import React, {Component} from 'react';
import Translate from "../lang/Translate";
import Searcher from "../components/Searcher";

class Home extends Component {
    render() {
        return (
            <div>
                <Searcher/>
            </div>
        );
    }
}

export default Home;