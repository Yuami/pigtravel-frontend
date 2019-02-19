import React,{Component} from "react";
import StyledFrame from "react-styled-frame";
import BookingDetail from "../../Views/BookingDetail";
import PropTypes from "prop-types";
import DesglosePrecio from "./DesglosePrecio";
import Container from "reactstrap/es/Container";
import "../../../../public/css/app.css";

class PrintPDF extends Component {
    constructor(props) {
        super(props);
        this.handlePrint = this.handlePrint.bind(this);
        this.state = {};
    }

    handlePrint() {
        this.setState({
            loading: true
        });

        setTimeout(() => {
            this.setState(
                {
                    loading: false,
                    iframeContents: (
                        <Container className="bookingCont">
                        {this.props.comp}
                        </Container>
                    )
                },
                () => {
                    setTimeout(() => {
                        const iframe = document.querySelectorAll("#printWrapper iframe")[0];
                        iframe.focus();
                        iframe.contentWindow.print();
                    }, 1);
                }
            );
        }, 3000);
    }

    render() {
        return (
            <div className="App">
                {this.state.iframeContents ? (
                    <div id="printWrapper" style={{ display: "none" }}>
                        <StyledFrame>{this.state.iframeContents}</StyledFrame>
                    </div>
                ) : (
                    undefined
                )}
                <br />
                <button disabled={this.state.loading} onClick={this.handlePrint}>
                    {this.state.loading ? "..." : "PDF"}
                </button>
            </div>
        );
    }
}
PrintPDF.propTypes = {
    comp: PropTypes.isRequired,
};
export default PrintPDF;
