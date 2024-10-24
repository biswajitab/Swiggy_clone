import React, { useState,useEffect } from 'react'
import Category from './Category'
import TopRestrauant from './TopRestrauant'
import OnlineFoodDeleviry from './OnlineFoodDeleviry';

function Body() {   
  const [categoryData,SetCategoryData]=useState([])
  const [topRestaurant,setTopRestaurant]=useState([]);
  
    async function fetchData(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const result = await data.json();
    // console.log(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    SetCategoryData(result?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info)
    setTopRestaurant(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    // console.log(result)
    
  }
    useEffect(() => {
      fetchData()
    }, []);
  return (
   <div className='w-full'>
     <div className='max-w-[1200px] mx-auto  overflow-hidden'>
        <Category catdata={categoryData}/>
        <TopRestrauant dataa={topRestaurant}/>
        <OnlineFoodDeleviry dataaa={topRestaurant}/>
    </div>
   </div>
  )
}

export default Body