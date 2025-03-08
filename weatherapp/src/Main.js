import React, { useEffect, useState } from 'react'
import './Main.css'

import sun from './Image/sun.webp'
import { BsSpeedometer } from "react-icons/bs";
import { GiWindSlap } from "react-icons/gi";
import cloud from "./Image/cloud1.png"

function Main() {
    const [data,setdata]=useState("Rameswaram")
    
    const [filter,setfilter]=useState(null)
 
   
  
    
   

   


  
   
  const getfunction=async()=>{
   
    const getdata=await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=52db4b67dc0aa576281739cb0341de34&units=metric`)
    const total=await getdata.json()
    console.log(total);
    setfilter(total)
    

  }
  useEffect(()=>{
    getfunction()
  },[data])
   
   
  return (
    <div>
      
    <div className='Main' data-aos="flip-up" data-aos-duration="1000">
      
      <div className='box'> <input className='form-control' style={{width:'400px',padding:'0.5rem',borderRadius:'0.8rem'}} type="text" placeholder='Enter the City' value={data} onChange={(e)=>setdata(e.target.value)} /></div> 

      </div>
     <div className='img'>
      <div data-aos="zoom-in-up" data-aos-duration="1000">
        {filter?.main?.temp >=24 ? <img style={{width:"25rem"}} src={sun} alt="" /> : <img style={{width:"25rem"}} src={cloud} alt="" />}
        
      </div> 
     </div>
     <div>
        <div className='city' data-aos="fade-up" data-aos-duration="1000">
            <div><h1>{filter?.main?.temp}</h1></div>
            <div><h3>{filter?.name}</h3></div>
        </div>
     </div>
     <div className='Footer'>
       
       <div data-aos="fade-right" data-aos-duration="1000">
        <span><GiWindSlap/><b>{filter?.main?.humidity}</b>%</span>
        <p>Humanity</p>
       </div>
       <div data-aos="fade-left" data-aos-duration="1000">
       <span> <BsSpeedometer style={{width:'3rem'}}/><b>{filter?.wind?.speed}</b></span>
       <p>Wind Speed</p>
       </div>
       
     </div>
     
        
    
    
    </div>
  )
}

export default Main