import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Container from "reactstrap/es/Container";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import Translate from "../../lang/Translate";
import {Link} from "react-router-dom";


class UserRouter extends Component {
    render() {

        const {title} = this.props;
        return (
            <Container fluid className="p-4">
                <Row>
                    <Col lg="8" xs="8" className="mx-auto">
                        <Row><Link to="/"> <Translate type={"pagesTitles"} string={"home"}/></Link>
                            {
                                this.props.list
                                    .map(obj =>

                                        <p> /<Link to={obj.link}> <Translate type={"pagesTitles"}
                                                                              string={obj.type}/></Link></p>
                                    )
                            }
                        </Row>
                        <Row>
                            <h1><Translate type={"pagesTitles"} string={title}/></h1>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

UserRouter.propTypes = {
    title: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.object),
};

export default UserRouter;