import React from 'react'
import Logo from "../assets/logo.png"
import google from '../assets/google.png'
import { useNavigate } from 'react-router-dom'

function Registration() {

     let navigate = useNavigate()
  return (
  <div className='w-[100vw] h-[100vh] bg-gradient-to-l from-[#7b7474] to-[#5f8993] text-[black] 
       flex flex-col items-center justify-start'>


       <div className='w-[100%] h-[80px] flex items-center justify-start px-[20px] gap-[10px]
       cursor-pointer' onClick={()=>navigate("/")}>
      
        <img className = 'w-[100px]' src={Logo} alt="" /> 
        <h1 className='text-[22px] font-sans'>OneCart</h1>
       </div>
    

        <div className='w-[100%] h-[100px] flex items-center justify-start px-[20px] gap-[10px]'>
         <span className='text-[25px] font-semibold'>Registration Page</span>
         <span className='text[16px]'>welcome to OneCart, Place your order</span>
        </div>
        
        
        <div className='nax-w-[600px] w-[50%] h-[350px] bg-[#676757] border-[1px]border[#96969635]
          backdrop:blur-2xl rounded-lg shado-lg flex items-center justify-center'>

               <form action="" className='w-[90%] h-[90%] flex flex-col items-center jaustify-start gap-[20px]'> 

                <div className='w-[90%] h-[50%] bg-['>
                  <img src={google} alt="" className='w-[30px]'/> Registration with googal
                </div>

                  
              </form>
        </div>
        
    </div>
  )
}

export default Registration