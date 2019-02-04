import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {DropdownItem} from "reactstrap";

class DropListLangs extends Component {
    render() {
        return this.props.data.map(lang => (
                <a key={lang.id} id={lang.id} onClick={this.props.changeLanguage}>
                    <DropdownItem>
                        <img src={lang.img} height="20"></img> {lang.name}
                    </DropdownItem>
                </a>
            ));
    }
}

DropListLangs.propTypes = {
    data: PropTypes.array.isRequired,
};

export default DropListLangs;