
import React from 'react'



const blog = [
    {
        id:1,
        title:'How to Write a Blog Post Your Readers Will..',
        image:'https://demos.codezeel.com/wordpress/WCM09/WCM090202/default/wp-content/uploads/2023/12/01-8.jpg',
        description:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione explicabo ex inventore praesentium sint magnam corporis? ',
        date:'February 9, 2024',
    },
    {
        id:2,
        title:'9 Content Marketing Trends and Ideas to...',
        image:'https://demos.codezeel.com/wordpress/WCM09/WCM090202/default/wp-content/uploads/2023/12/02-32.jpg',
        description:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione explicabo ex inventore praesentium sint magnam corporis?',
        date:'February 10, 2024',
    },
    {
        id:3,
        title:'The Ultimate Guide to Marketing Strategies ...',
        image:'https://demos.codezeel.com/wordpress/WCM09/WCM090202/default/wp-content/uploads/2023/12/03-31.jpg',
        description:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione explicabo ex inventore praesentium sint magnam corporis?',
        date:'February 11, 2024',
    },
    {
        id:4,
        title:'50 Best Sales Questions to Determine Your Customer..',
        image:'https://demos.codezeel.com/wordpress/WCM09/WCM090202/default/wp-content/uploads/2023/12/04-22.jpg',
        description:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione explicabo ex inventore praesentium sint magnam corporis?',
        date:'February 12, 2024',
    },
    {
        id:5,
        title:'6 Simple Ways To Boost Your Ecommerce Conversion Rate',
        image:'https://demos.codezeel.com/wordpress/WCM09/WCM090202/default/wp-content/uploads/2023/12/05-1.jpg',
        description:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione explicabo ex inventore praesentium sint magnam corporis?',
        date:'February 13, 2024',
    },
    {
        id:6,
        title:'9 Customer Experience Trends That will Define the Next Year',
        image:'https://demos.codezeel.com/wordpress/WCM09/WCM090202/default/wp-content/uploads/2023/12/06-1.jpg',
        description:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione explicabo ex inventore praesentium sint magnam corporis?',
        date:'February 14, 2024',
    },
    
]

function Blog() {
  
  return (
   <>
   <section className='py-10 bg-white px-3'>
    <div className="container">
    <h6 className='text-center font-medium text-lg italic text-orange '>From The Blog</h6>
            <h3 className='text-4xl font-bold text-center'>
             Our Latest Blog
            </h3>
                
        


            <div className="grid grid-cols-1 gap-4  sm:grid-cols-2 mt-6 md:grid-cols-3">
                {blog.slice(0,3).map(a=>(
                <div className='blog-card' key={a.id}>
                  <div className='overflow-hidden  '>
               <img className='rounded-lg' src={a.image} alt="" />
                </div>
                <h5 className='py-2 font-semibold text-orange '>{a.date} <span>. By Editor</span></h5>
                <h4 className=' text-xl font-bold'>{a.title}</h4>
               <p className='py-2'>{a.description}</p>
                 <a href="#" className='underline text-xl font-semibold '>Read More</a>
                    </div>
                ))}
          
            </div>
           
    </div>
   </section>
   
   </>
  )
}

export default Blog