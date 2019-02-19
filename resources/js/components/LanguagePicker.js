import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";
import DropListLangs from "./DropListLangs";
import {LocaleContext} from "../LocaleContext";

class LanguagePicker extends Component {

    constructor(props) {
        super(props);

        const languages = [
            {
                id: 'es',
                img: '/img/spain-flag.png',
                name: 'Español',
            },
            {
                id: 'en',
                img: '/img/united-kingdom-flag.png',
                name: 'English',
            }
        ];

        const language = languages[0];
        this.state = {
            languages,
            language
        }
    }

    handleImg(language) {
        language = this.state.languages.find(lang => lang.id == language);
        return language.img;
    }

    render() {
        return (
            <>
                <DropdownToggle nav caret>
                    <LocaleContext.Consumer>
                        {locale => <img src={this.handleImg(locale)} height='20px'></img>}
                    </LocaleContext.Consumer>
                </DropdownToggle>
                <DropdownMenu right>
                    <DropListLangs data={this.state.languages} changeLanguage={this.props.changeLanguage}/>
                </DropdownMenu>
            </>
        )
    }
}

export default LanguagePicker;