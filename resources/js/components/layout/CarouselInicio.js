import React, {Component} from 'react';

import InfiniteCarousel from 'react-leaf-carousel';
import Translate from "../../lang/Translate";
import MainCard from "../general/MainCard";
import CardImg from "reactstrap/es/CardImg";
import CardBody from "reactstrap/es/CardBody";
import CardTitle from "reactstrap/es/CardTitle";
import CardText from "reactstrap/es/CardText";

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

                <MainCard clickable>
                    <CardImg top src="/img/mallorca.jpg"/>
                    <CardBody>
                        <CardTitle>Mallorca</CardTitle>
                        <CardText><Translate type={"carrousel"} string={"es"}/></CardText>
                    </CardBody>
                </MainCard>

                <MainCard clickable>
                    <CardImg top src="/img/paris.jpg"/>
                    <CardBody>
                        <CardTitle>París</CardTitle>
                        <CardText><Translate type={"carrousel"} string={"fr"}/></CardText>
                    </CardBody>
                </MainCard>

                <MainCard clickable>
                    <CardImg top src="/img/maldivas.jpg"/>
                    <CardBody>
                        <CardTitle>Malé</CardTitle>
                        <CardText><Translate type={"carrousel"} string={"mv"}/></CardText>
                    </CardBody>
                </MainCard>

                <MainCard clickable>
                    <CardImg top src="/img/mallorca.jpg"/>
                    <CardBody>
                        <CardTitle>Berlin</CardTitle>
                        <CardText><Translate type={"carrousel"} string={"gr"}/></CardText>
                    </CardBody>
                </MainCard>
            </InfiniteCarousel>

        )
    }
}

export default CarouselInicio;