import React, {Component} from 'react';
import Translate from "../lang/Translate";
import TitleInicio from "../components/specific/TitleInicio";
import Searcher from "../components/layout/Searcher";
import CarouselInicio from "../components/layout/CarouselInicio";
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';
import {LocaleContext} from "../LocaleContext";
import {translate} from "../helpers";
import FormGroup from "@material-ui/core/es/FormGroup/FormGroup";
import {withRouter} from "react-router-dom";
import ForgotPasswordModal from "../components/specific/ForgotPasswordModal";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            alert: Cookies.get('alert'),
            pwd: Cookies.get('pwd')
        };
    }

    componentWillMount() {
        if (this.state.alert !== undefined) {
            Cookies.remove('alert');
            Cookies.remove('pwd')
        }
    }


    static contextType = LocaleContext;

    render() {
        document.title = translate(this.context, 'home', 'titles');

        var meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = translate(this.context, 'home', 'description');
        document.head.appendChild(meta);

        const pwd = this.state.pwd && <ForgotPasswordModal token={this.state.pwd}/>


        if (this.state.alert !== undefined)
            Swal.fire({
                title: translate(this.context, 'title', 'verify'),
                text: translate(this.context, 'text', 'verify'),
                type: 'success',
                confirmButtonText: translate(this.context, 'confirmButtonText', 'verify'),
            });

        return (
            <>
                <div className="mb-5">
                    <div className="jumbotron_cont">
                        <TitleInicio/>
                        <Searcher/>
                    </div>
                    <div id="recomendacionCiudades">
                        <div id="textoRecomendacion">
                            <h2><Translate type={"carrousel"} string={"recomendacion"}/></h2>
                        </div>
                    </div>
                    <CarouselInicio/>
                    {pwd}
                </div>
            </>
        );
    }
}

export default Home;