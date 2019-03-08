import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {LocaleContext} from "../../LocaleContext";
import {translate} from "../../helpers";
import FormButton from "../general/Forms/LinkButton";
import {Button} from "reactstrap";
import axios from "axios";

class StripeCheckout extends Component {


    constructor(props) {
        super(props);

        this.state = {
            disabled: false,
            info: Object.freeze({
                idVivienda: this.props.idVivienda,
                checkIn: this.props.checkIn.toISOString().slice(0, 19).replace('T', ' '),
                checkOut: this.props.checkOut.toISOString().slice(0, 19).replace('T', ' '),
                pax: this.props.pax,
                precio: this.props.total,
            })
        }
    }

    addReservation() {
        axios.post('/api/reservation', {
            paymentID: "stripe",
            idVivienda: this.state.info.idVivienda,
            checkIn: this.state.info.checkIn,
            checkOut: this.state.info.checkOut,
            pax: this.state.info.pax,
            precio: this.state.info.precio,
            estado: 4,
            message: this.props.message
        }).then(function (response) {
            window.location = ("/bookings/" + response.data);
        }).catch(function (error) {
            console.log(error);
        });

    };

    render() {
        return (
            <div>
                <LocaleContext.Consumer>
                    {locale =>
                        <Button
                            onClick={() => this.addReservation()}
                            className={'pull-right'}
                            color={'primary'}
                            disabled={this.state.disabled}>{translate(locale, 'pay', 'reservation')}</Button>
                    }
                </LocaleContext.Consumer>

            </div>
        );
    }
}

StripeCheckout.propTypes = {
    idVivienda: PropTypes.number.isRequired,
    checkIn: PropTypes.instanceOf(Date),
    checkOut: PropTypes.instanceOf(Date),
    pax: PropTypes.number.isRequired,
    price: PropTypes.number,
    serviceFee: PropTypes.number,
    total: PropTypes.number.isRequired,
    message: PropTypes.string,
};

export default StripeCheckout;