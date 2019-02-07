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
<<<<<<< HEAD
import Contact from "../Views/Contact";
=======
import Panel from "./layout/Panel";
import ReservationForm from "./layout/ReservationForm";
import Register from "../Views/Register";
>>>>>>> 8e3c27bd8f370c39fe8721b928b9d8a7be348ad0



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
                {/*  <UserRouter title={"title"}/>  cambiado de userRouter a UserRouter*/}
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/bookings" component={BookingDetail}/>
                    <Route exact path="/about-us" component={AboutUs}/>
                    <Route exact path="/login" component={Login}/>
<<<<<<< HEAD
                    <Route exact path="/contact" component={Contact}/>
                    <Route exact path="/modal">
                        <MainModal buttonLabel="Reservate" modalBody={"body"} modalHeader={"header"} primaryButton={"lol"}/>
=======
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/phil">
                        <ReservationForm idVivienda={49}/>
>>>>>>> 8e3c27bd8f370c39fe8721b928b9d8a7be348ad0
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
