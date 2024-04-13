
'use client'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import style from './testinomial.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import testimonials from '@/public/content/buyerTestimonial';


const Buyertestimonial = () => {
    const CustomPrevButton = ({ onClick }) => (
        <button className={style.prevbutton} onClick={onClick}>
            <FontAwesomeIcon icon={faAngleLeft} />

        </button>
    );

    const CustomNextButton = ({ onClick }) => (
        <button className={style.nextbutton} onClick={onClick}>
            <FontAwesomeIcon icon={faAngleRight} />
        </button>
    );
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000, // Change testimonial every 5 seconds
        prevArrow: <CustomPrevButton />,
        nextArrow: <CustomNextButton />,
    };



    return (
        <div className={style.testimonialslider}>
            <Slider {...settings}>
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className={style.testimonial}>
                        <div className={style.authimage}>
                            <img src={testimonial.image} alt={testimonial.author} />
                            <p className="testimonial-author"> <strong>{testimonial.author} </strong> <br /> <span>{testimonial.para}</span> </p>
                        </div>
                        <p className="testimonial-text">{testimonial.text}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Buyertestimonial;
