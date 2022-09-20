import React, { useRef } from 'react'
import { Carousel } from 'antd';
import Data from '../../Data'
import { BsChevronLeft } from 'react-icons/bs'
import { BsChevronRight } from 'react-icons/bs'
import './testimonials.scss'

console.log(Data);

const Testimonials = () => {
  const ref = useRef();
  return (

    <section>
      <h5>What people talk</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials">
        <Carousel
          autoplay
          effect="fade"
          pauseOnHover={true}
          ref={ref}
        >
          {Data.map((item) =>
          (
            <div className='slider testimonials__wrap' key={item.id}>
              <img className='testimonials__avatar' src={item.image} alt="avatar" />
              <h5 className='testimonials__name'>{item.title}</h5>
              <p className='testimonials__review'>{item.review}</p>
            </div>

          ))}
        </Carousel>
        <BsChevronLeft className='btnSlider prev' onClick={() => {
          ref.current.prev();
        }} />
        <BsChevronRight className='btnSlider next' onClick={() => {
          ref.current.next();
        }} />

      </div>
    </section>
  );
};
export default Testimonials;