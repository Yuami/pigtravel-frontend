import React, { Component } from "react";
import { LocaleContext } from "../LocaleContext.js";
import Header from "./layout/Header";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Footer from "./layout/Footer";
import Home from "../Views/Home";
import Login from "../Views/Login";
import AboutUs from "../Views/AboutUs";
import * as ReactDOM from "react-dom";
import MainModal from "./layout/MainModal";
import Terms from "../Views/Terms";
import BookingDetail from "../Views/BookingDetail";
import Register from "../Views/Register";


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
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/bookings" component={BookingDetail}/>
                    <Route exact path="/about-us" component={AboutUs}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/modal">
                        <MainModal buttonLabel="Reservate" modalBody={"body"} modalHeader={"header"} primaryButton={"lol"}/>
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
