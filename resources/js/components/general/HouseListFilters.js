import React, {Component} from 'react';
import {Button} from "reactstrap";
import Translate from "../../lang/Translate";
import axios from "axios";

class HouseListFilters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            servicios: [],
            isVisible: false
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
            .catch(e => console.log(e, "Search service error"));
    }

    updateModal(value) {
        this.setState({
            isVisible: value
        })
    }

    render() {

        return (
            <Button color="primary" block className="py-2" onClick={this.updateModal(true)}>
            <span style={{fontSize: "18px"}}>
            <Translate type="general" string="filters"/>
            </span>
            </Button>
        );
    }
}

export default HouseListFilters;