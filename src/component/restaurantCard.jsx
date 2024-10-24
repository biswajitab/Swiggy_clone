import React from 'react'
import { MdStars } from "react-icons/md";
import { Link } from 'react-router-dom';

function RestaurantCard({restaurant}) {
  // console.log(restaurant)
  return (
    <Link to={`/RestaurantMenu/${restaurant.info.id}`}>
    <div>
             <div className='min-w-[275px] h-[183px] relative'>
                <img className='h-full w-full aspect-video rounded-2xl relative object-cover'  src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + restaurant?.info?.cloudinaryImageId} alt="" />
                <div className=' bg-gradient-to-t rounded-2xl from-black from-1% to-transparent to-40% absolute top-0 h-full w-full'></div>
                <p className='absolute bottom-2 ms-3 text-white text-2xl font-bold'>{restaurant.info.aggregatedDiscountInfoV3?.header + restaurant.info.aggregatedDiscountInfoV3?.subHeader}</p>
              </div>
              <div className='mt-3'>
                 <p className='text-lg font-semibold'>{restaurant.info.name}</p>
                 <p className='flex items-center gap-1'><MdStars className='text-green-800 flex items-center text-lg font-medium' />{restaurant.info.avgRating}  {""}
                 <span className='inline text-base font-bold'>·{restaurant.info.sla.slaString}</span></p>
                 <p className='line-clamp-1 text-black/60 font-medium'>{restaurant.info.cuisines.join(", ")}</p>
                 <p className='line-clamp-1 text-black/60 font-medium'>{restaurant.info.locality}</p>
              </div>
    </div>
     </Link>
  )
}

export default RestaurantCard