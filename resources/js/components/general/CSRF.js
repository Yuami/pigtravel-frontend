import React, {Component} from 'react';
import {FormContext} from "../../FormContext";

class CSRF extends Component {
    render() {
        return (
            <FormContext.Consumer>
                {csrf => <input type="hidden" name="_token" value={csrf}/>}
            </FormContext.Consumer>
        );
    }
}

export default CSRF;