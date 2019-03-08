import React, {Component} from 'react'
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";
import Translate from "../../lang/Translate";
import axios from "axios";
import {AuthContext} from "../../AuthContext";

class DropdownPerfil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foto: null
        };
    }

    static contextType = AuthContext;

    renderImg() {
        axios.get('/api/persona/' + this.context[1] + '/img').then((response) => {
                this.setState({foto: response.data.back + response.data.foto.path});
            }
        );
        const img = <img src={this.state.foto} className="userImg"/>;
        return (
            <AuthContext.Consumer>
                {isAuth => {
                    return img;
                }}
            </AuthContext.Consumer>
        );
    }

    render() {
        return (
            <>
                <DropdownToggle className="p-0" nav caret>
                    {this.renderImg()}
                </DropdownToggle>
                <DropdownMenu right>
                    <a>
                        <DropdownItem>
                            <i className="fas fa-envelope"/> <Translate type={'userDropdown'} string={'inbox'}/>
                        </DropdownItem>
                        <DropdownItem>
                            <i className="fas fa-suitcase"/> <Translate type={'userDropdown'} string={'bookings'}/>
                        </DropdownItem>
                        <DropdownItem>
                            <i className="fas fa-user"/> <Translate type={'userDropdown'} string={'profile'}/>
                        </DropdownItem>
                        <DropdownItem>
                            <i className="fas fa-cog"/> <Translate type={'userDropdown'} string={'account'}/>
                        </DropdownItem>

                        <DropdownItem tag="a" href="/logout">
                            <i className="fas fa-sign-out-alt"/> <Translate type={'userDropdown'} string={'exit'}/>
                        </DropdownItem>
                    </a>
                </DropdownMenu>
            </>
        )
    }
}

export default DropdownPerfil;