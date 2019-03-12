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

class PanelBooking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idV: null
        }
        ;
    }

    componentWillMount() {
        axios.get('/api/viviendas').then((response) => {
            this.setState({bookings: response.data});
        })
    }

    render() {

        return (
            <Panel>
                <Row key={i}>
                    <ImgBooking url={this.props.url} alt={this.props.alt}/>
                    <TextBooking text={this.props.text} text2={this.props.text2} icon={this.props.icon}
                                 icon2={this.props.icon2} textData={this.props.textData}
                                 textData2={this.props.textData2}/>
                    <TextBooking text3={this.props.text3} text4={this.props.text4} icon3={this.props.icon3}
                                 icon4={this.props.icon4} textData3={this.props.textData3}
                                 textData4={this.props.textData4}/>
                    <BtnBooking bookingID={this.props.bookingID}/>
                </Row>
            </Panel>
        );
    }
}

Panel.propType = {
    url: PropTypes.string.isRequired,
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