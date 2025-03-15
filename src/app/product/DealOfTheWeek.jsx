import React from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FiBarChart2 } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { RiShareBoxFill } from "react-icons/ri";

const latestProduct = [
  {
    id: 1,
    title: "Pets Empire Stainless Steel Dog Bowl (Set of 2)",
    oldPrice: "$37",
    price: "$30",
    thumbnail:
      "https://demos.codezeel.com/wordpress/WCM09/WCM090202/default/wp-content/uploads/2023/11/04-20.jpg",
  },
  {
    id: 2,
    title: "Dog/Puppy Obedience Recall Training Agility Lead",
    price: "$25 - $22",
    thumbnail:
      "https://demos.codezeel.com/wordpress/WCM09/WCM090202/default/wp-content/uploads/2023/11/06.jpg",
  },

  {
    id: 3,
    title: "Maxtil Dog Christmas Sweater Dog Cat Autumn",

    price: "$16",
    thumbnail:
      "https://demos.codezeel.com/wordpress/WCM09/WCM090202/default/wp-content/uploads/2023/11/11.jpg",
  },

  {
    id: 4,
    title: "Foodie Puppies Pet Puzzle Toy for Dispensing Treats",
    price: "$27",
    thumbnail:
      "https://demos.codezeel.com/wordpress/WCM09/WCM090202/default/wp-content/uploads/2023/11/14.jpg",
  },
  {
    id: 5,
    title: "Orijen Original Dry Dog Food Of All Life Stagesn",
    price: "$15 – $28",
    thumbnail:
      "https://demos.codezeel.com/wordpress/WCM09/WCM090202/default/wp-content/uploads/2023/11/03-40.jpg",
  },

  {
    id: 6,
    title: "Pedigree Adult Dry Dog Food, 1kg Pack",
    price: "$12 – $38",
    thumbnail:
      "https://demos.codezeel.com/wordpress/WCM09/WCM090202/default/wp-content/uploads/2023/11/01-7.jpg",
  },
];

function DealOfTheWeek() {
  return (
    <>
      <section className="pb-10 bg-white px-3">
        <div className="container">
          <h6 className="text-center font-medium text-lg italic text-orange ">
            Special Products
          </h6>
          <h3 className="text-4xl font-bold text-center">Deal Of The</h3>
          <div className="grid grid-cols-1  sm:grid-cols-2  sm:ps-9 md:grid-cols-3  lg:grid-cols-5 gap-4 mt-7">
            {latestProduct.slice(0, 5).map((a) => (
              <div className="card-animation mt-5 " key={a.id}>
                <div className="card-hover flex flex-col gap-2">
                  <FaRegHeart className="text-xl" />
                  <FiBarChart2 className="text-xl" />
                  <IoEyeOutline className="text-xl" />
                  <RiShareBoxFill className="text-xl" />
                </div>
                <div>
                  <div className="overflow-hidden">
                    <img
                      className="latest-card-img rounded-lg"
                      src={a.thumbnail}
                      alt=""
                    />
                  </div>
                  <h6 className="my-2 font-medium">{a.title}</h6>
                  <div className="flex items-center gap-1 ">
                    <FaStar className="text-orange" />
                    <FaStar className="text-orange" />
                    <FaStar className="text-orange" />
                    <FaStar className="text-orange" />
                    <FaRegStar />
                  </div>
                  <h5 className="font-bold text-xl text-red-600">
                    <span className="line-through text-black font-medium">
                      {a.oldPrice}
                    </span>{" "}
                    {a.price}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default DealOfTheWeek;
