import { useState, useEffect } from 'react'
import './App.css'
import { Humidity } from './components/Humidity'
import { Wind } from './components/Wind'
import { FeelsLike } from './components/FeelsLike'
import { Temp, MaxMinTemp } from './components/Temp'
import { SunriseSunset } from './components/SunriseSunset'
import { Pressure, SeaPressure, GroundPressure } from './components/Pressure'
import { Visibility } from './components/Visibility'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const [position, setPosition] = useState({})


   const API_url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&lang=en&appid=`;

  const searchLocation = async (event) =>{
    if (event.key === 'Enter') {
      const response = await fetch(API_url);
      const api = await response.json();
      setData(api);
      setLocation('')
    }
  }

  return (
    <div className='relative w-full h-full'>
      <div className="relative flex flex-col w-full h-full">
        <figure className='absolute w-full h-full z-0'>
          <img className='absolute w-full h-full object-cover' src="assets/background.jpg" alt="Background image" />
        </figure>
        <div className="search z-10">
          <input 
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
        </div>
        {data.main &&
          <div className="flex flex-col items-center justify-evenly h-full z-10">
          <div className="w-5/6 sm:w-3/4">
              <div className="location">
                <p className='text-3xl font-semibold'>{data.name}</p>
              </div>
            <div className='flex justify-between items-center bg-black bg-opacity-15 backdrop-blur-sm rounded-lg p-3'>
              <div>
                <span className='font-bold text-xl'>{data.weather[0].description}</span>
                <Temp data={data} />
                <FeelsLike data={data} />
              </div>
              <div>
                <SunriseSunset sunrise={data.sys.sunrise} sunset={data.sys.sunset} />
              </div>
            </div>
          </div>

          <div className='font-semibold w-5/6 sm:w-3/4 relative flex flex-col gap-5 justify-between items-center bg-black bg-opacity-15 backdrop-blur-sm rounded-lg p-3'>
            <MaxMinTemp className='relative w-full flex justify-between' data={data} />
            <Visibility className='relative w-full flex justify-between' data={data} />
            <GroundPressure className='relative w-full flex justify-between' data={data} />
            <SeaPressure className='relative w-full flex justify-between' data={data} />
        </div>
            <div className="flex w-5/6 sm:w-3/4 justify-between text-center font-medium bg-black bg-opacity-15 backdrop-blur-sm rounded-lg p-3">
              <Humidity data={data} />
              <Wind data={data} />
              <Pressure data={data} />
            </div>
          </div>
        }
      </div>
      {/* <div className='relative flex flex-col items-center w-full mt-6'>
       
      </div> */}
    </div>
  )
}

export default App
