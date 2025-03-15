import Link from 'next/link'
import React from 'react'
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";


function Header() {
 
   
  return (
    <>
    <header className='py-2 px-3 bg-orange'>
        <div className="container md:flex items-center justify-between text-center text-white">
         <p>Get 15% Discount + FREE surprise gift on your first order</p>
         <ul className=' hidden md:flex justify-end '>
            <li className=' border-r border-[#dadada91] px-6'><Link href={'/about'}>About Us</Link></li>
            <li className='border-r border-[#dadada91] px-6'><Link href={'/contact'}>Contact Us</Link></li>
            <li className='border-r border-[#dadada91] px-6'><Link href={'/blog'}>Blog</Link></li>
            <li className=' px-6'><Link href={'/faqs'}>FAQs</Link></li>

         </ul>
        </div>
    </header>


     {/* navbar */}
     <section className=' navbar border-b border-[#dadada] shadow py-6 bg-white px-3'>
        <div className="container flex justify-between items-center">
         <Link href={'/'}><div className='logo' >
            <img className='w-40' src="https://demos.codezeel.com/wordpress/WCM09/WCM090202/default/wp-content/plugins/templatemela-plugin-meowzy/layouts/default/img/logo.svg" alt="" />
         </div></Link>
         {/* menu list */}
         <nav className='hidden lg:block '>
            <ul className='flex lg:gap-13 gap-5 items-center '>
                <li><Link className='font-semibold text-lg text-orange-400 transition-all' href={'/'}>Home</Link></li>

                <li className='flex items-center gap-1 dropdown-parent   relative'><Link className='font-semibold text-lg' href={'/shop'}>Shop </Link><MdKeyboardArrowDown className='text-lg'/>
                
                <div className='dropdown-child p-6  bg-white r rounded'>
                  <div className='flex justify-between items-cente'>
               <ul className=''>
                  <li><a href="#" className='  text-xl font-semibold'>Product Types</a></li>
                  <li className='mt-1'><a href="" className=' hover:text-orange-600'>Simple Products</a></li>
                  <li><a href="#" className=' hover:text-orange-600 '>Grouped Products</a></li>
                  <li><a href="" className=' hover:text-orange-600'>Variable ProductsNEW</a></li>
                  <li><a href="" className=' hover:text-orange-600'>External/Affiliate Product</a></li>
                  <li><a href="" className=' hover:text-orange-600'>Onsale ProductsSALE</a></li>
                   <li><a href="" className=' hover:text-orange-600'>Upsell Products</a></li>
               </ul>
                <ul>
                  <li><a href="" className='  text-xl font-semibold'>WooCommerce Pages</a></li>
                  <li className='mt-1'><a href=""  className=' hover:text-orange-600'>Shop Page</a></li>
                  <li><a href=""  className=' hover:text-orange-600'>Checkout Page</a></li>
                  <li><a href=""  className=' hover:text-orange-600'>My account</a></li>
                  <li><a href=""  className=' hover:text-orange-600'>Shopping Cart</a></li>
                  <li><a href=""  className=' hover:text-orange-600'>Shop Ajax FilterHOT</a></li>
                  <li><a href=""  className=' hover:text-orange-600'>Product Category</a></li>
                  <li><a href=""  className=' hover:text-orange-600'>Privacy Policy</a></li>
                </ul>
                <ul>
                  <li><a href="" className='  text-xl font-semibold'>Product Features</a></li>
                  <li className='mt-1'><a href=""  className=' hover:text-orange-600'>Stock Progress Bar</a></li>
                  <li><a href=""  className=' hover:text-orange-600'>Color/Image Swatches</a></li>
                  <li><a href=""  className=' hover:text-orange-600'>Size Guide Table</a></li>
                  <li><a href=""  className=' hover:text-orange-600'>Custom Tab</a></li>
                  <li><a href=""  className=' hover:text-orange-600'>Countdown Timer</a></li>
                  <li><a href=""  className=' hover:text-orange-600'>Product Video</a></li>
                  <li><a href=""  className=' hover:text-orange-600'>Product Brand</a></li>
                </ul>
                <div>
                  <img className='rounded-lg' src="https://demos.codezeel.com/wordpress/WCM09/WCM090202/default/wp-content/uploads/2023/10/171.jpg" alt="" />
                </div>
                </div>
               </div>

                </li>
                <li className='flex items-center gap-1'><Link className='font-semibold  hover:text-orange-400  transition-all text-lg' href={''}>Categories </Link><MdKeyboardArrowDown /></li>
                <li className='flex items-center gap-1'><Link className='font-semibold hover:text-orange-400  transition-all text-lg' href={''}>Product</Link> <MdKeyboardArrowDown /></li>
                <li className='flex items-center gap-1'><Link className='font-semibold hover:text-orange-400  transition-all text-lg' href={''}>Top deals </Link><MdKeyboardArrowDown /></li>
                <li className='flex items-center gap-1'><Link className='font-semibold hover:text-orange-400  transition-all text-lg' href={''}>Elements </Link><MdKeyboardArrowDown /></li>

            </ul>
         </nav>
         {/* navbar icons */}
       
          <ul className='flex gap-4 items-center' >
            <li><IoSearch  className='sm:text-2xl text-xl'/></li>
            <li><FaRegUser className='sm:text-2xl text-xl' /></li>
            <li><CiHeart className='sm:text-3xl text-2xl'/>
            </li>
            <li><IoBagOutline className='sm:text-3xl text-xl' /></li>
          </ul>
        </div>
     </section>
    
    </>
  )
}

export default Header