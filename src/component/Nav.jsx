import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { IoSearchCircleOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";


function Nav() {

   let [showSearch,setShowSearch] =useState(false)
   let [showProfile,setShoProfile] = useState(false)
  return (
    <div className='w-[100vw] h-[70px] bg-[#ecfafaec] z-10 fixed
    top -0 flex  items-center justify-between px[30px] shadow-md
    shadow-black'>

      <div className='w-[30%] flex items-center justify-start
          gap-[10px] '>
        <img src={logo} alt="" className='w-[30px]' />
        <h1 className='trxt-[25px] text-[black] 
            font-sans'>onecart</h1>
      </div>

      <div className='w-[40%]'>

        <ul className='flex items-center  justify-center
           gap-[19px] text-[white]'>
 
            <li className='text-[15px] hover:bg-slate-500
              cursor-pointer bg-[#000000c9] py-[8px] px-[10px] rounded-2xl'>HOME</li>
            <li className='text-[15px] hover:bg-slate-500
              cursor-pointer bg-[#000000c9] py-[8px] px-[10px] rounded-2xl'>COLLECTION</li>
             <li className='text-[15px] hover:bg-slate-500
              cursor-pointer bg-[#000000c9] py-[8px] px-[10px] rounded-2xl'>ABOUT</li>
            <li className='text-[15px] hover:bg-slate-500
              cursor-pointer bg-[#000000c9] py-[8px] px-[10px] rounded-2xl'>CONTACT</li>
        </ul>
      </div >
      <div className='w-[30%] flex items-center justify-end
           gap-[20px]'>

         <IoSearchCircleOutline className='w-[38px] h-[38px]
            text-[#000000] cursor-pointer'  onClick={()=>setShowSearch(prev=>!prev)}/>
         <FaUserCircle  className='w-[30px] h-[30px]
            text-[#000000] cursor-pointer'/>

            
         <IoMdCart  className='w-[30px] h-[30px]
            text-[#000000] cursor-pointer '/> 

            <p className='absolute w-[18px] h-[18px] items-center
             justify-center bg-[blue]  px-[4px] py-[2px] 
             text-white rounded-full text[9px] top-[8px] right-[10px]'>1</p>    
      </div>
        
        { showSearch && <div className='w-[100%] h-[80px] bg-[#1197a4dd] absolute top-[100%]
         left-0 right-0 flex items-center justify-center'>
          
          <input type="text" className='w-[50%] h-[60%] bg-[#6e6e95] 
            rounded-[30px] px-[50px] placeholder:text-white text-white text-[15px]'
            placeholder='Search Here'/>
        </div>}

       { showProfile && <div className='aabsolute w-[220px] h-[150px] bg-[#0b0808] top-[110%] right-[4%]
           border-[1px] border-[#aaa9a9] rounded-[10px] z-10'>

        </div>}

    </div>
  )
}

export default Nav