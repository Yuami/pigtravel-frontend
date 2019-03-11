import React, {Component} from 'react';
import Panel from "../components/layout/Panel";
import {Col, Row, Button} from "reactstrap";
import DayPicker, {DateUtils} from "react-day-picker";

class Bookings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDay: {from: new Date(2019, 2, 14), to: new Date(2019, 2, 16)},
        };
    }

    render() {
        return (
            <DayPicker
                selectedDays={this.state.selectedDay}
            />
        );
    }

    // render() {
    //     const reserva = {
    //         start: new Date(2019, 2, 16),
    //         end: new Date(2019, 2, 18)
    //     };
    //     return (
    //         <Panel>
    //             <Row>
    //                 <Col md={2}>
    //                     <img src="/img/clipboard.png" height={100} width={150} alt="casa"/>
    //                 </Col>
    //                 <Col>Texto descriptivo de los servicios de esta casa</Col>
    //                 <Col>
    //                     <DayPicker modifiers={reserva}/>
    //                 </Col>
    //                 <Col><Button>Ir a La Reserva</Button></Col>
    //             </Row>
    //         </Panel>
    //     )
    //         ;
    // }
}

export default Bookings;