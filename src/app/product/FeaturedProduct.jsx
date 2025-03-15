import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";


const featuredProduct= [
    {
        id:1,
        title:'Dentastix Oral Care Treats for Small Breed Adult Dogs',
        
        price:'$11',
        thumbnail:'https://demos.codezeel.com/wordpress/WCM09/WCM090202/default/wp-content/uploads/2023/11/02-31.jpg'
    },
    {
        id:2,
        title:'Meat Up Puppy Dry Dog Food, Chicken',
        price:'$15 – $28',
        thumbnail:'https://demos.codezeel.com/wordpress/WCM09/WCM090202/default/wp-content/uploads/2023/11/03-33.jpg'
    },
    {
        id:3,
        title:'Pets Empire Stainless Steel Dog Bowl (Set of 2)',
        oldPrice:'$37',
        price:'$30',
        thumbnail:'https://demos.codezeel.com/wordpress/WCM09/WCM090202/default/wp-content/uploads/2023/11/04-20.jpg'
    },
    {
        id:4,
        title:'Mutt of Course Sniffing Around Bandana Small',
        price:'$12',
        thumbnail:'https://demos.codezeel.com/wordpress/WCM09/WCM090202/default/wp-content/uploads/2023/11/05.jpg'
    },
    {
        id:5,
        title:'Dog/Puppy Obedience Recall Training Agility Lead',
        price:'$25 - $22',
        thumbnail:'https://demos.codezeel.com/wordpress/WCM09/WCM090202/default/wp-content/uploads/2023/11/06.jpg'
    },
    {
        id:6,
        title:'Pedigree Adult Dry Dog Food, 1kg Pack',
        price:'$12 – $38',
        thumbnail:'https://demos.codezeel.com/wordpress/WCM09/WCM090202/default/wp-content/uploads/2023/11/01-7.jpg'
    },
]

function FeaturedProduct() {
  return (
  <>

  <section className='py-10 bg-white px-3'>
    <div className="container">
    <div className="grid grid-cols-1  md:grid-cols-2">
     <div>
        <h6 className='italic font-semibold text-orange text-xl'>Best Products</h6>
        <h2 className='text-4xl mt-2 font-bold'>Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-7">
            {featuredProduct.slice(0,4).map(a=>(
 <div className='flex justify-center  gap-3 ' key={a.id}>
 <div>
     <img className='h-45 rounded-lg' src={a.thumbnail} alt="" />
 </div>
 <div className='w-[45%] '>

 <h5 className='font-semibold'>{a.title}</h5>
 <div className='flex items-center mt-3 gap-1 '>
     
      <FaStar className='text-orange' />
      <FaStar className='text-orange'/>
      <FaStar className='text-orange'/>
      <FaStar className='text-orange'/>
      <FaRegStar />
      
 </div>
 <h6  className='text-orange font-bold text-xl my-3'>{a.price}</h6>
 <a href="#" className='underline font-medium'>Add To Cart</a>
 </div>
</div>
            ))}
        
        </div>
        </div>
          <div className='relative flex  justify-center items-center mt-5'>
            <div className='absolute  top-7'>
               <h6 className='px-4 inline-block font-semibold text-orange text-lg italic bg-white text-black rounded-full'>Your Pet Will Love</h6>
               <h3 className='md:text-4xl text-2xl font-bold mt-4'>Fun & Relaxing Toys <br />
               For Our Pets</h3>
            </div>
            <img className='rounded-lg' src="https://demos.codezeel.com/wordpress/WCM09/WCM090202/default/wp-content/uploads/2025/01/product-banner-1.jpg" alt="" />
          </div>
        </div>
    </div>
  </section>
  </>
  )
}

export default FeaturedProduct