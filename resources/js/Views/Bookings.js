import React, {Component} from 'react';
import Panel from "../components/layout/Panel";
import {Col, Row, Button} from "reactstrap";
import DayPicker from "react-day-picker";
import 'react-day-picker/lib/style.css';

class Bookings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inicio: '2019/03/05',
            fin: '2019/03/07'
        }

    }

    render() {
        const reserva = {
            from: this.state.inicio,
            to: this.state.fin
        };
        return (
            <Panel>
                <Row>
                    <Col md={2}>
                        <img src="/img/clipboard.png" height={100} width={150} alt="casa"/>
                    </Col>
                    <Col>Texto descriptivo de los servicios de esta casa</Col>
                    <Col>
                        <DayPicker modifiers={reserva}/>
                    </Col>
                    <Col><Button>Ir a La Reserva</Button></Col>
                </Row>
            </Panel>
        )
            ;
    }
}

export default Bookings;