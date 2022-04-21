import React from 'react'
import './StudentCarousel.css'

const StudentCarousel = ({ imgSrc, name, designation }) => (
    <div className='carouselCard'>
        <div className='testimonial'>
            <div className='testimonial-inner'>
                <div className='testimonial-head'>
                    <img src={imgSrc} alt='' />
                    <div className='testimonial-title'>
                        <h3>{name}</h3>
                        <p>{designation}</p>
                    </div>
                </div>
                <div className='testimonial-quote'>
                    <p>
                        I believe in lifelong learning and Skola is a great
                        place to learn from experts. Ive learned a lot and
                        recommend it to all my friends
                    </p>
                </div>
            </div>
        </div>
    </div>
)

export default StudentCarousel
