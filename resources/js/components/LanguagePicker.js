import React, {Component} from 'react'
import {DropdownItem, DropdownMenu} from "reactstrap";

class LanguagePicker extends Component {


    render() {
        const {changeLanguage} = this.props;
        return (
            <>
                <DropdownItem>
                    <a id="es" onClick={changeLanguage}>
                        <img src="img/spain-flag.png" height="20"></img> Español
                    </a>
                </DropdownItem>
                <DropdownItem>
                    <a id="en" onClick={changeLanguage}>
                        <img src="img/united-kingdom-flag.png" height="20"></img> English
                    </a>
                </DropdownItem>
            </>
        )
    }
}

export default LanguagePicker;