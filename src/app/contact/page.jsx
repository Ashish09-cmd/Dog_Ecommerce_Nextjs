import Link from "next/link";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { AiTwotoneMail } from "react-icons/ai";
import { IoTimeOutline } from "react-icons/io5";

function page() {
  return (
    <>
      <section className="py-10 bg-light ">
        <div className="container text-center">
          <div className="flex justify-center items-center ">
            <Link href={"/"}>
           
              <p>Home</p>
            </Link>
            / <p>contact Us</p>
          </div>
          <h2 className="text-3xl font-bold ">Contact Us</h2>
        </div>
      </section>
      <section className="py-15 border-b border-[#dadada] ">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31713618354!2d85.28493302080203!3d27.708954252207754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1741948922918!5m2!1sen!2snp"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg h-full "
              />
            </div>
            <div className="p-8  bg-light">
              <h3 className="text-3xl font-bold text-center">Get In Touch With Us</h3>
              <p className="text-center">If you wish to directly reach us, Please fill out the form below -</p>
             <form className=" mt-6 mx-auto p-6 rounded-lg shadow-md w-96">
  <label className="block mb-2 text-gray-700">Your name</label>
  <input type="text" className="w-full bg-white p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your name" />
  <label className="block mt-4 mb-2 text-gray-700">Your email</label>
  <input type="email" className="w-full bg-white p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" />
  <label className="block mt-4 mb-2 text-gray-700">Your message (optional)</label>
  <textarea className="w-full p-2 border bg-white border-gray-300 rounded h-24 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Type your message" defaultValue={""} />
  <button type="submit" className="mt-4 w-full bg-orange text-white p-2 rounded hover:bg-blue-600 transition">Submit</button>
</form>

            </div>
          </div>
        
        <div className="py-10 bg-light  mt-10">
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex items-center justify-center border-e  border-[#dadada]  p-4 gap-2">
          <CiLocationOn className="text-5xl text-orange "/>
          <ul>
            <li>60 29th San Francisco,</li>
            <li>507 - UTC America.</li>
          </ul>
          </div>
          <div className="flex items-center justify-center border-e  border-[#dadada]  p-4 gap-2">
          <FiPhone  className="text-5xl text-orange "/>
          <ul>
            <li>Call us :
          </li>
            <li>  (+01) 987-654-3210</li>
          </ul>
          </div>
          <div className="flex items-center justify-center border-e  border-[#dadada]  p-4 gap-2">
          <AiTwotoneMail className="text-5xl text-orange "/>
          <ul>
            <li>Mail us :
           </li>
            <li> demo@example.com</li>
          </ul>
          </div>
          <div className="flex items-center justify-center border-e  border-[#dadada]  p-4 gap-2">
          <IoTimeOutline className="text-5xl text-orange "/>
          <ul>
            <li>Open time :
            </li>
            <li>10:00AM – 6:00PM</li>
          </ul>
          </div>
         </div>
        </div>

        </div>
      </section>
    </>
  );
}

export default page;
