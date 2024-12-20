import React, { useState } from 'react';
import Inpute from '../components/Inpute';
import Button from '../components/Button';
import Car from '../assets/car.png';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
const apiUrl = import.meta.env.VITE_API_URL;

function Add() {
    const [car, setcars] = useState({
        carId: '',
        carName: '',
        price: '',
        useTime: '',
        ownerName: '',
        carPictureUrl: ''
    });

    // Function to handle adding a car
    const addCar = async () => {
        try {
            // Check if the required fields are filled out before sending the request
            if (!car.carId || !car.carName || !car.price || !car.useTime || !car.ownerName || !car.carPictureUrl) {
                toast.error('Please fill in all the fields!');
                return;
            }

            // Send a POST request to add the car
            const response = await axios.post(`${apiUrl}/addcar`, {
                carId: car.carId,
                carName: car.carName,
                price: car.price,
                useTime: car.useTime,
                ownerName: car.ownerName,
                carPictureUrl: car.carPictureUrl
            });

            // Reset the form fields after successful submission
            setcars({
                carId: '',
                carName: '',
                price: '',
                useTime: '',
                ownerName: '',
                carPictureUrl: ''
            });

        
            toast.success(response.data.message);
        } catch (error) {
            
            if (error.response) {
                
                toast.error(error.response.data.message || 'Something went wrong on the server!');
            } else if (error.request) {
                
                toast.error('No response from the server. Please try again later!');
            } else {
                
                toast.error('An error occurred while setting up the request!');
            }

            console.error('Error:', error);
        }
    }

    return (
        <div className='mt-24 x'>
            <div className=''>
                <img src={Car} alt="" className='h-20 block m-auto' />
            </div>
            <div className='h-80 w-80 text-center bottom-0 border-2 block m-auto bg-slate-200 rounded-lg'>
                <div className=' flex justify-center flex-col items-center h-full w-full'>
                    <Inpute text='text' placeholder='Enter Your car Id' value={car.carId} setvalue={(val) => { setcars({ ...car, carId: val }) }} />
                    <Inpute text='text' placeholder='Enter Your Img Url' value={car.carPictureUrl} setvalue={(val) => { setcars({ ...car, carPictureUrl: val }) }} />
                    <Inpute text='text' placeholder='Enter Your Car Name' value={car.carName} setvalue={(val) => { setcars({ ...car, carName: val }) }} />
                    <Inpute text='text' placeholder='Enter Your Owner Name' value={car.ownerName} setvalue={(val) => { setcars({ ...car, ownerName: val }) }} />
                    <Inpute text='text' placeholder='Enter Your Price' value={car.price} setvalue={(val) => { setcars({ ...car, price: val }) }} />
                    <Inpute text='text' placeholder='Enter Your useTime' value={car.useTime} setvalue={(val) => { setcars({ ...car, useTime: val }) }} />
                    <div className='mt-3 '>
                        <Button title='Add Car' onclick={addCar} />
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    );
}

export default Add;
