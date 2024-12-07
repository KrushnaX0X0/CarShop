import React from 'react'

function CarCard({ cardata, index }) {
  console.log(cardata, index)
  // const [carName,carPictureUrl,ownerName,price,usedTime] = cardata
  return (
    <div className='mt-8 bg-slate-500 h-56 w-48 rounded-md '>
      <div className='h-35 w-44 block m-auto  rounded-xl overflow-hidden '>
        <img src={cardata.carPictureUrl} className='h-full w-full' />

      </div>
      <div className='text-white ml-2'>
        <p>CarName: {cardata.carName}</p>
        <p>ownerName: {cardata.ownerName}</p>
      </div>



    </div>
  )
}

export default CarCard  