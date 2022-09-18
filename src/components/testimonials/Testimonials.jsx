import React from 'react'
import { Carousel } from 'antd';
import Data from '../../Data'
import './testimonials.scss'

console.log(Data);

const Testimonials = () => {

  return (
    <>
      {/* <Carousel effect="fade">
       
        {Data.map(({ item }) => 
        ( <div className='slider testimonials__wrap' key={item.id}>
        <img className='testimonials__avatar' src={item.url} alt="avatar" />
            <h5 className='testimonials__name'>{item.title}</h5>
            <p className='testimonials__review'>{item.review}</p>
        </div>))}
        <div className='slider'>fdgbgdbgt  2</div>
      </Carousel> */}
      
    </>
  );
};

//   return (
//     <section id='testimonials'>
//       <h5>Trust the professionals </h5>
//       <h2>Testimonials</h2>
//       <div className='container testimonials'>
//         <article className='testimonials__wrap'>
//             <img className='testimonials__avatar' src="" alt="avatar" />
//             <h5 className='testimonials__name'>Marielle Haag Ximena Vegara John Paul William Doe</h5>
//             <p className='testimonials__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia at placeat voluptas dignissimos maxime cum quibusdam, vero soluta porro, iste illo unde quisquam veritatis alias harum laudantium quo veniam consequatur. </p>
//         </article>
//       </div>
//     </section>
//   )
// }

export default Testimonials