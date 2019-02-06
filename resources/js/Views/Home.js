import React, {Component} from 'react';
import Translate from "../lang/Translate";
import TitleInicio from "../components/specific/TitleInicio";
import Searcher from "../components/layout/Searcher";
import CarouselInicio from "../components/layout/CarouselInicio";

class Home extends Component {
    render() {
        return (
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
            </div>
        );
    }
}

export default Home;