import React, {Component} from 'react';
import Row from "reactstrap/es/Row";
import Container from "reactstrap/es/Container";
import FooterCol from "./FooterCol";

class Footer extends Component {

    render() {
        const aboutUs = [
            {
                value: "about-us.who",
                link: "about-us"
            },
            {
                value: "about-us.terms",
                link: "about-us#terms"
            },
        ];
        const support = [
            {
                value: "support.contact",
                link: "support"
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
            <footer className="bg-secondary text-light pt-4">
                <Container fluid className="text-center">
                    <Row>
                        <FooterCol xs="12" md="4" title="about-us" list={aboutUs}/>
                        <FooterCol xs="12" md="4" title="support" list={support}/>
                        <FooterCol xs="12" md="4" title="follow" list={follow} media/>
                    </Row>
                </Container>
                <div className="text-center py-3">© 2018 Copyright: <a href="http://pigtravel.top" className="footer-link">PigTravel.top</a>
                </div>
            </footer>
        );
    }
}

export default Footer;