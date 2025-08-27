import React from 'react'
import Registration from './pages/Registration'
import { Routes ,Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Nav from './component/Nav'

function App() {
  return (
      
    <>
     <Nav/>
      <Routes>
        <Route path ='/' element={ <Home/>}/>
         <Route path ='/login' element={ <Login/>}/>
          <Route path ='/signup' element={ <Registration/>}/>
      </Routes>
     </>

   )
}

export default App