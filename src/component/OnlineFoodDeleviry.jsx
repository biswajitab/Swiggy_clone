import React from 'react'
import RestaurantCard from './restaurantCard'

function OnlineFoodDeleviry({dataaa}) {
  return (
    <div>
      <h1>Restaurants with online food delivery in Delhi</h1>
      <div className=' grid grid-cols-4 gap-6'>
        {
           dataaa.map((restaurant,index)=>(  
           <div key={index} className='hover:scale-95 duration-300'>
             <RestaurantCard restaurant={restaurant}/>
           </div>
        ))
          }
      </div>
    </div>
  )
}

export default OnlineFoodDeleviry