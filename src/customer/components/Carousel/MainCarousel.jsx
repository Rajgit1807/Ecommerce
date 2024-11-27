import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData/MainCarouselData';


const items = mainCarouselData.map((item)=> <img className='w-full' src ={item.image} role='presentation'/>)
const MainCarousel = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        disableButtonsControls
        autoPlay
        infinite
        autoPlayInterval={1500}
    />
);

export default MainCarousel;