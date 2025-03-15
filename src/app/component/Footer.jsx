import Link from 'next/link'
import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { MdPhonelinkRing } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

function Footer() {
  return (
    <>
    <footer className='bg-white py-20 border-b border-[#dadada] px-3'>
      <div className="container">
        <div className="md:grid lg:grid-cols-4 sm:grid-cols-2 ">
           <div>
            <h4 className='font-semibold text-xl'>Store Information</h4>
            <ul className='flex flex-col gap-3'>
              <li className='mt-4 flex gap-1'><CiLocationOn /> <Link href={''}> 60 29th Street San Francisco, <br /> 507-Union Trade Center, <br /> United States America - 94110</Link></li>
              <li className='flex gap-1 items-center'><BsTelephone  /><Link href={''}>(+00) 123-456-7890</Link></li>
              <li className='flex gap-1 items-center'><MdPhonelinkRing /><Link href={''}>(+91)-012-345-6789</Link></li>
              <li className='flex gap-1 items-center'><IoMailOutline /><Link href={''}>demo@example.com</Link></li>
            </ul>
           </div>
           <div>
            <h4 className='font-semibold text-xl'>Find Product</h4>
            <ul className='flex flex-col gap-3'>
              <li className='mt-4'><Link href={''}>Order Status</Link></li>
              <li><Link href={''}>Terms Conditions</Link></li>
              <li><Link href={''}>Policy For Sellers</Link></li>
              <li><Link href={''}>Policy For Buyers</Link></li>
              <li><Link href={''}>Shipping & Refund</Link></li>
              <li><Link href={''}>Wholesale Policy</Link></li>
            </ul>
           </div>
           <div>
            <h4 className='font-semibold text-xl'>Useful links</h4>
            <ul className='flex flex-col gap-3'>
              <li className='mt-4'><Link href={''}>Product Support</Link></li>
              <li><Link href={''}>Checkout</Link></li>
              <li><Link href={''}>License Policy</Link></li>
              <li><Link href={''}>Affiliate</Link></li>
              <li><Link href={''}>Locality</Link></li>
              <li><Link href={''}>Order Tracking</Link></li>
            </ul>
           </div>
           <div>
            <h4 className='font-semibold text-xl'>Our Newsletter</h4>
            <p>Subscribe to our latest newsletter to get news about special discounts.</p>
            <div className='mt-7'>
              <form >
              <input type="email" placeholder='Email' className='bg-[#dadada] outline-0 w-full   py-2 rounded-full px-5' />
              <button className='py-2 px-8 bg-orange rounded-full mt-4 text-white '>Subscribe</button>
              </form>
            </div>
           </div>
        </div>

      </div>
    </footer>

     <section className='sub-footer px-3 py-5'>
      <div className="container md:grid grid-cols-3 ">
       {/* footer icons */}
       <ul className='flex gap-5 items-center md:justify-start justify-center '>
        <li><FaFacebookF  className='text-xl' /></li>
        <li><RiTwitterXLine  className='text-xl'/></li>
        <li><FaInstagram  className='text-xl'/></li>
        <li><FaLinkedinIn  className='text-xl'/></li>
        <li><AiOutlineYoutube  className='text-xl'/></li>
       </ul>
       <div className='text-center mt-4'>
        <p >© 2025 Meowzy Demo - WordPress Theme by Avanam</p>
       </div>
       <div className='flex items-center md:justify-end justify-center mt-4'>
        <img src="https://demos.codezeel.com/wordpress/WCM09/WCM090202/default/wp-content/uploads/2025/01/payment.png" alt="" />
       </div>
      </div>

     </section>
    
    </>
  )
}

export default Footer