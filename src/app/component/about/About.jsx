import React from 'react'
import { MdVerified } from "react-icons/md";

function About() {
  return (
    <>
    <section className='md:py-30  py-10 px-3'>
        <div className="container">
            <div className="md:grid gap-14  grid-cols-2">
             <div>
              <img className='rounded-lg' src="https://demos.codezeel.com/wordpress/WCM09/WCM090202/default/wp-content/uploads/2025/01/about-img.jpg" alt="" />
             </div>
             <div className='py-5'>
               <h6 className='text-orange text-lg italic'>Your Pet Will Love</h6>
               <h2 className='font-semibold text-5xl'>The Journey To Our Meowzy  A Passion For Pets</h2>
               <p className='py-3 text-lg '>Welcome to Meowzy! Our mission is to provide top-notch care and services for your grooming to boarding we ensure every pet feels loved, safe, and happy trust us with your furry family members.</p>
                <div className='grid grid-rows-3 mb-6 grid-flow-col'>
                    <li className='flex items-center text-lg  gap-1'><MdVerified className='text-orange'/>Over 10 years of experience</li>
                    <li className='flex items-center mt-3 text-lg gap-1'><MdVerified className='text-orange'/>20 talented vets ready to help</li>
                    <li className='flex items-center mt-3 text-lg gap-1'><MdVerified className='text-orange'/> High-quality products only</li>
                    <li className='flex items-center  text-lg  gap-1'><MdVerified className='text-orange'/>Exercise and Mental Stimulation</li>
                    <li className='flex items-center text-lg gap-1'><MdVerified className='text-orange'/>Dental Hygiene Care</li>
                    <li className='flex items-center text-lg gap-1'><MdVerified className='text-orange'/>Regular Veterinary Check-ups</li>
              </div>
              <a href="#" className='px-4 py-2 bg-orange text-white text-lg font-medium rounded-full '>Read More</a>
             </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default About