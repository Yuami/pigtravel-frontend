import React, {Component} from 'react';
import Translate from "../../lang/Translate";


class TitleInicio extends Component {
    render() {
        return (
            <h1 className="HeadLine"> <Translate string={'titleIndex'} type={'index'}/></h1>
        );
    }
}

export default TitleInicio;
