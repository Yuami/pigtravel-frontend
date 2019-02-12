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
                img: "https://images.dwell.com/photos/6328431439726800896/6445880622670512128/large.jpg",
                price: "95",
                type: "Chalet",
                rating: "2"
            },
            {
                id: "2",
                name: "Mi casa to chuli",
                img: "https://img1.southernliving.timeinc.net/sites/default/files/styles/medium_2x/public/image/2018/04/main/6401_rusty_ridge_dr_austin_tx-print-001-16-exterior_front-2700x1802-300dpi.jpg?itok=mMCNje_M",
                price: "95",
                type: "Chalet",
                rating: "5"
            },
            {
                id: "3",
                name: "Mi casa to chuli",
                img: "https://www.porterdavis.com.au/~/media/homes/verona/22/facades/verona-island-facade-classic.jpg?w=582&amp;h=320&amp;crop=1",
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