import React, { Component } from "react";
import { LocaleContext } from "../LocaleContext.js";
import Header from "./layout/Header";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import axios from 'axios';
import Footer from "./layout/Footer";
import Home from "../Views/Home";
import AboutUs from "../Views/AboutUs";
import * as ReactDOM from "react-dom";
import Searcher from "./layout/Searcher";
import TitleInicio from "./specific/TitleInicio";
import CarouselInicio from "./layout/CarouselInicio";
import Translate from "../lang/Translate";


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
                <div id="recomendacionCiudades">
                    <div id="yourdiv"><h2 className="recomendacion"><Translate type={"carrousel"} string={"recomendacion"}/></h2></div>
                </div>

                <CarouselInicio/>
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
