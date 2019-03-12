import React, {Component} from 'react';

import InfiniteCarousel from 'react-leaf-carousel';
import Translate from "../../lang/Translate";
import MainCard from "../general/MainCard";
import CardImg from "reactstrap/es/CardImg";
import CardBody from "reactstrap/es/CardBody";
import CardTitle from "reactstrap/es/CardTitle";
import CardText from "reactstrap/es/CardText";
import Link from "@material-ui/core/es/Link/Link";
import originalMoment from "moment";
import {extendMoment} from "moment-range";
import { withRouter } from 'react-router-dom';
const moment = extendMoment(originalMoment);

class CarouselInicio extends Component {
    render() {
        const linkButtonData = {
            pathname: "/search",
            state: {
                guests: 1,
                place: 954,
                start: moment().format("YYYY-MM-DD"),
                end: moment().add(1,'week').format("YYYY-MM-DD"),
            }
        };

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
                slidesToScroll={1}
                slidesToShow={3}
                scrollOnDevice={true}
               >

                <Link to={linkButtonData}>
                <MainCard  clickable>
                    <CardImg top src="/img/mallorca.jpg" />
                    <CardBody>
                        <CardTitle>Mallorca</CardTitle>
                        <CardText><Translate type={"carrousel"} string={"es"}/></CardText>
                    </CardBody>
                </MainCard>
                </Link>

                <MainCard clickable>
                    <CardImg top src="/img/madrid.jpg"/>
                    <CardBody>
                        <CardTitle>Madrid</CardTitle>
                        <CardText><Translate type={"carrousel"} string={"es"}/></CardText>
                    </CardBody>
                </MainCard>

                <MainCard clickable>
                    <CardImg top src="/img/barcelona.jpg"/>
                    <CardBody>
                        <CardTitle>Barcelona</CardTitle>
                        <CardText><Translate type={"carrousel"} string={"es"}/></CardText>
                    </CardBody>
                </MainCard>

                <MainCard clickable>
                    <CardImg top src="/img/sevilla.jpg"/>
                    <CardBody>
                        <CardTitle>Sevilla</CardTitle>
                        <CardText><Translate type={"carrousel"} string={"es"}/></CardText>
                    </CardBody>
                </MainCard>

                <MainCard clickable>
                    <CardImg top src="/img/murcia.jpg"/>
                    <CardBody>
                        <CardTitle>Murcia</CardTitle>
                        <CardText><Translate type={"carrousel"} string={"es"}/></CardText>
                    </CardBody>
                </MainCard>

                <MainCard clickable>
                    <CardImg top src="/img/galicia.jpg"/>
                    <CardBody>
                        <CardTitle>Galicia</CardTitle>
                        <CardText><Translate type={"carrousel"} string={"es"}/></CardText>
                    </CardBody>
                </MainCard>

            </InfiniteCarousel>

        )
    }
}

export default withRouter(CarouselInicio);