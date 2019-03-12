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
import {Link, withRouter} from "react-router-dom";
import Swal from "sweetalert2";
import {translate} from "../helpers";
import * as PropTypes from "prop-types";
import Translate from "../lang/Translate";
import ProfileImg from "../components/general/ProfileImg";

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            img: null,
            id: parseInt(this.props.match.params.id),
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
                this.saveAlert();
            });
        }
    }

    saveAlert() {
        Swal.fire({
            title: translate(this.context, 'title', 'profile'),
            text: translate(this.context, 'text', 'profile'),
            type: 'success',
            confirmButtonText: translate(this.context, 'confirmButtonText', 'profile'),
        });
    }

    selfProfile() {
        return <Row>
            <Col lg={4} className={'offset-md-1'}>
                <Panel id={'profile'}>
                    <h4 className={'text-uppercase'}><Translate type={'profile'} string={'profile'}/></h4>
                    <Row className={"mt-4"}>
                        <Col xs={5}>
                            <Row>
                                <ProfileImg id="profileImg" idPersona={this.state.id} className="ml-3"/>
                            </Row>
                            <Row>

                            </Row>
                        </Col>
                        <Col className={"mt-3"}>
                            <h4>{this.state.persona.nombre + " " + this.state.persona.apellido1}</h4>
                            <h5><Translate type={'profile'} string={'id'}/> {this.state.persona.id}</h5>
                        </Col>
                    </Row>
                    <Row>
                        <div className="custom-file mt-3">
                            <input onChange={this.uploadImage} type="file" id="customFile"/>
                        </div>
                    </Row>
                </Panel>
                <Panel id={'options'}>
                    <h4 className={'text-uppercase'}><Translate type={'profile'} string={'options'}/></h4>
                    <Row>
                        <Col xs={5}>
                            <h5 className={'mt-3 text-uppercase'}><Translate type={'profile'} string={'language'}/></h5>
                        </Col>
                        <Col xs={7}>
                            <Row>
                                <UncontrolledDropdown>
                                    <LanguagePicker changeLanguage={this.props.changeLanguage}/>
                                </UncontrolledDropdown>
                            </Row>

                        </Col>
                        <Col>
                            <Link to="/logout" className="text-danger"><Translate type={'profile'} string={'logout'}/></Link>
                        </Col>
                    </Row>
                </Panel>
            </Col>
            <Col lg={4} className={'offset-md-1'}>
                <Panel id={'email'}>
                    <h4 className={'text-uppercase'}><Translate type={'profile'} string={'email'}/></h4>
                    <Row className={'mt-3'}>
                        <Col>
                            <Input type="email" name="email" id="email" value={this.state.persona.correo}/>
                        </Col>
                    </Row>
                </Panel>
                <Panel id={'phone'}>
                    <h4 className={'text-uppercase'}><Translate type={'profile'} string={'tlf'}/></h4>
                    <Row className={'mt-3'}>
                        <Col>
                            <Input type="number" name="telephone" id="telephone"
                                   value={this.state.persona.tlf}/>
                        </Col>
                    </Row>
                </Panel>
                <Panel id={'email'}>
                    <h4 className={'text-uppercase'}><Translate type={'profile'} string={'advanced'}/></h4>
                    <Row className={'mt-3'}>

                    </Row>
                </Panel>
            </Col>
        </Row>
    }

    outterProfile() {
        return <Row>
            <Col md={{"size": 4}}>
                <Panel id={'profile'}>
                    <h4 className={'text-uppercase'}><Translate type={'profile'} string={'profile'}/></h4>
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
                            <h5><Translate type={'profile'} string={'id'}/> {this.state.persona.id}</h5>
                        </Col>
                    </Row>
                </Panel>
            </Col>
            <Col md={8}>
                <Panel id={'reviews'}>
                <h4 className={'text-uppercase'}><Translate type={'profile'} string={'review'}/> </h4>
                </Panel>
            </Col>
        </Row>
    }

    render() {
        const profile =
            {
                type: 'profile',
                link: '/profile'
            };

        console.log({
            authId: this.props.authId,
            id: this.state.id
        })

        const showProfile = this.props.authId === this.state.id ? this.selfProfile() : this.outterProfile();

        return (
            <>
                <UserRouter title={'profile'} list={profile}/>
                <Container className={'pt-5'}>
                    {showProfile}
                </Container>
            </>
        );
    }

}

Profile.propTypes = {
    authId: PropTypes.number,
};

export default withRouter(Profile);