import React, { useContext, useState } from 'react'
import Logo from "../assets/logo.png"
import google from '../assets/google.png'
import { useNavigate } from 'react-router-dom'
import { TiEyeOutline } from "react-icons/ti"
import { IoEyeSharp } from "react-icons/io5"
import { authDataContext } from '../context/AuthContext'
import axios from 'axios'
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../Utils/Firebase';
import { userDataContext } from '../context/UserContext'
  


function Login() {

  let [show, setShow] = useState(false)

  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")

  let { serverUrl } = useContext(authDataContext)
   let { getCurrentUser } = useContext(userDataContext)

  let navigate = useNavigate()

  const handleLogin = async (e) => {

    e.preventDefault()
    try {

      let result = await axios.post(serverUrl + '/api/auth/login', { email, password },
         { withCredentials: true })
         console.log(result.data)
            getCurrentUser()
            navigate("/")

    } catch (error) {

      console.log(error)
    }
  }
  const googlelogin = async () => {
    try {
      const response = await signInWithPopup(auth, provider)

      let user = response.user
      let name = user.displayName
      let email = user.email

      const result = await axios.post(serverUrl + "/api/auth/googlelogin", { name, email }, { withCredentials: true })

      console.log(result.data)

      console.log(response)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='w-[100vw] h-[100vh] bg-gradient-to-l from-[#7b7474] to-[#5f8993] text-[black] 
       flex flex-col items-center justify-start'>


      <div className='w-[100%] h-[70px] flex items-center justify-start px-[20px] gap-[10px]
       cursor-pointer' onClick={() => navigate("/")}>
        <img className='w-[40px]' src={Logo} alt="" />
        <h1 className='text-[22px] font-sans'>OneCart</h1>
      </div>


      <div className='w-[100%] h-[100px] flex items-center justify-start flex-col gap-[10px]'>
        <span className='text-[25px] font-semibold'>Login Page</span>
        <span className='text[16px]'>welcome to OneCart, Place your order</span>
      </div>


      <div className='nax-w-[600px] w-[50%] h-[450px] bg-[#292926] border-[1px]border[#96969635]
          backdrop:blur-2xl rounded-lg shado-lg flex items-center justify-center'>

        <form action="" onSubmit={handleLogin} className='w-[90%] h-[90%] flex flex-col items-center jaustify-start gap-[20px]'>

          <div className='w-[90%] h-[15%] bg-[#5c5858] rounded-lg flex items-center 
                justify-center gap-[20px] cursor-pointer ' onClick={googlelogin}>
            <img src={google} alt="" className='w-[30px]' /> Login acount with googal
          </div>


          <div className='w-[100%] h-[20px] flex items-center justify-center gap-[10px]'>
            <div className='w-[40%] h-[1px] bg-[#bb858e]'></div>OR<div className='w-[40%] h-[1px] bg-[pink]'></div>
          </div>


          <div className='w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px] relative'>


            <input type="text" className='w-[100%] h-[50px] border-[2px]
                     border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg 
                     bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold'
              placeholder='Email' required onChange={(e) => setEmail(e.target.value)} value={email} />

            <input type={show ? "text" : 'password'} className='w-[100%] h-[50px] border-[2px]
                     border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg 
                     bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold'
              placeholder='Password' required onChange={(e) => setPassword(e.target.value)} value={password} />

            {!show && <TiEyeOutline className='w-[20px] h-[20px] cursor-pointer  right-[5%] bottom-[57%] absolute'
              onClick={() => setShow(prev => !prev)} />}
            {show && <IoEyeSharp className='w-[20px] h-[20px] cursor-pointer  right-[5%] bottom-[57%] absolute'
              onClick={() => setShow(prev => !prev)} />}

            <button className='w-[100%] h-[50px] bg-[#6060f5] rounded-lg 
                     flex items-center justify-center mt-[20px] 
                     text-[17px] font-semibold' >Login</button>
            <p className='flex gap-[10px]'>You haven't any  Account
              <span className='text-[blue] text-[17px] font-semibold cursor-pointer'
                onClick={() => navigate("/signup")}> Creat New Account</span>
            </p>


          </div>
        </form>
      </div>

    </div>
  )
}

export default Login