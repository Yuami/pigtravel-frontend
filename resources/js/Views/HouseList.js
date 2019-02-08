import React, {Component} from 'react';
import Container from "reactstrap/es/Container";
import Stars from "../components/Stars";


class HouseList extends Component {

    render() {
        return (
            <Container className="my-5">
                <Stars
                    size={'fa-lg'}
                    color={'primary'}
                    rating={3.5}
                    editing
                />
            </Container>
        );
    }
}

export default HouseList;