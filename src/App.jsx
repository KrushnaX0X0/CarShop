import { useState ,useEffect} from 'react'
import './App.css'
import CarCard from './components/CarCard'
import axios from 'axios'

function App() {
 const [cardata,setCardata] = useState([])

 const loadCrad = async()=>{
    let responce = await axios.get('http://localhost:3000/cars')
    setCardata(responce?.data?.data)
 }

 useEffect(() => {
   loadCrad(cardata)
 }, [])
 

console.log()
  return (
    <div className='flex flex-row justify-evenly gap-5 h-full w-full   flex-wrap'>
      {
        cardata.map((car,index)=>{
          return(
            <div className="">
            <CarCard cardata={car} key={index}/>
            </div>
          )
        })
      }
    </div>
  )
}

export default App
