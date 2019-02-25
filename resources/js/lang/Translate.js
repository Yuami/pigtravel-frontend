import React, { Component } from "react";
import { LocaleContext } from "../LocaleContext.js";
import PropTypes from 'prop-types';

import en from "./en.json";
import es from "./es.json";

class Translate extends Component {

    constructor(props) {
        super(props);

        // Defineix els fitxers json de idiomes
        this.state = {
            langs: {
                en,
                es,
            }
        };
    }

    // Renderitza la paraula a traduir amb l'idioma corresponent
    render() {
        const {langs} = this.state;
        const {type, string} = this.props;
        return (
            <LocaleContext.Consumer>
                {value => langs[value] == undefined ? langs['es'][type][string] : langs[value][type][string]}
            </LocaleContext.Consumer>
        );
    }

}

Translate.propTypes = {
    type: PropTypes.string.isRequired,
    string: PropTypes.string.isRequired,
};

export default Translate;