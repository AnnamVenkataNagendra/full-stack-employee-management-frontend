import React from 'react'
import { Route, Routes } from 'react-router-dom'

import UserLogin from './UserLogin'
import UserData from './UserData'
import UserRegister from './UserRegister'
import DashBoard from './DashBoard'
import Delete from './Delete'
import Update from './Update'
const App1 = () => {
  return (
    <div>
     
     <Routes>
        <Route path='/' element={<UserLogin/>}/>
        <Route path='/fetch' element={<UserData/>}/>
        <Route path='/post' element={<UserRegister/>}/>
        <Route path='/dash' element={<DashBoard/>}/>
        <Route path='/delete/:Id' element={<Delete/>}/>
        <Route path='/update/:Id' element={<Update/>}/>
     </Routes>

    </div>
  )
}

export default App1
