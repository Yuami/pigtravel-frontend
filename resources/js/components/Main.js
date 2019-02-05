import React, { Component } from "react";
import { LocaleContext } from "../LocaleContext.js";
import Header from "./layout/Header";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import axios from 'axios';
import Footer from "./layout/Footer";
import Home from "../Views/Home";
import AboutUs from "../Views/AboutUs";
import * as ReactDOM from "react-dom";
import TitleInicio from "./specific/TitleInicio";
import Searcher from "./Searcher";
import MainModal from "./layout/MainModal";
import Terms from "./layout/Terms";


export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            preferredLocale: "es",
            locale: "es"
        };
    }

    componentDidMount() {
        if (localStorage.hasOwnProperty('locale')){
            this.setState({"locale": localStorage["locale"]});
        }
    }

    changeLanguage = ({ currentTarget: { id } }) => {
        localStorage["locale"] = id;
        this.setState({
            locale: id
        });
    };

    render() {
        return (
            <LocaleContext.Provider value={this.state.locale}>
                <Header changeLanguage={this.changeLanguage} />
                <div className="jumbotron_cont">
                <TitleInicio/>
                <Searcher/>
                </div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about-us" component={AboutUs}/>
                    <Route exact path="/modal">
                        <MainModal buttonLabel="Reservate" />
                    </Route>
                    <Route exact path="/terms" component={Terms}/>
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
