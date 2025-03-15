import Image from "next/image";
import Hiro from "./component/hiro/Hiro";
import About from "./component/about/About";
import LatestProduct from "./product/LatestProduct";
import TopCategory from "./product/TopCategory";
import FeaturedProduct from "./product/FeaturedProduct";
import DealOfTheWeek from "./product/DealOfTheWeek";
import Brand from "./component/Brand/Brand";
import Blog from "./component/Blog/Blog";

// last 
import { LiaShippingFastSolid } from "react-icons/lia";
import { TbPigMoney } from "react-icons/tb";
import { RiDiscountPercentLine } from "react-icons/ri";
import { IoGiftOutline } from "react-icons/io5";
import Testimonial from "./component/testimonial/Testimonial";

export default function Home() {
  return (
    <>
    <Hiro/>
    <About/>
    <LatestProduct/>
    
    {/* exlcusive section */}
    <section className="py-20 px-3 bg-white">
      <div className="container grid grid-cols-1  md:grid-cols-2">
        
        <div className="relative  ">
            <img className="rounded-lg" src="https://demos.codezeel.com/wordpress/WCM09/WCM090202/default/wp-content/uploads/2025/01/sub-banner-1.jpg" alt="" />
           <div className="absolute left-10 top-10">
             <h5 className="italic  sm:text-xl font-semibold">Exclusive offers!</h5>
             <h2 className="sm:my-5 mb-4 sm:mb-8 sm:text-4xl text-2xl font-bold">We Care & Share <br />
             Love For Pets</h2>
             <a href="#" className="px-4 py-2 rounded-full text-white bg-black font-medium">Shop Now</a>
           </div>
        </div>
        <div className="relative  ">
            <img className="rounded-lg" src="https://demos.codezeel.com/wordpress/WCM09/WCM090202/default/wp-content/uploads/2025/01/sub-banner-2.jpg" alt="" />
            <div className="absolute left-10 top-10">
             <h5 className="italic text-white sm:text-xl font-semibold">Summer Sale!</h5>
             <h2 className="sm:my-5 sm:mb-8 mb-4 text-white text-2xl sm:text-4xl font-bold">Dog Clothing & <br />
             Accessories </h2>
             <a href="#" className="px-4 py-2 rounded-full text-black bg-white font-medium ">Shop Now</a>
           </div>
        </div>
      </div>
    </section>

      <TopCategory/>
      <FeaturedProduct/>

      <DealOfTheWeek/>
      <Testimonial/>
      <Brand/>
      <Blog/>

      <section className="py-10 sm:mt-10 px-3 bg-orange text-white">
        <div className="container">
         <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex gap-5 border-r justify-center border-[#dadadaa4]">
            <div>
            <LiaShippingFastSolid className="sm:text-6xl text-3xl text-white"/>
            </div>
            <div>
              <h5 className="font-bold text-xl ">Free Shipping</h5>
              <p className="">Free shipping on all order</p>
            </div>
          </div>
          <div className="flex gap-5 border-r justify-center border-[#dadadaa4]">
            <div>
            <TbPigMoney className="sm:text-6xl text-3xl text-white"/>
            </div>
            <div>
              <h5 className="font-bold text-xl ">Money Return</h5>
              <p className="">Back guarantee in 7 days</p>
            </div>
          </div>
          <div className="flex gap-5 border-r justify-center border-[#dadadaa4]">
            <div>
            <RiDiscountPercentLine className="sm:text-6xl text-3xl text-white"/>
            </div>
            <div>
              <h5 className="font-bold text-xl ">Member Discount
              </h5>
              <p className=" ">Onevery order over $130.00</p>
            </div>
          </div>
          <div className="flex gap-5 justify-center ">
            <div>
            <IoGiftOutline className="sm:text-6xl text-3xl text-white"/>
            </div>
            <div>
              <h5 className="font-bold text-xl ">Special Gifts</h5>
              <p className=" ">Contact us Anytime</p>
            </div>
          </div>
         </div>
        </div>
      </section>

    </>
  );
}
