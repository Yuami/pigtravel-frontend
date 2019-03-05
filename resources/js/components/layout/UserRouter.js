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
                        <Row>
                            <h1><Translate type={"pagesTitles"} string={title}/></h1>
                        </Row>
                        <Row><Link to="/"> <Translate type={"pagesTitles"} string={"home"}/></Link>
                            {<p>&nbsp;/ <Link to={this.props.list["link"]}>
                                            <Translate type={"pagesTitles"} string={this.props.list["type"]}/></Link></p>}
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

UserRouter.propTypes = {
    title: PropTypes.string.isRequired,
    list: PropTypes.object.isRequired,
};

export default UserRouter;