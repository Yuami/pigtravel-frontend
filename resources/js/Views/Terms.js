import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Accordion from "../components/general/Accordion/Accordion";
import terms from "../lang/terms.json";
import {LocaleContext} from "../LocaleContext";
import AccordionItem from "../components/general/Accordion/AccordionItem";

class Terms extends Component {

    state = {
      terms
    };

    render() {
        const id = 'accordion';
        return (
            <div className={"container my-5"}>
                <h2><strong>Terms and Conditions</strong></h2>

                <p>Welcome to PigTravel!</p>

                <p>These terms and conditions outline the rules and regulations for the use of PigTravel's Website,
                    located at https://pigtravel.top.</p>

                <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use
                    PigTravel if you do not agree to take all of the terms and conditions stated on this page.</p>

                <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer
                    Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website
                    and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and
                    "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves.
                    All terms refer to the offer, acceptance and consideration of payment necessary to undertake the
                    process of our assistance to the Client in the most appropriate manner for the express purpose of
                    meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance
                    with and subject to, prevailing law of Spain. Any use of the above terminology or other words
                    in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and
                    therefore as referring to same.</p>
                <Accordion id={id}>
                    <LocaleContext.Consumer>
                        {
                            locale =>
                                this.state.terms[locale].map((item, index)=>
                                    <AccordionItem key={index} id={index} title={item.title} body={item.body} idParent={id} expanded={index === 0}/>
                                )
                        }
                    </LocaleContext.Consumer>
                </Accordion>
            </div>
        );
    }
}

Terms.propTypes = {};

export default Terms;