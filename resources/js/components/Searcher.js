import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Col,Input,Button} from 'reactstrap';
 export default class Searcher extends Component {
    render() {
        return (
            <div className="buscador col-lg-8" >
                <div className="inputContainer col-lg-4">
                    <label>
                        <i className="fa fa-globe"></i>
                    </label>
                    <div>
                        <input className="form-control" id="autocomplete" type="text" placeholder="¿Donde quieres ir?"
                                name="location"></input>
                    </div>
                </div>
                <div className="inputContainer col-lg-4">
                    <div>
                         <label><i className="fa fa-calendar"></i></label>
                         <input type="date"/>
                    </div>
                    <div>
                        <label><i className="fa fa-calendar"></i></label>
                        <input type="date"/>
                    </div>
                </div>
                <div className="inputContainer col-lg-3">
                    <label><i className="fa fa-user"></i></label>
                    <div>
                        <select>
                            <option value="" selected>Huespedes</option>
                            <option value="1">1 Huesped</option>
                            <option value="2">2 Huespedes</option>
                            <option value="3">3 Huespedes</option>
                        </select>
                    </div>
                </div>

                <div className="inputContainer col-lg-1">
                    <button type="button" className="btn boton"><i className="fa fa-search fa-2x "></i></button>
                </div>
            </div>
        );
    }
}

if (document.getElementById("searcher")) {
    ReactDOM.render(<Searcher/>, document.getElementById("searcher"));
}
