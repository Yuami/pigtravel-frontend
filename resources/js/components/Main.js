import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from "./layout/Header";
import axios from 'axios';


export default class Main extends Component {
    render() {
        return (
            <>
                <Header/>
            </>
        );
    }
}

if (document.body) {
    ReactDOM.render(<Main/>, document.body);
}
