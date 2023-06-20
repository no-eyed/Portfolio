import React from 'react'
import './testimonials.css'
import IMG from '../../assets/Anya.png'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: IMG,
    name: 'Iina Show',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fuga, ipsam fugit perferendis ab consequatur. Deserunt a, laborum temporibus eius beatae iure perspiciatis commodi incidunt earum officia repudiandae laudantium dolores, doloremque corporis voluptatibus!'
  },
  {
    avatar: IMG,
    name: 'Mina Show',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fuga, ipsam fugit perferendis ab consequatur. Deserunt a, laborum temporibus eius beatae iure perspiciatis commodi incidunt earum officia repudiandae laudantium dolores, doloremque corporis voluptatibus!'
  },
  {
    avatar: IMG,
    name: 'Tina Show',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fuga, ipsam fugit perferendis ab consequatur. Deserunt a, laborum temporibus eius beatae iure perspiciatis commodi incidunt earum officia repudiandae laudantium dolores, doloremque corporis voluptatibus!'
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container' modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
              <div className='client__avatar'>
                <img src={avatar} alt='' />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}
              </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials