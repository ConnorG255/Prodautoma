import Link from "next/link";
import type { NextPage } from 'next'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'
import Countdown from "react-countdown";
import { render } from "react-dom";




const Home: NextPage = () => {
  //const [icon,setIcon] = useState('farm');
    const[timer,setTimer] = useState(0);
    const [running,setRunning] = useState(true);
    const [calctime, setCalctime] = useState(0);
    const [time, setTime] = useState("");
    const [seconds, setSeconds] = useState(0);

    
   useEffect(() =>{
    let zeros = 0;
    if(calctime>0 && running){

      setTimeout(() => setCalctime(calctime-1),1000);
      
      setTime(Math.floor(calctime/60) + ":" + calctime % 60);
      

    }
    
   },[calctime])
    
    
      




  return (

    <div className='space-y-20 flex w-full flex-row h-screen bg-cream'>
   
      <Toolbar     />

        <div >
          


        </div>


        <div className="h-full w-full flex flex-col"> 
            <div className="p-1 mt-40 ml-24 h-1/2 w-1/2 bg-black bg-opacity-20 items-ceneter flex flex-col items-center space-y-3">
              
              {calctime ? <h1 className=" text-9xl text-white">{time} </h1> : 
              <h1 className=" mt-10 text-9xl text-white text-center">Done</h1>
              }
              
              <input
                  onChange={(s) => setTimer(parseInt(s.target.value))}
                  className="w-1/2 h-10 rounded-sm bg-white bg-opacity-20 text-center" 
                  placeholder="Time (In Minutes)"
                  onKeyDown={(s)=> {
                    if (s.key =="Enter"){
                      setCalctime(timer * 60);
                     // setRunning(true);  
                     // console.log(calctime);

                    }
                  }}
                />
                <button
                className="w-1/2 bg-white bg-opacity-20 h-10 rounded-sm"
                onClick={() => {setCalctime(timer * 60);}}
                > Start </button>
                <button
                className="w-1/2 bg-white bg-opacity-20 h-10 rounded-sm"
                onClick={() => {location.reload()}}
                > Reset</button>
                  
                

            </div>
            </div>
      </div>

 
  )
}



    
  export default Home
    
 

    function Toolbar({}) {

      return (
      
      <div className="fixed flex flex-row mt-0 ml-0 h-16 w-full text-right bg-farm">
        <div className="flex flex-rows justify-center align-middle h-full">
        <Link href="/" ><a className="text-3xl p-3 text-emerald-900 text-opacity-70 hover:bg-green-600 hover:bg-opacity-10">Home</a></Link>
        <Link href="/" ><a className="text-3xl p-3 text-emerald-900 text-opacity-70 bg-green-600 bg-opacity-15">Farm</a></Link>
        <Link href="/" ><a className="text-3xl p-3 text-emerald-900 text-opacity-70 hover:bg-green-600 hover:bg-opacity-10">Mine</a></Link>

              </div>
      <div className="ml-auto flex flex-row"><h1 className="text-3xl  text-emerald-900 text-opacity-70 p-3">Prodautoma</h1>
        <div className='mr-10 mt-2 bg-green-500 w-20 h-12 p-2 rounded-lg flex justify-center '>
          <Image src={`/icon_farm.png`}
           alt="asdf"
            width={35} 
            height={10} 
            /></div></div>
        
        
        </div>);
    }
        