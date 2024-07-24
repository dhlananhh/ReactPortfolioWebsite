// Import React Library
import React from 'react'

// Import CSS StyleSheet
import './testimonials.css'

// Import Avatars
import AVT1 from '../../assets/avatar1.jpg'
import AVT2 from '../../assets/avatar2.jpg'
import AVT3 from '../../assets/avatar3.jpg'
import AVT4 from '../../assets/avatar4.jpg'

// Import Swiper core and required modules
import { Pagination } from 'swiper/modules';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// Data
const data = [
    {
        avatar: AVT1,
        name: 'Tina Snow',
        review: 'Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?'
    },
    {
        avatar: AVT2,
        name: 'Shatta Wale',
        review: 'Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?'
    },
    {
        avatar: AVT3,
        name: 'Kwame Despite',
        review: 'Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?'
    },
    {
        avatar: AVT4,
        name: 'Nana Ama McBrown',
        review: 'Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?'
    },
]


export const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from Clients</h5>
            <h2>Testimonials</h2>

            <Swiper 
                // ClassName
                className="container testimonials__container"
                // Install Swiper modules
                modules = {[ Pagination ]}
                spaceBetween = {40}
                slidesPerView = {1}
                pagination = {{ clickable: true }}
            >
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className='testimonial'>
                                <div className="client__avatar">
                                    <img src={avatar} alt={name} />
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>
                                    {review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}
