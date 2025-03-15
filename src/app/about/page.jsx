import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

function page() {
  return (
    <>
    <section className='py-10 px-3'>
        <div className="container">
            <h2 className='text-center text-3xl font-bold'>About Us</h2>

        </div>
    </section>

    <section className='px-3 py-5' >
        <div className="container">
          <div className='flex items-center gap-4 justify-center'>
             <button className='px-3 rounded-lg bg-orange text-white py-1 border'>Development</button>
             <button className='px-3 rounded-lg py-1 border'>Qualified team</button>
             <button className='px-3 rounded-lg py-1 border'>Strategy</button>
          </div>
          <p className='border p-4 mt-4 rounded-lg'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
        

          <div className='grid grid-col-1 my-10 gap-4  md:grid-cols-2'>
             <div>
                <img className='rounded-lg' src="https://demos.codezeel.com/wordpress/WCM09/WCM090202/default/wp-content/uploads/2023/12/about-banner-01.jpg" alt="" />
             </div>
             
             <div>
                <img className='rounded-lg' src="https://demos.codezeel.com/wordpress/WCM09/WCM090202/default/wp-content/uploads/2023/12/about-banner-02.jpg" alt="" />
               
                <div className='grid gap-4 mt-4 grid-cols-2'>
                   <div>
                    <img className='rounded-lg' src="https://demos.codezeel.com/wordpress/WCM09/WCM090202/default/wp-content/uploads/2023/12/about-banner-03.jpg" alt="" />
                   </div>
                    <div>
                        <img className='rounded-lg' src="https://demos.codezeel.com/wordpress/WCM09/WCM090202/default/wp-content/uploads/2023/12/about-banner-04.jpg" alt="" />
                    </div>
                </div>
             </div>

          </div>
          </div>
    </section>

    <section className='py-10 px-3 bg-[#f2f2f2]'>
        <div className="container">
         <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
                <div>
               <h2 className='font-bold text-4xl mb-8'>Inspiration, innovation, <br />
               and opportunities.</h2>
               <p className='text-lg'>Many Desktop Publishing Packages And Web Page Editors Now Use Lorem Ipsum As Their Default Model Text.</p>
               </div>
               <div className='mt-5'>
                <button className='px-6 py-1 text-orange mb-2 items-center flex gap-1 bg-white text-xl rounded-lg'> <IoMdArrowDropup />Bussiness's Visison</button>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <button className='px-6 py-1 mt-4 mb-2 items-center flex gap-1 bg-white text-xl rounded-lg'><IoMdArrowDropdown /> Our Mission</button><br />
                <button className='px-6 py-1  flex items-center gap-1 mb-2 bg-white text-xl rounded-lg'><IoMdArrowDropdown /> Our Support</button>

               </div>
            </div>
            <div>
                <img className='rounded-sm' src="https://demos.codezeel.com/wordpress/WCM09/WCM090202/default/wp-content/uploads/2023/12/about-banner-05.png" alt="" />
            </div>
         </div>
        </div>
    </section>

    {/* parallex */}
    <section>
        <img src="" alt="" />
    </section>
    </>
  )
}

export default page