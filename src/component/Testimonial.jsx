import React, { useState, useEffect } from "react";
import { SiComma } from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../assets/Testimonials.css";

export default function Testimonial() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchedData = [
      {
        id: 1,
        name: "Jack",
        testimonial: "It was a great experience to get a ticket online. The process was smooth and easy!",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Aqj3MTDX2_ntWQ32h0U8zmQSyovlsOJlew&s"
      },
      {
        id: 2,
        name: "Sophia",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Vo_Y_wl6wPNvBQ248kBzKRMM6Hh5dD5k1w&s",
        testimonial: "Absolutely fantastic service! I was able to book my tickets in just a few clicks. Highly recommended."
        
      },
      {
        id: 3,
        name: "Michael",
        testimonial: "Booking online saved me so much time. I'll definitely use this service again next time.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqiGDWxu58BS_M9_hloRMYzZ_f7LMEs8a6qA&s"
      },
      {
        id: 4,
        name: "Chris Evans",
        testimonial: "The website was super easy to navigate and the customer support was top-notch. 10/10 experience.",
        img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Chris_Evans_2020_%28cropped%29.jpg"
      },
      {
        id: 5,
        name: "Chris Hemsworth",
        testimonial: "I was skeptical about booking online at first, but this service made everything simple and reliable.",
        img: "https://media.themoviedb.org/t/p/w500/piQGdoIQOF3C1EI5cbYZLAW1gfj.jpg"
      }
    ];

    setTestimonials(fetchedData);
  }, []);

  return (
    <div className="Testimonial-Container">
      <span className="Testimonial-Header">TESTIMONIALS</span>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="Testimonial-swiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="Testimonial-body">
              <div className="Testimonial-inner">
                <div className="Testimonial-people">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                  />
                </div>
                <h2>{testimonial.name}</h2>
                <p>{testimonial.testimonial}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
