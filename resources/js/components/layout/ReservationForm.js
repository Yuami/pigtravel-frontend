import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Translate from "../../lang/Translate";
import Panel from "./Panel";

class ReservationForm extends Component {

    render() {
        const data = [
            {
                title: 'First Title',
                text: 'First Text'
            },
            {
                title: 'Second Title',
                text: 'Second Text'
            }];

        return (
            <Panel id={"reservationForm"} body={"Body"} data={data}/>
            //            <h2><Translate string={'house-rules'} type={'reservation'}/></h2>
        );
    }
}

ReservationForm.propTypes = {
    xs: PropTypes.number,
    md: PropTypes.number,
};

export default ReservationForm;