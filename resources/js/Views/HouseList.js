import React, {Component} from 'react';
import Container from "reactstrap/es/Container";
import HouseCard from "../components/general/HouseCard";
import Col from "reactstrap/es/Col";
import Row from "reactstrap/es/Row";
import PropTypes from "prop-types"


class HouseList extends Component {

    state = {
        houses: [
            {
                id: "1",
                name: "Mi casa to chuli",
                img: "https://picsum.photos/200/300",
                price: "95",
                type: "Chalet",
                rating: "2"
            },
            {
                id: "2",
                name: "Mi casa to chuli",
                img: "https://picsum.photos/200/300",
                price: "95",
                type: "Chalet",
                rating: "5"
            },
            {
                id: "3",
                name: "Mi casa to chuli",
                img: "https://picsum.photos/200/300",
                price: "95",
                type: "Chalet",
                rating: "1"
            }
        ]
    };

    render() {
        const {houses} = this.state;

        return (
            <Container className="my-5" fluid>
                <Row>
                    {
                        houses.map(house =>
                            <Col key={house.id} xs="12" sm="6" md="4" lg="3" xl="3" className="my-3">
                                <HouseCard house={house} clickable/>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        );
    }
}

export default HouseList;