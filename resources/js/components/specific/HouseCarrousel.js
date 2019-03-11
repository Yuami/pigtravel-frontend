import ImageGallery from 'react-image-gallery';
import React, {Component} from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import PropTypes from "prop-types";
import axios from "axios";
import moment from "moment";
import DayPicker from "react-day-picker";

class HouseCarrousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [],
        };
    }

    componentWillMount() {
        axios.get('/api/houseImages/'+this.props.idHouse)
            .then((res) => this.setState({images: res.data}));
    }

    render() {
        const items=   this.state.images.map(v => {
            return {
                original: "http://admin.pigtravel.top" + v.path,
                thumbnail: "http://admin.pigtravel.top" + v.path
            }
        });
        const itemsDefault=
            [{
                original: "http://admin.pigtravel.top/assets/uploads/img/casas/default-image.jpg",
                thumbnail:  "http://admin.pigtravel.top/assets/uploads/img/casas/default-image.jpg"
            }];
        if(items.length==0) {
            return (
                <ImageGallery items={itemsDefault}/>
            )
        }else{
            return (
                <ImageGallery items={items}/>
            )
        }
    }

}

HouseCarrousel.propTypes = {
    idHouse: PropTypes.number.isRequired,
};
export default HouseCarrousel;