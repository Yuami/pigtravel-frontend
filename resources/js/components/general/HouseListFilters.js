import React, {Component} from 'react';
import {Button, Modal} from "reactstrap";
import Translate from "../../lang/Translate";
import ModalHeader from "reactstrap/es/ModalHeader";
import ModalBody from "reactstrap/es/ModalBody";
import ModalFooter from "reactstrap/es/ModalFooter";
import axios from "axios";
import CustomInput from "reactstrap/es/CustomInput";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import Input from "reactstrap/es/Input";
import Label from "reactstrap/es/Label";
import FormGroup from "reactstrap/es/FormGroup";

class HouseListFilters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            servicios: []
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    componentWillMount() {
        axios.get("/api/servicios")
            .then(r => r.data.filter(s => s.nombre != null))
            .then(filtered => filtered.map(item => {
                return {...item, active: false}
            }))
            .then(res => this.setState({servicios: res}))
            .catch(e => console.log(e, "HouseList service error"));
    }

    render() {
        const servicios = this.state.servicios.map(servicio => {
            return (
                <Col sm="6" key={servicio.id}>
                    <FormGroup check inline>
                        <Label>
                            <span style={{cursor: "pointer"}}>
                                <Input type="checkbox" id={`checkbox-servicio-${servicio.id}`}/> {servicio.nombre}
                            </span>
                        </Label>
                    </FormGroup>
                </Col>)
        });

        return (
            <>
                <Button color="primary" block onClick={this.toggle}>
                    <span style={{fontSize: "18px"}}>
                        <Translate type="general" string="filters"/>
                    </span>
                </Button>
                <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader><Translate type="general" string="filters"/></ModalHeader>
                    <ModalBody>
                        <h3><Translate type="houselist" string="service"/></h3>
                        <Row>
                            {servicios}
                        </Row>
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </Modal>
            </>
        );
    }
}

export default HouseListFilters;