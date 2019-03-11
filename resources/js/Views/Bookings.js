import React, {Component} from 'react';
import Panel from "../components/layout/Panel";
import {Col, Row, Button} from "reactstrap";
import DayPicker from 'react-day-picker';
import axios from "axios";


class Bookings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookings: []
        }
        ;
    }

    componentWillMount() {
        axios.get('/api/bookings').then((response) => {
            this.setState({bookings: response.data});
        })
    }

    render() {

        return (
            <Panel>

                {this.state.bookings.map((booking, i) => {
                    const highlighted = {
                        from: new Date(booking.checkIn),
                        to: new Date(booking.checkOut)
                    };
                    return (
                        <Row key={i}>
                            <Col md={2}>
                                <img src="/img/clipboard.png" height={100} width={150} alt="casa"/>
                            </Col>
                            <Col>Texto descriptivo de los servicios de esta casa </Col>
                            <Col>
                                <DayPicker className="bookings" selectedDays={highlighted}
                                           month={new Date(highlighted.from.getFullYear(), highlighted.from.getMonth())}/>
                            </Col>
                            <Col>
                                <Button>Ir a La Reserva</Button>
                            </Col>
                        </Row>
                    )
                })}

            </Panel>
        )
            ;
    }
}

export default Bookings;