import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoginUser } from '../redux/userSlice'
import { useNavigate } from 'react-router-dom'

const UserLogin = () => {
    const dispatch = useDispatch()
    const {loading , error } = useSelector((state)=>state.user)
    const [email , setemail] = useState("")
    const [password , setpassword] = useState("")
    const navigate = useNavigate()
    const HandleLoginForm = (event) =>{
        event.preventDefault()
        const usercradential = {email, password}
        dispatch(LoginUser(usercradential)).then(result=>
            { if (result.payload)
                {
                    setemail("")
                    setpassword("")
                    navigate('/')
                }
            })
    }
    return (
        <>
            <div className="flex justify-center items-center h-screen bg-gray-800">
                <form  action="" onSubmit={HandleLoginForm}>
                <div className="max-w-md w-full bg-gray-900 rounded p-6 space-y-4">
                    <div className="mb-4">
                        <p className="text-gray-400">Sign In</p>
                        <h2 className="text-xl font-bold text-white">Join our community</h2>
                    </div>
                    <div>
                        <input value={email} onChange={(e)=>setemail(e.target.value)} className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder="Email" />
                    </div>
                    <div>
                        <input value={password} onChange={(e)=>setpassword(e.target.value)} className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder="Password" />
                    </div>
                    <div>
                        <button type='submit' className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200">
                            {loading ? "Sign in ......" : "sign"}</button>
                    </div>
                </div>
                </form>
            </div>
        </>
    )
}

export default UserLogin
