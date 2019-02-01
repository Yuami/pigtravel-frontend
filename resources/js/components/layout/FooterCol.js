import React, {Component} from 'react';
import Col from "reactstrap/es/Col";
import Translate from "../../lang/Translate";

class FooterCol extends Component {
    render() {
        const type = "footer";

        return (
            <Col xs={this.props.xs} md={this.props.md}>
                <ul>
                    <li className="text-uppercase"><Translate type={type} string={this.props.title}/></li>
                    {
                        this.props.list
                            .map(obj => <li className={}>
                                <Translate type={obj.type ? obj.type : type} string={obj.value}/>
                            </li>)
                    }
                </ul>
            </Col>
        );
    }
}

export default FooterCol;