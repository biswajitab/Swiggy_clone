import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

function Category({catdata}) {
  const [data, setData] = useState([]);
  const [value , setValue]=useState(0);

//   async function fetchData(){
//   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
//   const result = await data.json();
//   // console.log(result?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
//   setData(result?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
// }
//   useEffect(() => {
//     fetchData()
//   }, []);

  function handelNext(){
  console.log(value)
  const abc = value>=126 ? "":setValue((prev)=>prev + 42)
  return abc;
  }
  function handelPrev(){
   const kk= value<=0 ? "":setValue((prev)=>prev - 42) 
   return kk;
  console.log(value)
  }
  
  return (
    <div className='w-full'>
      <div className='max-w-[1200px] mx-auto mt-1 overflow-hidden'>
      <div className='flex justify-between items-center'>
        <h2 class="font-bold text-[25px] m-2">What's on your mind?</h2>
        <div className='flex mb-3'>
          <div onClick={handelPrev} className={`w-[30px] h-[30px] cursor-pointer flex items-center justify-center  rounded-full mx-2  ${value <=0 ? "bg-gray-100 ":"bg-gray-200"}`}>
          <FaArrowLeft className={`text-black ${value <=0 ? "text-slate-400":"text-slate-950"}`}/>
          </div>
          <div onClick={handelNext} className={`w-[30px] h-[30px] cursor-pointer flex items-center justify-center rounded-full mx-2 ${value<=124 ? "bg-gray-200":"bg-gray-100 "}`}>
           <FaArrowRight className={`text-black ${value >=124 ? "text-slate-400":"text-slate-950"}`}/>
          </div>
        </div>
      </div>

      {/* <div className={`flex mt-4 duration-100`} 
      style={{translate : `-${value}`}}> */}
      <div className={`flex mt-1 max-w-[1200px] duration-300`} 
        style={{translate:`-${value}%`}}>
        {
          catdata.map((img,index)=>(
            <img key={index} className='w-40' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${img.imageId}`} alt="" />
          ))
        }
      </div>
       <hr  className='border'/>
      </div>
       
       
    </div>
  
  );
}

export default Category;