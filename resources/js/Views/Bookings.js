import React, {Component} from 'react';
import Panel from "../components/layout/Panel";
import {Col, Row, Button} from "reactstrap";
import DayPicker from "react-day-picker";
import axios from "axios";

class Bookings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDay: {
                from: new Date(2019, 2, 14),
                to: new Date(2019, 2, 16)
            },
        };
    }

    componentWillMount() {
        axios.get('/bookings').then((response) => {
            console.log(response);
            this.setState({selectedDay: response.data});
        })
    }

    render() {
        return (
            <Panel>
                <Row>
                    <Col md={2}>
                        <img src="/img/clipboard.png" height={100} width={150} alt="casa"/>
                    </Col>
                    <Col>Texto descriptivo de los servicios de esta casa</Col>
                    <Col>
                        <DayPicker
                            selectedDays={this.state.selectedDay}
                        />
                    </Col>
                    <Col><Button>Ir a La Reserva</Button></Col>
                </Row>
            </Panel>
        )
            ;
    }
}

export default Bookings;