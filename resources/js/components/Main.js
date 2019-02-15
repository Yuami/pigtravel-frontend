import React, {Component} from "react";
import {LocaleContext} from "../LocaleContext.js";
import {FormContext} from "../FormContext.js";
import Header from "./layout/Header";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import axios from 'axios';
import Footer from "./layout/Footer";
import Home from "../Views/Home";
import Login from "../Views/Login";
import AboutUs from "../Views/AboutUs";
import * as ReactDOM from "react-dom";
import TitleInicio from "./specific/TitleInicio";
import Searcher from "./layout/Searcher";
import MainModal from "./layout/MainModal";
import Terms from "../Views/Terms";
import BookingDetail from "../Views/BookingDetail";
import Panel from "./layout/Panel";
import ReservationForm from "./layout/ReservationForm";
import Register from "../Views/Register";
import Contact from "../Views/Contact";
import HouseList from "../Views/HouseList";
import moment from "react-daterange-picker/example/moment-range";


export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            preferredLocale: "es",
            locale: "es"
        };
    }

    componentDidMount() {
        if (!localStorage.hasOwnProperty('locale')) {
            localStorage["locale"] = this.state.preferredLocale;
        }
        this.setState({"locale": localStorage["locale"]});
    }

    changeLanguage = ({currentTarget: {id}}) => {
        localStorage["locale"] = id;
        this.setState({
            locale: id
        });
    };

    render() {
        var checkOut = moment('2012-01-01');
        var checkIn = moment('2012-01-01');
        let token = document.head.querySelector('meta[name="csrf-token"]');

        return (
            <LocaleContext.Provider value={this.state.locale}>
                <FormContext.Provider value={token.content}>
                    <Header changeLanguage={this.changeLanguage}/>
                    {/*  <UserRouter title={"title"}/>  cambiado de userRouter a UserRouter*/}
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/bookings/:idReserva" component={BookingDetail}>
                        </Route>
                        <Route exact path="/about-us" component={AboutUs}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/contact" component={Contact}/>
                        <Route exact path="/modal">
                            <MainModal buttonLabel="Reservate" modalBody={"body"} modalHeader={"header"}
                                       primaryButton={"lol"}/>
                        </Route>
                        <Route exact path="/register" component={Register}/>
                        <Route exact path="/phil">
                            <ReservationForm idVivienda={51} checkIn={checkIn} checkOut={checkOut} pax={2} price={300}/>
                        </Route>
                        <Route exact path="/terms" component={Terms}/>
                        <Route exact path="/house-list" component={HouseList}/>
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
