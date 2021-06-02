import React, { useEffect, useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    UncontrolledCarousel
} from 'reactstrap';

const Background = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [windownSize, setWindowSize] = useState(1920);

    React.useEffect(() => {
        let width = window.innerWidth;
        if(width){
            setWindowSize(width);
        }
    },[]);

    const getItems = () => {
        if (windownSize <= 767) {
            return [
                {
                    src: 'images/bg1md.jpg',
                    caption: '',
                    altText: ''
                },
                {
                    src: 'images/bg2md.jpg',
                    caption: '',
                    altText: ''
                },
                {
                    src: 'images/bg3md.jpg',
                    caption: '',
                    altText: ''
                },
            ];
    
        }
        return [
            {
                src: 'images/bg1small.jpg',
                caption: '',
                altText: ''
            },
            {
                src: 'images/bg2small.jpg',
                caption: '',
                altText: ''
            },
        ];
    }

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === getItems().length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? getItems().length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = getItems().map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} style={{ width: '100vw', height: '100vh', objectFit: 'cover', float: 'left' }} />
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
        );
    });

    return (
        <div style={{ width: '100vw', height: '100vh', position: 'relative', top: '0px', left: '0px' }}>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >
                <CarouselIndicators items={getItems()} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText=" " onClickHandler={previous} />
                <CarouselControl direction="next" directionText=" " onClickHandler={next} />
            </Carousel>
        </div>
    );
}


export default Background;