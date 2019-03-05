import React, {Component} from "react";
import {LocaleContext} from "../LocaleContext.js";
import {AuthContext} from "../AuthContext.js";
import {FormContext} from "../FormContext.js";
import Header from "./layout/Header";
import {BrowserRouter, Switch, Route, withRouter} from "react-router-dom";
import Footer from "./layout/Footer";
import Home from "../Views/Home";
import LogOut from "../Views/LogOut";
import AboutUs from "../Views/AboutUs";
import * as ReactDOM from "react-dom";
import MainModal from "./layout/MainModal";
import Terms from "../Views/Terms";
import BookingDetail from "../Views/BookingDetail";
import Register from "../Views/Register";
import Contact from "../Views/Contact";
import HouseList from "../Views/HouseList";
import Reservation from "../Views/Reservation";
import ReservationPayment from "../Views/ReservationPayment";
import House from "../Views/House";
import Profile from "../Views/Profile";
import axios from "axios";
import LogIn from "../Views/LogIn";
import CookieConsent from "react-cookie-consent";
import Translate from "../lang/Translate";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            preferredLocale: "es",
            isAuth: false,
            locale: "es"
        };
    }

    componentWillMount() {
        this.isAuth();
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
    isAuth = () => {
        axios.get("/api/auth")
            .then((response) => {
                    this.setState({isAuth: response.data});
                }
            )
    };


    render() {
        let token = document.head.querySelector('meta[name="csrf-token"]');

        const reservation = this.state.isAuth ? <Reservation/> : <LogIn/>;
        const payment = this.state.isAuth ? <ReservationPayment/> : <LogIn/>;

        return (
            <LocaleContext.Provider value={this.state.locale}>
                <AuthContext.Provider value={this.state.isAuth}>
                    <FormContext.Provider value={token}>
                        <Header changeLanguage={this.changeLanguage}/>
                        {/*  <UserRouter title={"title"}/>  cambiado de userRouter a UserRouter */}
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/bookings/:idReserva" component={BookingDetail}>
                            </Route>
                            <Route exact path="/houses/:idHouse/:name" component={House}>
                            </Route>
                            <Route exact path="/houses/:idHouse" component={House}>
                            </Route>
                            <Route exact path="/about-us" component={AboutUs}/>
                            <Route exact path="/login" component={LogIn}/>
                            <Route exact path="/logout" component={LogOut}/>
                            <Route exact path="/contact" component={Contact}/>
                            <Route exact path="/register" component={Register}/>
                            <Route exact path="/reservation">
                                {reservation}
                            </Route>
                            <Route exact path="/payment">
                                {payment}
                            </Route>
                            <Route exact path="/terms" component={Terms}/>
                            <Route exact path="/search" component={HouseList}/>
                            <Route path="/profile/:id/:name" component={Profile}/>
                        </Switch>
                        <Footer/>
                        <CookieConsent
                            location="bottom"
                            buttonText={<Translate type={'verify'} string={'confirmButtonText'}/>}
                            cookieName="cookies">
                            {<Translate type={'cookies'} string={'cookie'}/>}
                        </CookieConsent>
                    </FormContext.Provider>
                </AuthContext.Provider>
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
