import React, {Component} from 'react'
import {DropdownItem, DropdownMenu} from "reactstrap";

class LanguagePicker extends Component {


    render() {
        const {changeLanguage} = this.props;
        return (
            <>
                <a id="es" onClick={changeLanguage}>
                    <DropdownItem>
                        <img src="img/spain-flag.png" height="20"></img> Español
                    </DropdownItem>
                </a>
                <a id="en" onClick={changeLanguage}>
                    <DropdownItem>
                        <img src="img/united-kingdom-flag.png" height="20"></img> English
                    </DropdownItem>
                </a>
            </>
        )
    }
}

export default LanguagePicker;