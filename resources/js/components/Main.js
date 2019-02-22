import React, {Component} from "react";
import {LocaleContext} from "../LocaleContext.js";
import Header from "./layout/Header";
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route, withRouter} from "react-router-dom";
import Footer from "./layout/Footer";
import Home from "../Views/Home";
import Login from "../Views/Login";
import AboutUs from "../Views/AboutUs";
import * as ReactDOM from "react-dom";
import MainModal from "./layout/MainModal";
import Terms from "../Views/Terms";
import BookingDetail from "../Views/BookingDetail";
import Register from "../Views/Register";
import Contact from "../Views/Contact";
import HouseList from "../Views/HouseList";
import moment from "react-daterange-picker/example/moment-range";
import Reservation from "../Views/Reservation";
import ReservationPayment from "../Views/ReservationPayment";
import House from "../Views/House";
import Profile from "../Views/Profile";
import axios from "axios";

class Main extends Component {
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
        const endPoint = '/api/locale/' + id;
        axios.post(endPoint);
    };



    render() {
        var checkIn = new Date('2012-01-01');
        var checkOut = new Date('2012-01-04');

        return (
            <LocaleContext.Provider value={this.state.locale}>
                <Header changeLanguage={this.changeLanguage}/>
                {/*  <UserRouter title={"title"}/>  cambiado de userRouter a UserRouter */}
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/bookings/:idReserva" component={BookingDetail}>
                    </Route>
                    <Route exact path="/houses/:idHouse/:name" component={House}>
                    </Route>
                    <Route exact path="/about-us" component={AboutUs}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Route exact path="/modal">
                        <MainModal buttonLabel="Reservate" modalBody={"body"} modalHeader={"header"}
                                   primaryButton={"lol"}/>
                    </Route>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/reservation">
                        <Reservation idVivienda={51} checkIn={checkIn} checkOut={checkOut} pax={2} price={300}/>
                    </Route>
                    <Route exact path="/payment">
                        <ReservationPayment/>
                    </Route>
                    <Route exact path="/terms" component={Terms}/>
                    <Route exact path="/search" component={HouseList}/>
                    <Route path="/profile/:id/:name" component={Profile}/>
                </Switch>
                <Footer/>
            </LocaleContext.Provider>
        );
    }
}

export default withRouter(Main);


if (document.getElementById('app')) {
    ReactDOM.render(
        <BrowserRouter>
            <Main/>
        </BrowserRouter>,
        document.getElementById('app'));
}
