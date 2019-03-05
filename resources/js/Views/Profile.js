import React, {Component} from 'react';
import Container from "react-bootstrap/es/Container";
import UserRouter from "../components/layout/UserRouter";
import Col from "reactstrap/es/Col";
import Row from "reactstrap/es/Row";
import Panel from "../components/layout/Panel";
import axios from "axios"

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
        }
    }

    componentWillMount() {
        var $persona = [];
        axios.get("/api/persona/" + this.state.id).then(
            (res) => {
                $persona = res.data;
            }
        );

        axios.get("/api/persona/" + this.state.id + "/img").then(
            (res) => {
                console.log(res.data);
                $persona['img'] = res.data.back + res.data.foto.path;
                debugger;
            }
        );
    }

    render() {
        const profile =
            {
                type: 'profile',
                link: '/profile'
            };

        return (
            <>
                <UserRouter title={'profile'} list={profile}/>
                <Container className={'pt-5'}>
                    <Row>
                        <Col md={4} className={'offset-md-1'}>
                            <Panel id={'profile'}>
                                <h4>Perfil</h4>
                                <Row>
                                    <Col xs={5}>

                                    </Col>
                                    <Col xs={7}>

                                    </Col>
                                </Row>
                            </Panel>
                            <Panel id={'options'}>

                            </Panel>
                        </Col>
                        <Col md={4} className={'offset-md-1'}>
                            <Panel id={'email'}>

                            </Panel>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Profile;