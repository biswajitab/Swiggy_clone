import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { MdStars } from "react-icons/md";
import RestaurantCard from './restaurantCard';
import { Link } from 'react-router-dom';

function TopRestrauant({dataa}) {
  const [value, setValue] = useState(0);
  
//   const [data, setData] = useState([1]);
//   async function fetchData(){
//   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
//   const result = await data.json();
//   console.log(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//   setData(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
// }
//   useEffect(() => {
//     fetchData()
//   }, []);


  function handelNext(){
  console.log(value)
   const abc=value>=420 ? "":setValue((prev)=>prev + 42)
  return abc;
  }
  function handelPrev(){
   const kk= value<=0?"":setValue((prev)=>prev - 42) 
   return kk;
  console.log(value)
  }
  
  
  return (
    <div className='w-full'>
     <div className='max-w-[1200px] mx-auto  mt-8 overflow-hidden'>
        <div className='flex justify-between items-center my-3'>
        <h2 class="font-bold text-[25px] m-3">Top restaurant chains in Bangalore</h2>
        <div className='flex'>
          <div onClick={handelPrev} className={`w-[30px] h-[30px] cursor-pointer flex items-center justify-center  rounded-full mx-2  ${value <=0 ? "bg-gray-100 ":"bg-gray-200"}`}>
              <FaArrowLeft className={`text-black ${value <=0 ? "text-slate-400":"text-slate-950"}`}/>
          </div>
          <div onClick={handelNext} className={`w-[30px] h-[30px] cursor-pointer flex items-center justify-center rounded-full mx-2 ${value<=124 ? "bg-gray-200":"bg-gray-100 "}`}>
             <FaArrowRight className={`text-black ${value >=124 ? "text-slate-400":"text-slate-950"}`}/>
          </div>
        </div>
        </div>
         
       
        <div className={`flex mt-4 gap-5 w-full duration-300`} style={{translate:`-${value}%`}}>
          {
            dataa.map((restaurant,index)=>(  

          //  <div>
          //   <div key={index} className='hover:scale-95 duration-300'>
          //     <div className='min-w-[295px] h-[183px] relative'>
          //       <img className='h-full w-full aspect-video rounded-2xl relative object-cover' key={index} src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + restaurant?.info?.cloudinaryImageId} alt="" />
          //       <div className=' bg-gradient-to-t rounded-2xl from-black from-1% to-transparent to-40% absolute top-0 h-full w-full'></div>
          //       <p className='absolute bottom-2 .ms-3 text-white text-2xl font-bold'>{restaurant.info.aggregatedDiscountInfoV3?.header + restaurant.info.aggregatedDiscountInfoV3?.subHeader}</p>
          //     </div>
          //     <div className='mt-3'>
          //        <p className='text-lg font-semibold'>{restaurant.info.name}</p>
          //        {/* <p className='flex items-center gap-1 '><MdStars  className='text-green-600  flex items-center text-lg font-semibold'/>{restaurant.info.avgRating } . {""}
          //        <span className='inline text-base font-bold'>{restaurant.info.sla.slaString}</span></p> */}
          //        <p className='flex items-center gap-1'><MdStars className='text-green-800 flex items-center text-lg font-medium' />{restaurant.info.avgRating}  {""}
          //        <span className='inline text-base font-bold'>· {restaurant.info.sla.slaString}</span></p>
          //        <p className='line-clamp-1 text-black/60 font-medium'>{restaurant.info.cuisines.join(", ")}</p>
          //        <p className='line-clamp-1 text-black/60 font-medium'>{restaurant.info.locality}</p>
          //     </div>
          //   </div>
          
           <div key={index} className='hover:scale-95 duration-300'>
             <RestaurantCard restaurant={restaurant}/>
           </div>
        ))
          }
          
        </div>
       
      </div>  
      <hr className='border mt-10' />
    </div>
  
  );
}

export default TopRestrauant;