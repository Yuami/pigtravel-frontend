import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {LocaleContext} from "../../LocaleContext";
import {translate} from "../../helpers";
import FormButton from "../general/Forms/FormButton";

class StripeCheckout extends Component {


    constructor(props) {
        super(props);

        this.state = {
            disable: true,
        }
    }

    render() {
        return (
            <div>
                <LocaleContext.Consumer>
                    {locale =>
                        <FormButton className={'pull-right'}
                                    text={translate(locale, 'pay', 'reservation')}
                                    disabled={this.state.disabled}/>
                    }
                </LocaleContext.Consumer>

            </div>
        );
    }
}

export default StripeCheckout;