import React, {Component} from 'react';
import Translate from "../lang/Translate";
import TitleInicio from "../components/specific/TitleInicio";
import Searcher from "../components/layout/Searcher";
import CarouselInicio from "../components/layout/CarouselInicio";
import {ToastContainer, toast} from 'react-toastify';
import Main from "../components/Main";

class Home extends Component {
    render() {
        let notify = () => {
            toast("Lorem ipsum dolor");
        };

        return (
            <div className="mb-5">
                <div>
                    <button onClick={notify}>Notify</button>
                    <ToastContainer
                        position="top-left"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnVisibilityChange
                        draggable
                        pauseOnHover
                    />
                </div>
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
Main.Prop

export default Home;