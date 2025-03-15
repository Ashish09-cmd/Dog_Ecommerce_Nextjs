import Link from 'next/link'
import React from 'react'

function page() {
  return (
   <section className='py-10 px-3 bg-light'>
    <div className="container text-center">
    <div className="flex justify-center items-center ">
            <Link href={"/"}>
              <p>Home</p>
            </Link>
            / <p>FAQs</p>
          </div>
          <h2 className="text-3xl font-bold ">FAQs</h2>

    </div>
   </section>
  )
}

export default page