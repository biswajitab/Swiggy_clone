import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
function RestaurantMenu() {
const {id} = useParams();
const [menuData,setMenuData]=useState("")

async function fetchMenu(){
 const menudata=await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
 const res= await menudata.json()
 setMenuData(res?.data?.cards[0]?.card?.card?.text)
 console.log(res?.data?.cards[0]?.card?.card?.text)
}
  useEffect(()=>{
    fetchMenu();
  },[])
  return (
    <div>RestaurantMenu ...{id} {menuData}</div>
  )
}

export default RestaurantMenu