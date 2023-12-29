import { useState } from 'react'
import UserLogin from './component/UserLogin'
import { Route, Routes } from 'react-router-dom'
import Deshboard from './component/Deshboard'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Deshboard/>} />
     <Route path='/login' element={<UserLogin/>}/>
     </Routes>
    </>
  )
}

export default App
