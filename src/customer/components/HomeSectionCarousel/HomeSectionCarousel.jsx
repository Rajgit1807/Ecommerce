import React, { useRef, useState } from 'react'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
import { Button } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

const HomeSectionCarousel = ({data,sectionName}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef(null);
    
    const items = data?.slice(0,10).map((item) => <HomeSectionCard product={item} />)

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const slidePrev = () => {
        if (activeIndex > 0) {
            const newIndex = activeIndex - 1;
            setActiveIndex(newIndex);
            carouselRef.current.slideTo(newIndex);
        }
    };

    const slideNext = () => {
        if (activeIndex < items.length - 1) {
            const newIndex = activeIndex + 1;
            setActiveIndex(newIndex);
            carouselRef.current.slideTo(newIndex);
        }
    };

    const syncActiveIndex = ({ item }) => {
        setActiveIndex(item);
    };


    return (
        <div className=''>
            <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
            <div className='relative p-5'>
                <AliceCarousel
                    items={items}
                    responsive={responsive}
                    disableButtonsControls
                    disableDotsControls
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                    ref={carouselRef}
                />
                { activeIndex !== items.length-5 &&
                    <Button onClick={slideNext} variant='contained' className='z-50' sx={{ position: "absolute", top: "8rem", right: "0rem", transform: "translateX(50%) rotate(90deg)", bgcolor: "white", }} aria-label='next'>
                        <KeyboardArrowRight sx={{ transform: "rotate(-90deg)", color: "black" }} />
                    </Button>
                }


                {
                    activeIndex !== 0 &&
                    <Button onClick={slidePrev} variant='contained' className='z-50' sx={{ position: "absolute", top: "8rem", left: "0rem", transform: "translateX(-50%) rotate(90deg)", bgcolor: "white", }} aria-label='next'>
                        <KeyboardArrowLeft sx={{ transform: "rotate(-90deg)", color: "black" }} />
                    </Button>
                }
            </div>
        </div>
    )
}

export default HomeSectionCarousel