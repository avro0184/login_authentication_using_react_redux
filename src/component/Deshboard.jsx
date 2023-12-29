import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function getuser(){
    let user =localStorage.getItem('user')
    if (user){
        user = JSON.parse(user)
    } else {
        user=null
    }
    return user
}

const Deshboard = () => {
  const [user , setuser ] = useState(getuser())
  const HandleLog =()=>{
    console.log("clo")
    localStorage.removeItem('user')
    setuser(null)
  }
  return (

    <>
    < div className=' justify-center items-center text-center mt-6'>
      {user ? (
        <>
        <h1>{user.name}</h1>
            <button className=' bg-yellow-800 rounded-lg text-center p-4 text-gray-200 text-2xl' onClick={HandleLog}>logout</button>
        </>
      ):(
        <>
         <Link to={'/login'} className=' bg-yellow-800 rounded-lg text-center p-4 text-gray-200 text-2xl' >login</Link>
        </>
      )}
    </div>

    </>
  )
}

export default Deshboard
