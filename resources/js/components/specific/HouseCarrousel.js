import ImageGallery from 'react-image-gallery';
import React, {Component} from 'react';
import "react-image-gallery/styles/css/image-gallery.css";

class HouseCarrousel extends Component {

    render() {

        const images = [
            {
                original: 'http://lorempixel.com/1000/600/nature/1/',
                thumbnail: 'http://lorempixel.com/250/150/nature/1/',
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/2/',
                thumbnail: 'http://lorempixel.com/250/150/nature/2/'
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/3/',
                thumbnail: 'http://lorempixel.com/250/150/nature/3/'
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/4/',
                thumbnail: 'http://lorempixel.com/250/150/nature/4/'
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/5/',
                thumbnail: 'http://lorempixel.com/250/150/nature/5/'
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/6/',
                thumbnail: 'http://lorempixel.com/250/150/nature/6/'
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/7/',
                thumbnail: 'http://lorempixel.com/250/150/nature/7/'
            }
            ,{
                original: 'http://lorempixel.com/1000/600/nature/8/',
                thumbnail: 'http://lorempixel.com/250/150/nature/8/'
            }
        ];

        return (
            <ImageGallery items={images} />
        );
    }

}
export default HouseCarrousel;