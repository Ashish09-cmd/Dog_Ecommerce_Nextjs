"use client"
import { Product, topCategory } from '@/app/product/TopCategory'
import Link from 'next/link';

import { useParams } from 'next/navigation';
import { CiMenuFries } from "react-icons/ci";
import { LiaGripLinesVerticalSolid } from "react-icons/lia";
import { FaPlus } from "react-icons/fa6";
import { RiSubtractFill } from "react-icons/ri";

// next 
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FiBarChart2 } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { RiShareBoxFill } from "react-icons/ri";



import React from 'react'

function page() {
  // const { slug } = params;
  const params = useParams()
  const slug = params.slug
    let detFilter = Product.filter(a=>a.category==slug)
    console.log(detFilter.title)
  return (
    <>
     <section className='py-10 px-3 bg-light '>
      <div className="container">
        {detFilter.slice(0,1).map(a=>(
          <div key={a.id}> 
         <ul className="flex items-center justify-center" >
         <Link href={'/'} ><li>Home</li></Link>/ <li>{a.title}</li>
         </ul>
          <h2 className='text-center text-4xl font-bold'>{a.title}</h2>
         </div>
        ))}


       
        
      </div>
     </section>
     <section className='py-10 bg-white px-3'>
       <div className="container">

        {detFilter.slice(0,1).map(a=>(
        <div className='flex items-center justify-between' key={a.id}>
          <h6>{a.noProduct}</h6>
 <div className='flex gap-2 items-center'>
 <button className='px-4 shadow  py-1'>Default Sorting</button>
 <div className='bg-orange  p-2 rounded-lg'>
 <LiaGripLinesVerticalSolid  className=' text-white text-xl'/>
 </div>
 <div className='p-2 bg-light rounded-lg'>
 <CiMenuFries className='text-xl' />
 </div>
 </div>
 
</div>
        ))}

        <div className='flex mt-6 gap-7'>
          <div className='w-[25%] hidden sm:block '>
          <div className='border p-3 mb-4  rounded-lg border-[#dadada]'>
            <div className='pb-3 border-b flex items-center justify-between border-[#dadada]'>
             <h3 className='text-xl  font-medium cursor-pointer'>Filter By Categories</h3>
             <FaPlus />
             </div>
             </div>
             <div className='border p-3 mb-4  rounded-lg border-[#dadada]'>
            <div className='pb-3 border-b flex items-center justify-between border-[#dadada]'>
             <h3 className='text-xl  font-medium cursor-pointer'>Highlight</h3>
             <RiSubtractFill className='text-xl '/>
             </div>
             <ul className='mt-2 '>
              <li className='text-lg transition-all cursor-pointer hover:text-orange-500'>All Products</li>
              <li className='text-lg transition-all cursor-pointer hover:text-orange-500'>Best Seller</li>
              <li className='text-lg transition-all cursor-pointer hover:text-orange-500'>New Arrivals</li>
              <li className='text-lg transition-all cursor-pointer hover:text-orange-500'>Sale</li>
              <li className='text-lg transition-all cursor-pointer hover:text-orange-500'>Hot Items</li>
             </ul>
             
             </div>
             <div className='border p-3 mb-4  rounded-lg border-[#dadada]'>
            <div className='pb-3 border-b flex items-center justify-between border-[#dadada]'>
             <h3 className='text-xl  font-medium cursor-pointer'>Filter By Color</h3>
             <RiSubtractFill className='text-xl '/>
             </div>
             <div className='mt-2 flex gap-2 items-center '>
               <div  className='bg-red-600 cursor-pointer h-8 w-8 rounded-full'></div>
               <div  className='bg-black cursor-pointer h-8 w-8 rounded-full'></div>
               <div  className='bg-blue-600 cursor-pointer h-8 w-8 rounded-full'></div>
               <div  className='bg-green-600 cursor-pointer h-8 w-8 rounded-full'></div>
               <div  className='bg-yellow-600 cursor-pointer h-8 w-8 rounded-full'></div>

             </div>
             
             </div>

             <div className='border p-3 mb-4  rounded-lg border-[#dadada]'>
            <div className='pb-3 border-b flex items-center justify-between border-[#dadada]'>
             <h3 className='text-xl  font-medium cursor-pointer'>Brands</h3>
             <RiSubtractFill className='text-xl '/>
             </div>
               
               <ul className='mt-2'>
                <li className='text-lg transition-all cursor-pointer hover:text-orange-500'>Cartify(1)</li>
                <li className='text-lg transition-all cursor-pointer hover:text-orange-500'>EcomZone(2)</li>
                <li className='text-lg transition-all cursor-pointer hover:text-orange-500'>EcoShop(3)</li>
                <li className='text-lg transition-all cursor-pointer hover:text-orange-500'>MegaMart(2)</li>

               </ul>
             
             </div>

             <div className='border p-3 mb-4  rounded-lg border-[#dadada]'>
            <div className='pb-3 border-b flex items-center justify-between border-[#dadada]'>
             <h3 className='text-xl  font-medium cursor-pointer'>Filter By Color</h3>
             <RiSubtractFill className='text-xl '/>
             </div>
             <div className='mt-2 flex gap-2 items-center '>
               <div  className='border border-[#dadada] rounded-sm cursor-pointer px-3 py-1 '>250g</div>
               <div  className='border border-[#dadada] rounded-sm cursor-pointer px-3 py-1'>500g</div>
               <div  className='border border-[#dadada] rounded-sm cursor-pointer px-3 py-1'>1g</div>
               

             </div>
             
             </div>
           
             <div className='border p-3 mb-4  rounded-lg border-[#dadada]'>
            <div className='pb-3 border-b flex items-center justify-between border-[#dadada]'>
             <h3 className='text-xl  font-medium cursor-pointer'>Price Filter</h3>
             <RiSubtractFill className='text-xl '/>
             </div>
               
               <ul className='mt-2'>
                <li className='text-lg transition-all cursor-pointer hover:text-orange-500'>$0 –  $10</li>
                <li className='text-lg transition-all cursor-pointer hover:text-orange-500'>$10 – $20</li>
                <li className='text-lg transition-all cursor-pointer hover:text-orange-500'>$20 – $30</li>
                <li className='text-lg transition-all cursor-pointer hover:text-orange-500'>$30 – $40</li>
               
               </ul>
             
             </div>


             <div className='border p-3 mb-4  rounded-lg border-[#dadada]'>
            <div className='pb-3 border-b flex items-center justify-between border-[#dadada]'>
             <h3 className='text-xl  font-medium cursor-pointer'>Average Rating</h3>
             <RiSubtractFill className='text-xl '/>
             </div>
               
               <ul className='mt-2'>
                <li className='text-lg flex gap-1 items-center transition-all cursor-pointer hover:text-orange-500'><FaStar className='text-orange' />
    <FaStar className='text-orange'/>
    <FaStar className='text-orange'/>
    <FaStar className='text-orange'/>
    <FaStar className='text-orange'/>

   

  (5)</li>
                <li className='text-lg transition-all flex gap-1 items-center cursor-pointer hover:text-orange-500'><FaStar className='text-orange'/>
    <FaStar className='text-orange'/>
    <FaStar className='text-orange'/>
    <FaStar className='text-orange'/>

    <FaRegStar />(4)</li>
                <li className='text-lg transition-all flex gap-1 items-center cursor-pointer hover:text-orange-500'>
                <FaStar className='text-orange'/>
    <FaStar className='text-orange'/>
    <FaStar className='text-orange'/>
    <FaRegStar />
    <FaRegStar /> (3)</li>
                <li className='text-lg transition-all flex gap-1 items-center cursor-pointer hover:text-orange-500'><FaStar className='text-orange'/>
    <FaStar className='text-orange'/>
    <FaRegStar />
    <FaRegStar />
    <FaRegStar />(2)</li>
                <li className='text-lg transition-all flex gap-1 items-center cursor-pointer hover:text-orange-500'><FaStar className='text-orange'/>
    <FaRegStar />
    <FaRegStar />
    <FaRegStar />

    <FaRegStar />(1)</li>
               </ul>
             
             </div>
          </div>


        <div className="grid gap-5  w-[75%] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {detFilter.map(a=>(
 <div className=' w-60 detail-animation  relative' key={a.id}>
 <div className='detail-hover '>
  <FaRegHeart className='text-xl'/>
   <FiBarChart2 className='text-xl'/>
   <IoEyeOutline className='text-xl'/>
   <RiShareBoxFill className='text-xl'/>
 </div>

 <div className='overflow-hidden' >
   <img className='rounded-lg'  src={a.thumbnail} alt="" />
 </div>
 <p className='my-2 hover:text-orange-600 cursor-pointer transition-all font-medium'>{a.description}</p>
 <div className='flex gap-1'>
    <FaStar className='text-orange' />
    <FaStar className='text-orange'/>
    <FaStar className='text-orange'/>
    <FaStar className='text-orange'/>
    <FaRegStar />
 </div>
 <h5 className='text-xl font-bold my-2 text-red-500'>{a.price}</h5>
</div>       
          ))}
        
        
              
        </div>
       </div>


       </div>
  

     </section>
    </>
  )
}

export default page