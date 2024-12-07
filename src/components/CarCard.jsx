import React from 'react'
import Button from './Button'
import "./../../src/app.css"

function CarCard({ cardata, index }) {
  console.log(cardata, index)
  // const [carName,carPictureUrl,ownerName,price,usedTime] = cardata
  return (
    <div className='mt-8 bg-slate-400 h-72 w-56 rounded-md  shadow-lg shadow-black/100'>
     <div className='h-32  w-40 block m-auto  p-2 '>
      <img className='h-fuil w-full  rounded-full' src={cardata.carPictureUrl} alt="" />
     </div>
     <div className=' h-24  pl-2'>
      <span>Car name: {cardata.carName}</span>
      <span>ownerName: {cardata.ownerName}</span>
      <span>Price: {cardata.price}</span>
     </div>

     <div className='ml-3 mt-3'>
      <Button title="click me"/>
     </div>

   
     

      

    </div>
  )
}

export default CarCard  