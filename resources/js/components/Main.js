import React, { Component } from "react";
import { LocaleContext } from "../LocaleContext.js";
import Header from "./layout/Header";
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
            </LocaleContext.Provider>
        );
    }
}


if (document.body) {
    ReactDOM.render(<Main/>, document.body);
}
