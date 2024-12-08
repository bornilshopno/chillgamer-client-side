// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/bundle'
import SlideOne from './SlideOne';
import SlideTwo from './SlideTwo';
import SlideThree from './SlideThree';

const Banner = () => {

    return (
        <div className='h-80'>
            <Swiper  modules={[Autoplay, Pagination]} // Register the Autoplay module
            loop={true}
            autoplay={{
                delay: 5000, // Delay between slides in milliseconds
                disableOnInteraction: false, // Keeps autoplay running even after user interaction
            }}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
             
            >
                <SwiperSlide><SlideOne></SlideOne></SwiperSlide>
                <SwiperSlide><SlideTwo></SlideTwo></SwiperSlide>
                <SwiperSlide><SlideThree></SlideThree></SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;