import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Access environment variable using import.meta.env
const apiUrl = import.meta.env.VITE_API_URL;

import add from '../assets/add.png';
import Carcard from '../components/Carcard';

function Home() {
  const [cars, setCars] = useState([]);

  // Fetch cars from the API
  const loadCars = async () => {
    try {
      // Make sure to use the apiUrl with the correct endpoint
      const response = await axios.get(`${apiUrl}/cars`);

      // Set the cars data from the API response
      if (response.data && Array.isArray(response.data.data)) {
        setCars(response.data.data);
      } else {
        console.error("Cars data is not an array", response.data);
      }
    } catch (error) {
      console.error("Error loading cars:", error);
    }
  };

  // Fetch cars when the component mounts
  useEffect(() => {
    loadCars();
  }, []);

  return (
    <>
      <h1 className='font-bold text-center text-4xl'>Your Cars</h1>
      <div className='relative h-full w-full flex gap-3 p-2 bg-slate-500'>
        {
          cars.length === 0 ? (
            <p>No cars available</p>  // If no cars, display a message
          ) : (
            cars.map((car) => (
              <Carcard key={car.carId} car={car} />
            ))
          )
        }
        <Link to="/add">
          <img src={add} className='h-12 absolute bottom-0 right-2 cursor-pointer' />
        </Link>
      </div>
    </>
  );
}

export default Home;
