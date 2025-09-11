

import React, { createContext, useEffect, useState ,useContext} from 'react'
import { authDataContext } from './AuthContext'
import axios from 'axios'

export const userDataContext = createContext()

function UserContext({ children }) {

  let [userData, setUserData] = useState("")
  let { serverUrl } = useContext(authDataContext)

  const getCurrentUser = async () => {

    try {
      let result = await axios.post(serverUrl + 
        "/api/user/getcurrentUser",{withCredentials : true})


        setUserData(result.data)
        console.log(result.data)


    } catch (error) {
      setUserData(null)
      
      console.log(error)
      
    }
  }

   useEffect(()=>{
      getCurrentUser()

  },[])

  let value = {
    userData,setUserData,getCurrentUser

  }


  return (
    <div>
      <userDataContext.Provider value={value}>
        {children}
      </userDataContext.Provider>
    </div>
  )
}

export default UserContext

// // .............................................................

// import React, { createContext, useEffect, useState, useContext } from 'react';
// import { authDataContext } from './AuthContext';
// import axios from 'axios';

// export const userDataContext = createContext();

// function UserContext({ children }) {
//   const [userData, setUserData] = useState(null);
//   const { serverUrl } = useContext(authDataContext);

//   const getCurrentUser = async () => {
//     try {
//       const result = await axios.post(
//         `${serverUrl}/api/user/getcurrentuser`,
//         {},                          // empty body
//         { withCredentials: true }    // config goes here
//       );
//       setUserData(result.data);
//       console.log(result.data);
//     } catch (error) {
//       setUserData(null);
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     getCurrentUser();
//   }, []);

//   const value = { userData, setUserData, getCurrentUser };

//   return (
//     <userDataContext.Provider value={value}>
//       {children}
//     </userDataContext.Provider>
//   );
// }

// export default UserContext;
