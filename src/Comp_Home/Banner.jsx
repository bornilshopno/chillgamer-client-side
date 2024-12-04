// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/bundle'

const Banner = () => {

    return (
        <div>
            <Swiper  modules={[Autoplay, Pagination]} // Register the Autoplay module
            loop={true}
            autoplay={{
                delay: 1000, // Delay between slides in milliseconds
                disableOnInteraction: false, // Keeps autoplay running even after user interaction
            }}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;