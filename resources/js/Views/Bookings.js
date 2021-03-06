import React, {Component} from 'react';
import axios from "axios";
import Translate from "../lang/Translate";
import Container from "react-bootstrap/es/Container";
import PanelBooking from "../components/general/Bookings/PanelBooking";


class Bookings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookings: []
        };
    }

    componentWillMount() {
        axios.get('/api/bookings').then((response) => {
            this.setState({bookings: response.data.data});
        })
    }

    render() {
        return (
            <Container className="mt-5">

                {this.state.bookings.map((booking, i) => {
                    return (
                        <PanelBooking key={i} idV={booking.idVivienda}
                                      text={<Translate type={'bookings'} string={'precio'}/>}
                                      text2={<Translate type={'bookings'} string={'personas'}/>}
                                      text3={<Translate type={'bookings'} string={'entrada'}/>}
                                      text4={<Translate type={'bookings'} string={'salida'}/>}
                                      icon={'fas fa-coins'} icon2={'fas fa-male'}
                                      icon3={'far fa-arrow-alt-circle-right'} icon4={'fas fa-arrow-alt-circle-left'}
                                      textData={booking.total} textData2={booking.clientes}
                                      textData3={booking.checkIn} textData4={booking.checkOut} bookingID={booking.id}
                                      estado={<Translate type={'bookings'} string={'estado-' + booking.estados.ultimo.id}/>}
                                      alt={'casa'}/>
                    )
                })}


            </Container>
        )
            ;
    }
}

export default Bookings;