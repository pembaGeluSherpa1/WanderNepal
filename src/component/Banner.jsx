import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import '../assets/Banner.css'; // Your custom styling

export default function Banner() {
  return (
    <div className="banner-container">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div className="banner-slide" style={{ backgroundImage: `url('https://www.placesnepal.com/uploads/2024/05/a-complete-guide-to-boudhanath-stupa-places-nepal-kathmandu-572-1600x600.jpg')` }}>
            <div className="banner-overlay">
              <h2>Have you visited Boudha?</h2>
              <p>Experience the spiritual magic of Boudhanath Stupa — one of the largest and most serene stupas in the world.</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="banner-slide" style={{ backgroundImage: `url('https://gstreksnepal.com/wp-content/uploads/2024/12/pashupati-banner-2-6393058c-2048x983.webp')` }}>
            <div className="banner-overlay">
              <h2>Have you visited Pashupatinath?</h2>
              <p>Discover sacred spirituality at Pashupatinath Temple, Nepal’s most revered Hindu temple complex.</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="banner-slide" style={{ backgroundImage: `url('https://www.holidaystonepal.in/media/files/Blogs/SwayambhunathStupa/swayambhunath-stupa.png')` }}>
            <div className="banner-overlay">
              <h2>Do you know about Swayambhunath Stupa?</h2>
              <p>Embrace the panoramic beauty and spiritual calm of Swayambhunath, the iconic "Monkey Temple."</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="banner-slide" style={{ backgroundImage: `url('https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2019/lifestyle/1%20(1).jpg&w=900&height=601')` }}>
            <div className="banner-overlay">
              <h2>Have you visited Chhauni Museum?</h2>
              <p>Step into Nepal’s rich history at the Chhauni Museum (National Museum of Nepal).</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="banner-slide" style={{ backgroundImage: `url('https://images.squarespace-cdn.com/content/v1/53ecd1bde4b0a6f9524254f8/1414752490093-6W1D5IV5FTQXW10IN20I/image-asset.jpeg?format=2500w')` }}>
            <div className="banner-overlay">
              <h2>Have you visited Kathmandu Durbar Square?</h2>
              <p>Journey back in time at Kathmandu Durbar Square, the historic seat of Nepalese royalty.</p>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}
