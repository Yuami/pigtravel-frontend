import React, {Component} from 'react';
import Translate from "../../lang/Translate";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import Container from "reactstrap/es/Container";
import FooterCol from "./FooterCol";

class Footer extends Component {

    render() {
        const aboutUs = [
            {
                value: "about-us.who",
                link: ""
            },
            {
                value: "about-us.terms",
                link: ""
            },
        ];
        const support = [
            {
                value: "support.contact",
                link: ""
            }
        ];

        const follow = [
            {
                type: 'general',
                value: 'email',
                link: ""
            }
        ];

        return (
            <footer className="bg-secondary text-light ">
                <Container fluid>
                    <Row>
                        <FooterCol xs="12" md="4" title="about-us" list={aboutUs}/>
                        <FooterCol xs="12" md="4" title="support" list={support}/>
                        <FooterCol xs="12" md="4" title="follow" list={follow}/>
                    </Row>
                </Container>
            </footer>
        );
    }
}

export default Footer;