import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function SignUp() {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()

    let navigate = useNavigate()
    const routeChange = async () => {
        console.log({ username: username, password: password, email: email })
        const res = await axios.post('http://localhost:8080/api/auth/signup', {
            username,
            password,
            email,
        })
        const resData = res.data //data JSON POSTMAN
        const status = res.status //status http
        const data_status = resData.status //status ResponseObject
        const token = resData.accessToken
        localStorage.setItem('token', token)
        console.log({
            data: resData,
            status: status,
            message: resData.message,
            datastatus: data_status,
            accessToken: token,
        })

        let path = '/login'
        navigate(path)
    }

    return (
        <div>
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
                        Sign in
                    </h1>
                    <form className="mt-6">
                        <div className="mb-2">
                            <label
                                for="username"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Username
                            </label>
                            <input
                                onChange={(e) => setUsername(e.target.value)}
                                type="username"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                for="password"
                                className="block text-sm font-semibold text-gray-800"

                            >
                                Password
                            </label>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>

                        <div className="mb-2">
                            <label
                                for="password"
                                className="block text-sm font-semibold text-gray-800"

                            >
                                Email
                            </label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>

                        <div className="mt-6">
                            <button onClick={routeChange} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                                Signup
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}
export default SignUp