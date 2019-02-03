import React, {Component} from 'react';
import Col from "reactstrap/es/Col";
import Translate from "../../lang/Translate";
import {Route, Link} from "react-router-dom";
import MyMedia from "../general/Media/MyMedia";
import PropTypes from "prop-types"

class FooterCol extends Component {
    render() {
        const type = "footer";
        const {title} = this.props;
        const media = this.props.media !== undefined;

        return (
            <Col xs={this.props.xs} md={this.props.md}>
                <h4><Translate type={type} string={title}/></h4>
                <ul className="list-unstyled" style={{
                    fontSize: "14px"
                }}>
                    {media ? (<MyMedia/>) : null}
                    {
                        this.props.list
                            .map(obj =>
                                <li key={obj.value}>
                                        <Link to={obj.link} className="footer-link-white">
                                            <Translate type={obj.type ? obj.type : type} string={obj.value}/>
                                        </Link>
                                </li>
                            )
                    }
                </ul>
            </Col>
        );
    }
}

FooterCol.propTypes = {
    xs: PropTypes.string.isRequired,
    md: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    media: PropTypes.bool,
    list: PropTypes.arrayOf(PropTypes.object),
};

export default FooterCol;