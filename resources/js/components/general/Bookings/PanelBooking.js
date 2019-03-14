import React, {Component} from 'react';
import Panel from "../../layout/Panel";
import {Col, Row} from "reactstrap";
import {Link} from "react-router-dom";
import Translate from "../../../lang/Translate";
import axios from "axios";
import ImgBooking from "./ImgBooking";
import TextBooking from "./TextBooking";
import BtnBooking from "./BtnBooking";
import PropTypes from "prop-types";

const back = "http://back.pig.test";

class PanelBooking extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url: undefined
        }
    }

    componentWillMount() {
        axios.get('/api/viviendas/' + this.props.idV).then((response) => {
            if (response.data.data.fotos[0].foto.back) {
                this.setState({url: back + response.data.data.fotos[0].foto.path});
            } else {
                this.setState({url: response.data.data.fotos[0].foto.path});
            }
        })
    }

    render() {
        return (
            <Panel>
                <Row>
                    <ImgBooking url={this.state.url} alt={this.props.alt}/>
                    <TextBooking text={this.props.text} text2={this.props.text2} icon={this.props.icon}
                                 icon2={this.props.icon2} textData={this.props.textData}
                                 textData2={this.props.textData2}/>
                    <TextBooking text={this.props.text3} text2={this.props.text4} icon={this.props.icon3}
                                 icon2={this.props.icon4} textData={this.props.textData3}
                                 textData2={this.props.textData4}/>
                    <BtnBooking bookingID={this.props.bookingID}/>
                </Row>
            </Panel>
        );
    }
}

Panel
    .propType = {
    idV: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    bookingID: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    text2: PropTypes.string.isRequired,
    text3: PropTypes.string.isRequired,
    text4: PropTypes.string.isRequired,
    icon: PropTypes.string,
    icon2: PropTypes.string,
    icon3: PropTypes.string,
    icon4: PropTypes.string,
    textData: PropTypes.string.isRequired,
    textData2: PropTypes.string.isRequired,
    textData3: PropTypes.string.isRequired,
    textData4: PropTypes.string.isRequired,
};
export default PanelBooking;