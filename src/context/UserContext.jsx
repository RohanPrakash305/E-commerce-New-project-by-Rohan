

// import React, { createContext, useEffect, useState } from 'react'
// import { authDataContext } from './AuthContext'
// import axios from 'axios'

// export const userDataContext = createContext()

// function UserContext({ children }) {

//   let [userData, serUserData] = useState("")
//   let { serverUrl } = useContext(authDataContext)

//   const getCurrentUser = async () => {

//     try {
//       let result = await axios.post(serverUrl + 
//         "/api/user/getcurrentuser",{withCredentials:true})

//         setUserData(result.data)
//         console.log(result.data)


//     } catch (error) {
//       setUserData(null)
//       console.log(error)
      
//     }
//   }

//    useEffect(()=>{
//       getCurrentUser()

//   })

//   let value = {
//     userData,serUserData,getCurrentUser

//   }


//   return (
//     <div>
//       <userDataContext.Provider value={value}>
//         {children}
//       </userDataContext.Provider>
//     </div>
//   )
// }

// export default UserContext