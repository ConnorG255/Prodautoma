import Link from "next/link";
import type { NextPage } from 'next'
import Image from 'next/image'
import React, { useState } from 'react';
import styles from '../styles/Home.module.css'




const Home: NextPage = () => {
  const [icon,setIcon] = useState('farm');

 
  return (

    <div className=' min-h-screen flex w-full bg-indigo-900'>

   <Topbar     />




        <div className="justify-center flex h-3/4 mt-16 bg-white"> 
              asdf
            </div>
      </div>

 
  )
}



    
  export default Home
    


    function Topbar({}) {
      return (<div className="fixed mt-0 ml-0 w-full flex flex-rows bg-slate-900">

  <div className="ml-5 p-1 bg-teal-900 bg-opacity-80 h-14 mt-4 space-x-11 flex flex-rows">
    <Image src={`/icon_farm.png`} alt="asdf" width={50} height={50} />
      <Image src={`/icon_mine.png`} alt="asdf" width={50} height={50} />
  
   </div>
   

      <div className=" flex justify-end ml-auto">
        <h1 className="text-7xl text-contrast-50 p-3 text-indigo-800">Prodautoma</h1>
        </div>

        </div>);
    }
        