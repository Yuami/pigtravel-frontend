import React from 'react';
import PaypalBtn from 'react-paypal-checkout';
import * as PropTypes from "prop-types";
import axios from "axios";
import {withRouter} from "react-router-dom";
import Redirect from "react-router-dom/es/Redirect";

class PaypalCheckout extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            info: Object.freeze({
                idVivienda: this.props.idVivienda,
                checkIn: this.props.checkIn.toISOString().slice(0, 19).replace('T', ' '),
                checkOut: this.props.checkOut.toISOString().slice(0, 19).replace('T', ' '),
                pax: this.props.pax,
                precio: this.props.total,
            })
        }
    }

    render() {

        const onSuccess = (payment) => {
            const $this = this;

            if (this.props.idReserva.idReserva) {
                axios.post('/api/reservation/' + this.props.idReserva.idReserva + '/estado', {
                    idReserva: this.props.idReserva.idReserva,
                    estado: 4,
                }).then(function (response) {
                    window.location = ("/bookings/" + $this.props.idReserva.idReserva);
                }).catch(function (error) {
                    console.log(error);
                });
            } else {
                axios.post('/api/reservation', {
                    paymentID: payment.paymentID,
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
            }
        };

        const onCancel = (data) => {
            onSuccess('91775352');
            console.log(this.props);
            console.log('The payment was cancelled!', data);
        };

        const onError = (err) => {
            // The main Paypal's script cannot be loaded or somethings block the loading of that script!
            console.log("Error!", err);
        };

        let env = 'sandbox'; // you can set here to 'production' for production
        let currency = 'EUR'; // or you can set this value from your props or state
        let total = this.props.total;  // same as above, this is the total amount (based on currency) to be
        let locale = 'en_US';
        // For Customize Style: https://developer.paypal.com/docs/checkout/how-to/customize-button/
        let style = {
            'label': 'checkout',
            'tagline': true,
            'size': 'small',
            'shape': 'pill',
            'color': 'gold'
        };

        const client = {
            sandbox: 'AbrUW3IiIge0_Fc-IY3QISqQ1CBTb4pA1luDG0XZlBY4aS1qTKPBbDmqxVXhuNpmm9EROWRtI2SW-nMJ',
            production: 'YOUR-PRODUCTION-APP-ID',
        };
        // In order to get production's app-ID, you will have to send your app to Paypal for approval first
        // For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"):
        //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
        // For production app-ID:
        //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/

        // NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!
        return (
            <PaypalBtn
                env={env}
                client={client}
                currency={currency}
                total={this.state.info.precio}
                locale={locale}
                style={style}
                onError={onError}
                onSuccess={onSuccess}
                onCancel={onCancel}/>
        );
    }
}

PaypalCheckout.propTypes = {
    idVivienda: PropTypes.number.isRequired,
    checkIn: PropTypes.instanceOf(Date),
    checkOut: PropTypes.instanceOf(Date),
    pax: PropTypes.number.isRequired,
    price: PropTypes.number,
    serviceFee: PropTypes.number,
    total: PropTypes.number.isRequired,
    message: PropTypes.string,
    idReserva: PropTypes.number,
};

export default withRouter(PaypalCheckout);