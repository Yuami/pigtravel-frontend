import React, {Component} from 'react';
import Row from "reactstrap/es/Row";
import Container from "reactstrap/es/Container";
import FooterCol from "./FooterCol";

class Footer extends Component {

    render() {
        const aboutUs = [
            {
                value: "about-us.who",
                link: "/about-us"
            },
            {
                value: "about-us.terms",
                link: "/terms"
            },
        ];
        const support = [
            {
                value: "support.contact",
                link: "/contact"
            },
            {
                type: 'general',
                value: 'email',
                link: "/contact"
            }
        ];

        const follow = [

        ];

        return (
            <footer className="bg-secondary text-light pt-4">
                <Container fluid className="text-center">
                    <Row>
                        <FooterCol xs="12" sm="6" md="4" title="about-us" list={aboutUs}/>
                        <FooterCol xs="12" sm="12" md="4" title="follow" list={follow} media/>
                        <FooterCol xs="12" sm="6" md="4" title="support" list={support}/>
                    </Row>
                </Container>
                <div className="text-center py-3 footer-darker">
                    Copyright © 2018 <a href="http://pigtravel.top" className="footer-link">PigTravel.top</a>
                </div>
            </footer>
        );
    }
}

export default Footer;