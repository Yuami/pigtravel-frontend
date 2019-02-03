import React, { Component } from "react";
import { LocaleContext } from "../LocaleContext.js";
import Header from "./layout/Header";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import axios from 'axios';
import Footer from "./layout/Footer";
import Home from "../Views/Home";
import AboutUs from "../Views/AboutUs";
import * as ReactDOM from "react-dom";


export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            preferredLocale: "es"
        };
    }
    changeLanguage = ({ currentTarget: { id } }) => {
        this.setState({
            preferredLocale: id
        });
    };
    render() {
        return (
            <LocaleContext.Provider value={this.state.preferredLocale}>
                <Header changeLanguage={this.changeLanguage} />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about-us" component={AboutUs} />
                </Switch>
                <Footer/>
            </LocaleContext.Provider>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(
        <BrowserRouter>
        <Main/>
        </BrowserRouter>,
        document.getElementById('app'));
}
