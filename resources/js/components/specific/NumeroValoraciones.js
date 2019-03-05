import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {translate} from "../../helpers";
import Translate from "../../lang/Translate";

class NumeroValoraciones extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numeroValoraciones: 0,
        }
    }

    render() {
        axios.get('/api/viviendas/' + this.props.idVivienda).then(
            (res) =>
                this.setState({
                    numeroValoraciones: res.data.data.valoracion.length
                })
        );

        return (
            <p>
                ({this.state.numeroValoraciones} {this.state.numeroValoracion === 1 ? <Translate type={'house'} string={'rating'}/> : <Translate type={'house'} string={'ratings'}/>})
            </p>
        );
    }
}

NumeroValoraciones.propTypes = {
    idVivienda: PropTypes.number.isRequired,
};

export default NumeroValoraciones;
