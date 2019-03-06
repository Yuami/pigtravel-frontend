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

        this.state = {
            img: null,
            persona: {
                nombre: "",
                apellido1: "",
                correo: "",
                dni: "",
                tlf: "",
                fechaNacimiento: "",
            },
        }
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
                    });
            }
        );

        axios.get(urlPersonaImg).then(
            (res) => {
                this.setState({
                    img: res.data.back + res.data.foto.path
                });
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
                        <Col lg={4} className={'offset-md-1'}>
                            <Panel id={'profile'}>
                                <h4>PERFIL</h4>
                                <Row className={"mt-4"}>
                                    <Col xs={5}>
                                        <Image src={this.state.img} className={'w-75'} roundedCircle/>
                                    </Col>
                                    <Col xs={7} className={"mt-3"}>
                                        <h4>{this.state.persona.nombre + " " + this.state.persona.apellido1}</h4>
                                        <h5>{"ID Cliente: " + this.state.persona.id}</h5>
                                    </Col>
                                </Row>
                            </Panel>
                            <Panel id={'options'}>
                                <h4>OPCIONES DE CLIENTE</h4>

                            </Panel>
                        </Col>
                        <Col lg={4} className={'offset-md-1'}>
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