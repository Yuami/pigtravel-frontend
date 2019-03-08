import React, {Component} from 'react';
import Container from "react-bootstrap/es/Container";
import UserRouter from "../components/layout/UserRouter";
import Col from "reactstrap/es/Col";
import Row from "reactstrap/es/Row";
import Panel from "../components/layout/Panel";
import axios from "axios"
import Image from "react-bootstrap/Image";
import LanguagePicker from "../components/LanguagePicker";
import {Input, Nav, UncontrolledDropdown} from "reactstrap";
import {withRouter} from "react-router-dom";

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            img: null,
            id: this.props.match.params.id,
            persona: {
                nombre: "",
                apellido1: "",
                correo: "",
                dni: "",
                tlf: "",
                fechaNacimiento: "",
            }
        };

        this.uploadImage = this.uploadImage.bind(this);
    }

    getUrlPersona() {
        return "/api/persona/" + this.state.id;
    }

    componentDidMount() {
        axios.get(this.getUrlPersona()).then((res) =>
            this.setState({persona: res.data}));

        this.getProfileImage();
    }

    getProfileImage = () => {
        axios.get(this.getUrlPersona() + "/img").then(
            (res) => {
                this.setState({
                    img: res.data.back + res.data.foto.path
                });
            }
        );
    };

    uploadImage(event) {
        let file = event.target.files[0];

        if (file) {
            let data = new FormData();
            data.append('file', file);
            axios.post('/api/profile/' + this.state.id + '/img', data, {
                header: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(() => {
                this.getProfileImage();
            });
        }
    }

    render() {
        const profile =
            {
                type: 'profile',
                link: '/profile'
            };

        console.log(this.state.img);

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
                                        <Row>
                                            <Image className={'ml-3'} id={'profileImg'} src={this.state.img}
                                                   roundedCircle/>
                                        </Row>
                                        <Row>

                                        </Row>
                                    </Col>
                                    <Col className={"mt-3"}>
                                        <h4>{this.state.persona.nombre + " " + this.state.persona.apellido1}</h4>
                                        <h5>{"ID Cliente: " + this.state.persona.id}</h5>
                                    </Col>
                                </Row>
                                <Row>
                                    <div className="custom-file mt-3">
                                        <input onChange={this.uploadImage} type="file" id="customFile"/>
                                    </div>
                                </Row>
                            </Panel>
                            <Panel id={'options'}>
                                <h4>OPCIONES DE CLIENTE</h4>
                                <Row>
                                    <Col xs={5}>
                                        <h5 className={'mt-3'}>{"IDIOMA: "}</h5>
                                    </Col>
                                    <Col xs={7}>
                                        <UncontrolledDropdown>
                                            <LanguagePicker changeLanguage={this.props.changeLanguage}/>
                                        </UncontrolledDropdown>
                                    </Col>
                                </Row>
                            </Panel>
                        </Col>
                        <Col lg={4} className={'offset-md-1'}>
                            <Panel id={'email'}>
                                <h4>CORREO ELECTRONICO</h4>
                                <Row className={'mt-3'}>
                                    <Col>
                                        <Input type="email" name="email" id="email"/>
                                    </Col>
                                </Row>
                            </Panel>
                            <Panel id={'phone'}>
                                <h4>TELEFONO</h4>
                                <Row className={'mt-3'}>
                                    <Col>
                                        <Input type="number" name="telephone" id="telephone"/>
                                    </Col>
                                </Row>
                            </Panel>
                            <Panel id={'email'}>
                                <h4>SEGURIDAD AVANZADA</h4>
                                <Row className={'mt-3'}>

                                </Row>
                            </Panel>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }

}

export default withRouter(Profile);