import React, {Component} from 'react';
import Translate from "../../lang/Translate";
import {Col, Label, Button, Popover, PopoverBody, InputGroup} from 'reactstrap';
import DatePickerInicio from "../specific/DatePickerInicio"
import FaIcon from "../general/FaIcon";
import {LocaleContext} from "../../LocaleContext";
import {translate} from "../../helpers";
import AutocompleteCity from "../specific/AutocompleteCity";
import FormButton from "../general/Forms/FormButton";
import Form from "reactstrap/es/Form";
import FormGroup from "reactstrap/es/FormGroup";

class Searcher extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            clicks: 1,
            show: false,
        };

    }

    IncrementItem = () => {
        this.setState({clicks: this.state.clicks + 1});
    };
    
    DecreaseItem = () => {
        const clicks = this.state.clicks - 1 < 1 ? 1 : this.state.clicks -1;
        this.setState({clicks});
    };
    
    ToggleDiv = () => {
        this.setState({show: !this.state.show});
    };


    render() {
        const decreaseBtn = this.state.clicks === 1 ?
            <Button color="" className="incrementIcon" onClick={this.DecreaseItem} disabled><FaIcon icon={'fa fa-minus'}/></Button> :
            <Button color="" className="incrementIcon" onClick={this.DecreaseItem}><FaIcon icon={'fa fa-minus'}/></Button>;

        return (

            <Col md="10" lg="8" sm="8" xs="10"  className="buscador shadow">
                <Form>
                <Col md="6" lg="4" sm="12"  xs="12" className="filtro">
                    <FormGroup>
                        <Label>
                            <FaIcon icon={'fa fa-globe'}/>
                        </Label>
                        <div id="location">
                            <AutocompleteCity/>
                        </div>
                    </FormGroup>
                </Col>
                <Col md="6" lg="4" sm="12" xs="12"  className="filtro">
                    <DatePickerInicio/>
                </Col>
                <Col md="6" lg="3" sm="12" xs="12" className="filtro">
                    <FormGroup id={"guests"}>
                        <Label><FaIcon icon={'fa fa-user'}/></Label>
                         <div className="inputSearcher">
                            {this.state.clicks} <input type="hidden" name="guests" value={this.state.clicks}/>
                            <Translate string={'guest'} type={'searcher'}/>
                         </div>
                        <Popover placement="bottom" isOpen={this.state.show} target="guests"
                                 toggle={this.ToggleDiv}  trigger="legacy">
                            <PopoverBody>
                                {decreaseBtn}
                                <Button color="" className="incrementIcon" onClick={this.IncrementItem}><FaIcon icon={'fa fa-plus'}/></Button>
                            </PopoverBody>
                        </Popover>
                    </FormGroup>
                </Col>
                <Col md="6" lg="1" sm="12" xs="12" className="form-group">
                    <Button color="primary" className="SearcherIcon"><FaIcon icon={'fa fa-search'} size={'fa-2x'}/></Button>
                </Col>
                </Form>
            </Col>
        );
    }
}

export default Searcher;