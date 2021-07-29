import React from 'react';
import BannerImg from '../images/main-slide.jpg';
import BannerImg1 from '../images/main-slide-2.jpg';
import BannerImg2 from '../images/main-slide-3.jpg';
import '../css/carousel.css';


var ReactDOM = require('react-dom');
var Carousel = require('react-responsive-carousel').Carousel;
var createReactClass = require('create-react-class');



var DemoCarousel = createReactClass({
    render() {
        return (
            <Carousel showArrows={true} showStatus={false} showThumbs={false} swipeable={true} emulateTouch={true} infiniteLoop={true}>
                <div>
                    <img src={BannerImg} alt="logo" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={BannerImg1} alt="logo" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={BannerImg2} alt="logo" />
                    <p className="legend">Legend 3</p>
                </div>
                
            </Carousel>
        );
    }
});

export default DemoCarousel;
