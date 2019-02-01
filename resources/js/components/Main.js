import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from "./layout/Header";
import axios from 'axios';
import Footer from "./layout/Footer";


export default class Main extends Component {
    render() {
        return (
            <>
                <Header/>

                <Footer/>
            </>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Main/>, document.getElementById('app'));
}
