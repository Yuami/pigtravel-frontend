import React, {Component} from 'react';
import axios from "axios";
import posed from "react-pose";
import * as PropTypes from "prop-types";

const MoveImg = posed.img({
    hoverable: true,
    init: {scale: 1},
    hover: {scale: 1.2}
});


class ModifyPersona extends Component {

    constructor(props){
        super(props);

        this.state = {
            edit: true,
            text: this.props.info,
        };
    }

    change = (event) => {
        this.setState({text: event.target.value})
    };

    toggleEdit = () => {
        this.setState({edit: !this.state.edit})
    };

    acceptNew = () => {
        this.toggleEdit();
    };

    declineNew = () => {
        this.setState({text: this.props.info});
        this.toggleEdit();
    };

    componentDidMount() {
        this.setState({text: this.props.info})
    }


    render() {

        const value = this.state.text ? this.state.text : this.props.info;
        return (
            this.state.edit ?
                <div className="d-flex align-items-center justify-content-between border-bottom border-info">
                    <h4 className="text-dark m-0">
                        {value}
                    </h4>
                    <MoveImg onClick={this.toggleEdit} width="25px" height="25px" src="/img/edit.svg"
                             alt="edit"/>
                </div>
                :
                <div className="d-flex align-items-center border-bottom border-info">
                    <input onChange={this.change} type="text"
                           className="border-0 w-100 bg-transparent" value={value}/>
                    <MoveImg className="mx-1" onClick={this.acceptNew} width="25px" height="25px"
                             src="/img/tick.svg"
                             alt="edit"/>
                    <MoveImg onClick={this.declineNew} width="25px" height="25px" src="/img/close.svg"
                             alt="edit"/>
                </div>
        );

    }
}

ModifyPersona.propTypes = {
    info: PropTypes.string.isRequired,
};

export default ModifyPersona;