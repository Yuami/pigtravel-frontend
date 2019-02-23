import React, {Component} from 'react';
import Panel from "./layout/Panel";
import {Label} from "reactstrap";
import FormGroup from "@material-ui/core/FormGroup";
import FaIcon from "./general/FaIcon";
import AutocompleteCity from "./specific/AutocompleteCity";

class PanelSearcher extends Component {

    state = {
      place: null,
      guests: this.props.guests || 1,
        start: this.props.start || 0,
        end: this.props.end || 0
    };

    handleChangePlace(place) {
        this.setState({
            place
        });
    }

    render() {
        return (
            <Panel>
                <FormGroup>
                    <div id="location">
                        <AutocompleteCity change={this.handleChangePlace.bind(this)} place={this.state.place}/>
                    </div>
                </FormGroup>
            </Panel>
        );
    }

    static propTypes = {}
}

export default PanelSearcher;