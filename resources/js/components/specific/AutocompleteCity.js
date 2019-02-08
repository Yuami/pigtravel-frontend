import React, {Component} from 'react';
import Select from 'react-select';
import Translate from "../../lang/Translate";
import axios from "axios";


class AutocompleteCity extends Component {


    constructor(props) {
        super(props);
        this.state = {
            options: [],
            value: undefined,
            label: undefined,
            selectedOption: null
        };
        this.getOptions = this.getOptions.bind(this)
    }

    getOptions() {
        axios({
            url: '/api/cities',
            method: 'get'
        }).then((response) => {
            this.setState({
                options: response.data
            });
        }).catch((error) => {
            console.log(error, 'error cities')
        });
    }

    componentDidMount() {
        this.getOptions()
    }

    handleChange = (selectedOption) => {
        this.setState({selectedOption});
    };

    render() {
        const {selectedOption, options} = this.state;

        return (
            <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={options.map((v, k) => {
                    return {value: v.id, label: v.name+","+v.province}
                })
                }
                blurInputOnSelect={false}
                placeholder={<Translate type="searcher" string="city"/>}
            />
        );
    }
}

export default AutocompleteCity;
