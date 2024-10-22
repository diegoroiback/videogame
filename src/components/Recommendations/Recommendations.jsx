import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import classes from '@/styles/components/Recommendations.module.scss'
import  '@/styles/components/swiper.scss'


const Recommendations = () => {
  return (
    <div className={classes.recommendations}>
      <div className={classes.recommendations__container}>
        <h2 className={classes.recommendations__title}>Recommended games</h2>
        <Swiper
          loop={true}
          slidesPerView={1}
          centeredSlides={true}
          effect={'slide'}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://media.wired.com/photos/5955c1dc5992c54331ac192f/master/w_1920,c_limit/bloodborne_the_old_hunters_V2.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://media.wired.com/photos/5955c1dc5992c54331ac192f/master/w_1920,c_limit/bloodborne_the_old_hunters_V2.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://media.wired.com/photos/5955c1dc5992c54331ac192f/master/w_1920,c_limit/bloodborne_the_old_hunters_V2.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://media.wired.com/photos/5955c1dc5992c54331ac192f/master/w_1920,c_limit/bloodborne_the_old_hunters_V2.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://media.wired.com/photos/5955c1dc5992c54331ac192f/master/w_1920,c_limit/bloodborne_the_old_hunters_V2.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Recommendations