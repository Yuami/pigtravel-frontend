import React, {Component} from 'react';

import InfiniteCarousel from 'react-leaf-carousel';
import Translate from "../../lang/Translate";

class CarouselInicio extends Component {
    render() {
        return (
            <InfiniteCarousel
                breakpoints={[
                    {
                        breakpoint: 500,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                        },
                    },
                ]}
                dots={false}
                showSides={true}
                sidesOpacity={0}
                sideSize={.5}
                slidesToScroll={3}
                slidesToShow={3}
                scrollOnDevice={true}>
                <div className="card">
                    <img className="card-img-top img-fluid" src="img/mallorca.jpg"
                         alt="Card image cap"></img>
                        <div className="card-body">
                            <h4 className="card-title">Mallorca</h4>
                            <p className="card-text"><Translate type={"carrousel"} string={"es"}/></p>
                        </div>
                </div>
                <div className="card">
                    <img className="card-img-top img-fluid" src="img/paris.jpg"
                         alt="Card image cap"></img>
                    <div className="card-body">
                        <h4 className="card-title">París</h4>
                        <p className="card-text"><Translate type={"carrousel"} string={"fr"}/></p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top img-fluid" src="img/mallorca.jpg"
                         alt="Card image cap"></img>
                    <div className="card-body">
                        <h4 className="card-title">Berlín</h4>
                        <p className="card-text"><Translate type={"carrousel"} string={"gr"}/></p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top img-fluid" src="img/maldivas.jpg"
                         alt="Card image cap"></img>
                    <div className="card-body">
                        <h4 className="card-title">Malé</h4>
                        <p className="card-text"><Translate type={"carrousel"} string={"mv"}/></p>
                    </div>
                </div>
            </InfiniteCarousel>

        )
    }
};
export default CarouselInicio;