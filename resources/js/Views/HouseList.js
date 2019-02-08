import React, {Component} from 'react';
import Container from "reactstrap/es/Container";
import Stars from "../components/Stars";


class HouseList extends Component {

    render() {
        return (
            <Container className="my-5">
                <Stars
                    size={'1em'}
                    color={'secondary'}
                    rating={3}
                    editing
                />
            </Container>
        );
    }
}

export default HouseList;