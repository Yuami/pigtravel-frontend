import React, {Component} from 'react';
import TitleInicio from "../components/specific/TitleInicio";
import Searcher from "../components/layout/Searcher";


class Home extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron_cont">
                    <TitleInicio/>
                    <Searcher/>
                </div>
            </div>
        );
    }
}

export default Home;