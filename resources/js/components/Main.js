import React, { Component } from "react";
import { LocaleContext } from "../LocaleContext.js";
import Header from "./layout/Header";
import * as ReactDOM from "react-dom";


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
            </LocaleContext.Provider>
        );
    }
}


if (document.body) {
    ReactDOM.render(<Main/>, document.body);
}
