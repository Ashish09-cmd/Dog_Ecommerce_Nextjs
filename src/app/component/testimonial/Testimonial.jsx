"use client";
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Testimonial() {
  const settings = {
    dots: false,
    arrow:true,
    infinite: true,
    speed: 500,
   
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className='py-20 px-3 bg-pink'>
    <div className="container">
    <h6 className="text-center font-medium text-lg italic text-orange ">
    Our Testimonial

          </h6>
          <h3 className="text-4xl font-bold text-center">    Our Client’s Feedbacke</h3>

    <Slider {...settings}>
            <div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-10">
            <div className='  flex flex-col sm:flex-row items-center  bg-white p-8 rounded-lg'>
               <div className='h-30 w-30 rounded-full'>
                 <img className='h-full w-full' src="https://demos.codezeel.com/wordpress/WCM09/WCM090202/default/wp-content/uploads/2025/01/author-1.png" alt="" />
               </div>
               <div className='w-[70%] ms-7 mt-4'>
                <h4 className='text-xl font-bold '>
                “Reliable product, consistently delivers.”</h4>
                <p className=' py-2'>
                It is a long established fact To the treader will readable content of a to page when looking a its layout the point desktop publishing readable english.                                </p>
                 <h4 className='text-xl font-bold'>Lawrence L. Nones</h4>
               </div>
            </div>
            <div className=' flex flex-col sm:flex-row items-center bg-white p-8 rounded-lg'>
               <div className='h-30 w-30 rounded-full'>
                 <img className='h-full w-full' src="https://demos.codezeel.com/wordpress/WCM09/WCM090202/default/wp-content/uploads/2025/01/author-2.png" alt="" />
               </div>
               <div className='w-[70%] ms-7  '>
                <h4 className='text-xl font-bold '>
                
                “Excellent product, A+ customer service.”                                </h4>
                <p className=' py-2'>
                It is a long established fact To the treader will readable content of a to page when looking a its layout the point desktop publishing readable english.                                </p>
                 <h4 className='text-xl font-bold'>Augusta Wind</h4>
               </div>
            </div>
          </div>
          </div>
          <div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-10">
            <div className='  flex flex-col sm:flex-row items-center  bg-white p-8 rounded-lg'>
               <div className='h-30 w-30 rounded-full'>
                 <img className='h-full w-full' src="https://demos.codezeel.com/wordpress/WCM09/WCM090202/default/wp-content/uploads/2025/01/author-3.png" alt="" />
               </div>
               <div className='w-[70%] ms-7 mt-4'>
                <h4 className='text-xl font-bold '>
                “Reliable product, consistently delivers.”</h4>
                <p className=' py-2'>
                It is a long established fact To the treader will readable content of a to page when looking a its layout the point desktop publishing readable english.                                </p>
                 <h4 className='text-xl font-bold'>Lawrence L. Nones</h4>
               </div>
            </div>
            <div className=' flex flex-col sm:flex-row items-center bg-white p-8 rounded-lg'>
               <div className='h-30 w-30 rounded-full'>
                 <img className='h-full w-full' src="https://demos.codezeel.com/wordpress/WCM09/WCM090202/default/wp-content/uploads/2025/01/author-4.png" alt="" />
               </div>
               <div className='w-[70%] ms-7  '>
                <h4 className='text-xl font-bold '>
                
                “Excellent product, A+ customer service.”                                </h4>
                <p className=' py-2'>
                It is a long established fact To the treader will readable content of a to page when looking a its layout the point desktop publishing readable english.                                </p>
                 <h4 className='text-xl font-bold'>Augusta Wind</h4>
               </div>
            </div>
          </div>
          </div>
          </Slider>
    </div>
    </section>
  )
}

export default Testimonial