import React, {Component} from 'react';
import Container from "reactstrap/es/Container";
import Stars from "../components/Stars";
import HouseCard from "../components/general/HouseCard";
import Col from "reactstrap/es/Col";
import Row from "reactstrap/es/Row";


class HouseList extends Component {

    render() {
        return (
            <Container className="my-5" fluid>
                <Row>
                    <Col xs="12" sm="6" md="4" lg="3" xl="3" className="my-3">
                        <HouseCard shadow/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default HouseList;