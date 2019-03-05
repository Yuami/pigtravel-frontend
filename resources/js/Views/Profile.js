import React, {Component} from 'react';
import Container from "react-bootstrap/es/Container";
import UserRouter from "../components/layout/UserRouter";
import Col from "reactstrap/es/Col";
import Row from "reactstrap/es/Row";
import Panel from "../components/layout/Panel";
import axios from "axios"
import Image from "react-bootstrap/Image";

class Profile extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {
        const id = this.props.match.params.id;
        const urlPersona = "/api/persona/" + id;
        const urlPersonaImg = urlPersona + "/img";

        let $persona = [];
        axios.get(urlPersona).then(
            (res) => {
                this.setState({
                    persona: res.data
                })
            }
        );

        axios.get(urlPersonaImg).then(
            (res) => {
                this.setState({
                    persona: res.data
                })
                $persona['img'] = res.data.back + res.data.foto.path;
            }
        );

        this.setState({
            persona: $persona
        });

    }

    render() {
        const profile =
            {
                type: 'profile',
                link: '/profile'
            };

        console.log(this.state);
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
                                        <Image src="" roundedCircle />
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