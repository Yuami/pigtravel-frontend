import React, {Component} from "react";
import {FormContext} from "../FormContext.js";
import {LocaleContext} from "../LocaleContext.js";
import Header from "./layout/Header";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import axios from 'axios';
import Footer from "./layout/Footer";
import Home from "../Views/Home";
import Register from "../Views/Register";
import LogIn from "../Views/LogIn";
import AboutUs from "../Views/AboutUs";
import * as ReactDOM from "react-dom";
import TitleInicio from "./specific/TitleInicio";
import Searcher from "./layout/Searcher";
import MainModal from "./layout/MainModal";
import Terms from "../Views/Terms";
import BookingDetail from "../Views/BookingDetail";
import FormText from "reactstrap/es/FormText";


export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            preferredLocale: "es",
            locale: "es"
        };
    }

    componentDidMount() {
        if (localStorage.hasOwnProperty('locale')) {
            this.setState({"locale": localStorage["locale"]});
        }
    }

    changeLanguage = ({currentTarget: {id}}) => {
        localStorage["locale"] = id;
        this.setState({
            locale: id
        });
    };

    render() {
        let token = document.head.querySelector('meta[name="csrf-token"]');

        return (
            <LocaleContext.Provider value={this.state.locale}>
                <FormContext.Provider value={token.content}>
                    <Header changeLanguage={this.changeLanguage}/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/bookings" component={BookingDetail}/>
                        <Route exact path="/about-us" component={AboutUs}/>
                        <Route exact path="/register" component={Register}/>
                        <Route exact path="/login" component={LogIn}/>
                        <Route exact path="/modal">
                            <MainModal buttonLabel="Reservate"/>
                        </Route>
                        <Route exact path="/terms" component={Terms}/>
                    </Switch>
                    <Footer/>
                </FormContext.Provider>
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
