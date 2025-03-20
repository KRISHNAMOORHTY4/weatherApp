import React, { useEffect, useState } from 'react'
import './Main.css'
import sun from './image/sun.webp'
import { SlSpeedometer } from "react-icons/sl";
import { FiWind } from "react-icons/fi";
import cloud from "./image/cloud.png"
import Speed from "./image/Speed.png"

function Main() {
    const [data,setdata]=useState("Coimbatore")
    const [city,setcity]=useState(null)
   
    const getfunction=async()=>{

        const getdata=await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=52db4b67dc0aa576281739cb0341de34&units=metric`)
        const total=await getdata.json()
        setcity(total)

    }
    
    useEffect(()=>{
        getfunction() 
    },[data])
    console.log(city);
    


  return (
    <div className='main-con'>
      
        <h2 data-aos="fade-up" data-aos-duration="1000" style={{textAlign:'center',color:'white'}}>Weather App</h2>
        
        
         <div className='inpu' data-aos="fade-up" data-aos-duration="1000">
         <input type="text"  className='form-control' value={data} onChange={(e)=>setdata(e.target.value)} placeholder='Enter the City' />
         </div>
         <div className='inpu1'data-aos="flip-up" data-aos-duration="1000">
         <img src={sun} style={{width:'20rem'}} alt="" />
           
         </div>
         <div className='city' data-aos="fade-up" data-aos-duration="1000">
            <h2>{city?.main?.temp}°C</h2>
            <h3>City : {city?.name}</h3>
            <h4>Country : {city?.sys?.country}</h4>
         </div>
         <div className='foot'>
         <div data-aos="fade-up" data-aos-duration="1000">
      <b><FiWind/> {city?.main?.humidity}%</b>  
         <h4>Humidity</h4>
         </div>
         <div data-aos="fade-up" data-aos-duration="1000">
      <b><SlSpeedometer/> {city?.wind?.speed} km/hb</b>  
         <h4>Wind Speed</h4>
         </div>
         </div>

       
    </div>
  )
}

export default Main