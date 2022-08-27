import Link from "next/link";
import type { NextPage } from 'next'
import Image from 'next/image'
import React, { useState } from 'react';
import styles from '../styles/Home.module.css'




const Home: NextPage = () => {
  const [icon,setIcon] = useState('farm');

 
  return (

    <div className='space-y-20 flex w-full h-full'>
   
      <div className="fixed flex mt-0 ml-0 h-16 w-full text-right bg-farm justify-end">

        <h1 className="text-3xl  text-rose-500 text-opacity-70 p-3">Prodautoma</h1>
        <div className='mr-10 mt-2 bg-green-500 w-20 h-12 p-2 rounded-lg flex justify-center '>
          <Image src={`/icon_farm.png`} alt="asdf" width={35} height={10} /></div>
        
        </div>




        <div className="justify-center items-center w-full flex h-10 flex-col"> 
            </div>
      </div>

 
  )
}



    
  export default Home
    

      