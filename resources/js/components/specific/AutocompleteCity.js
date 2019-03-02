import React, {Component} from 'react';
import Select from 'react-select';
import Translate from "../../lang/Translate";
import axios from "axios";


class AutocompleteCity extends Component {


    constructor(props) {
        super(props);
        this.state = {
            optionsCities: [],
            optionsRegions:[],
            value: undefined,
            label: undefined,
            selectedOption: null,
        };

        this.getOptionsCities = this.getOptionsCities.bind(this)
    }

    getOptionsCities() {
        axios('/api/cities').then((response) => {
            this.setState({
                optionsCities: response.data
            });
        }).catch((error) => {
            console.log(error, 'error cities')
        });
    }

    getOptionsRegions() {
        axios('/api/regions').then((response) => {
            this.setState({
                optionsRegions: response.data
            });
        }).catch((error) => {
            console.log(error, 'error regions')
        });
    }

    componentDidMount() {
        this.getOptionsCities();
        this.getOptionsRegions();
    }

    handleChange = (selectedOption) => {
        this.setState({selectedOption});
    };

    render() {
        const {optionsCities, optionsRegions} = this.state;
        const groupedOptions = [
            {
                label: <Translate type={'autocomplete'} string={'region'}/>,
                options: optionsRegions.map((v, k) => {
                    return {value: v.id, label: v.province}
                }),
            },
            {
                label: <Translate type={'autocomplete'} string={'city'}/>,
                options: optionsCities.map((v, k) => {
                    return {value: v.id, label: v.name+","+v.province}
                }),
            },
        ];

        return (
            <Select
                value={this.props.place}
                name="city"
                onChange={this.props.change}
                options={groupedOptions}
                blurInputOnSelect={false}
                className="Select-menu-outer"
                placeholder={<Translate type="searcher" string="city"/>}
            />
        );
    }
}

export default AutocompleteCity;
