"use client";
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Image from 'next/image';



function Hiro() {
  const settings = {
    dots: false,
    arrow:false,
    infinite: true,
    speed: 500,
    autoplay:true,
    autoplaySpeed:3000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
    <main className='py-10 bg-green px-4'>
        <div className="container">
      
          <div>
              <div className="md:grid grid-cols-2 ">
              <div className='flex flex-col mx-auto justify-center items-center md:items-start' >
                <h1 className='sm:text-7xl text-4xl font-bold'>Because Good LIfe <br /> Is More Than <br /> Just Good Foods</h1>
                <p className='py-7'>Dogs laugh, but they laugh with their tails</p>
                <a href="#" className='px-4 py-1 text-center  bg-orange rounded-full w-30 text-white text-2xl font-medium inline-block'>Shop</a>
              </div>
              <div className='hiro-img flex justify-center mt-6' >
               
                <img  src='https://static.vecteezy.com/system/resources/previews/044/274/398/non_2x/woman-with-2-pet-dogs-on-isolated-transparent-background-free-png.png' alt="" />
              </div>
            </div>
            </div>

            
        </div>
    </main>

    <div className='py-10 bg-sky px-4'>
      <div className="container">
      <div>
              <div className="md:grid grid-cols-2 ">
              <div className='flex flex-col mx-auto justify-center items-center md:items-start' >
                <h1 className='sm:text-7xl text-4xl font-bold'>Pets Require The <br />Best Foods And Water  For Healthy Life</h1>
                <p className='py-7'>Get Free shipping on all orders over <span className='font-bold'>$99</span></p>
                <a href="#" className='px-4 py-1 text-center  bg-orange rounded-full w-30 text-white text-2xl font-medium inline-block'>Shop</a>
              </div>
              <div className='hiro-img flex justify-center mt-6' >
              <img src="/hiro.png" alt="" />
                {/* <img className='rounded-lg'  src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png' alt="" /> */}
              </div>
            </div>
            </div>
      </div>
    </div>
    </Slider>
  )
}

export default Hiro