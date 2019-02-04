import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";
import DropListLangs from "./DropListLangs";

class LanguagePicker extends Component {

    constructor(props) {
        super(props);

        const languages = [
            {
                id: 'es',
                img: 'img/spain-flag.png',
                name: 'Español',
            },
            {
                id: 'en',
                img: 'img/united-kingdom-flag.png',
                name: 'English',
            }
        ];

        const language = languages[0];
        this.state = {
            languages,
            language
        }
    }

    handleImg() {
        let language = 'en';
        language = this.state.languages.find(lang => lang.id == language);
    }

    componentWillMount() {
        this.handleImg();
    }

    render() {
        return (
            <>
                <DropdownToggle nav caret>
                    <img src={this.state.language.img} height="20"></img>
                </DropdownToggle>
                <DropdownMenu right>
                    <DropListLangs data={this.state.languages} changeLanguage={this.changeLanguage}/>
                </DropdownMenu>
            </>
        )
    }
}

export default LanguagePicker;