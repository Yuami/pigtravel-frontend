import React, {Component} from 'react';
import {Col, Row} from "reactstrap";
import axios from "axios";
import moment from "moment";
import {Link} from "react-router-dom";
import Translate from "../lang/Translate";
import Container from "react-bootstrap/es/Container";
import PanelBooking from "../components/general/Bookings/PanelBooking";


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
            <Container>

                {this.state.bookings.map((booking, i) => {
                    const back = "http://admin.pigtravel.top";
                    let url = "";
                    axios.get('/api/viviendas/' + booking.idVivienda).then((response) => {
                        console.log(response.data.data);
                        if (response.data.data.fotos[0].foto.back) {
                            url = back + response.data.data.fotos[0].foto.path;
                        } else {
                            url = response.data.data.fotos[0].foto.path;
                        }
                        console.log(url);
                    });
                    return (
                        <PanelBooking />
                    )
                })}


            </Container>
        )
            ;
    }
}

export default Bookings;