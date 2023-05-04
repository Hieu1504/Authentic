import React, { useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/bazarSlice";
import { useNavigate } from "react-router-dom";
import { githubLogo, googleLogo } from "../assets";
import axios from 'axios'


const Login = () => {
  // LOGIN THÀNH CÔNG VỀ HOME
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
  }

  const routeChange = async () => {
    const res = await axios.post('http://localhost:8080/api/auth/signin',
      {
        username,
        password,
      }
    )
    dispatch(
      addUser({
        username: username,
        password: password,
      })
    );
    const resdata = res.data // data JSON POSTMAN
    const status = res.status // status http
    const data_status = resdata.status // status ResponseObject
    const token = resdata.accessToken
    const id = resdata.id
    const email = resdata.email
    console.log(email)
    localStorage.setItem('userId', id)
    localStorage.setItem('email', email)
    localStorage.setItem('token', token)
    // save token
    console.log({ data: resdata, })
    let path = `/`;
    navigate(path, { state: { username: resdata.username, email: resdata.email } });
  }
  //-----------------------------------------------

  const userInfo = useSelector((state) => state.bazar.userInfo);
  const navigate = useNavigate("");
  const dispatch = useDispatch();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  // ============== Google Login Start here =====================
  const handleLogin = () => {
    signInWithPopup(
      auth,
      provider.setCustomParameters({ prompt: "select_account" })
    )
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        dispatch(
          addUser({
            _id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
      });
  };
  // ============== Google Login End here =======================
  // ============== Logout Start here ===========================
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        toast.success("Log Out Successfully!");
        dispatch(removeUser());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // ============== Logout End here =============================

  // ============== Github Login Start here =====================
  const githubLogin = (e) => {
    e.preventDefault();
  };
  // ============== Github Login End here =======================
  return (
    <div>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
            Sign in
          </h1>
          <form className="mt-6" onSubmit={handleSubmit}>
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
            <a
              href="#"
              className="text-xs text-purple-600 hover:underline"
            >
              Forget Password?
            </a>
            <div className="mt-6">
              <button onClick={routeChange} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                Login
              </button>
            </div>
          </form>
          <div className="relative flex items-center justify-center w-full mt-6 border border-t">
            <div className="absolute px-5 bg-white">Or</div>
          </div>

          <div class="gap-x-4 flex flex-row">
            <div className="w-full flex items-center justify-center gap-10">
              <div
                onClick={handleLogin}
                className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300"
              >
                <img className="w-8" src={googleLogo} alt="googleLogo" />
                <span className="text-sm text-gray-900"> Sign in with Google</span>
              </div>
            </div>
            <div className="w-full flex items-center justify-center gap-10">
              <div
                onClick={githubLogin}
                className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300"
              >
                <img className="w-8" src={githubLogo} alt="githubLogo" />
                <span className="text-sm text-gray-900"> Sign in with Github</span>
              </div>

            </div>
            <div className="w-full flex flex-col items-center justify-center gap-10 py-20">

              <ToastContainer
                position="top-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />
            </div>
          </div>
          {userInfo && (
            <div className="text-center">
              <button
                onClick={handleSignOut}
                className="bg-black text-white text-base py-2 px-5 tracking-wide rounded-md hover:bg-gray-800 duration-300"
              >
                Log Out
              </button>
            </div>
          )}
          <p className="mt-8 text-sm font-light text-center text-gray-700">
            {" "}
            Don't have an account?{" "}
            <a
              href="/signup"
              className="font-medium text-purple-600 hover:underline"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
