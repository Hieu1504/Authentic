/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartImg, logo } from "../assets/index";
import { Dropdown } from "antd";
import { signOut, getAuth } from "firebase/auth";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { removeUser } from "../redux/bazarSlice";

const Header = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  const dispatch = useDispatch();
  const auth = getAuth();

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


  const items = [
    {
      key: '1',
      label: (
        <Link to="/">
          <div className="text-center">
            <a target="_blank" rel="noopener noreferrer">
              Settting
            </a>
          </div>

        </Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link to="/myform">
          <div className="text-center">
            <a target="_blank" rel="noopener noreferrer">
              MyForm
            </a>
          </div>

        </Link>
      ),
    },
    {
      key: '3',
      label: (
        <div >
          {userInfo && (
            <div className="text-center">
              <a target="_blank" rel="noopener noreferrer"
                onClick={handleSignOut}
              >
                Log Out
              </a>
            </div>
          )}
        </div >
      ),
    },
  ];

  return (
    <div className="w-full h-20 bg-white font-titleFont border-b-[1px] border-b-gray-800 sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div>
            <img className="w-32" src={logo} alt="logo.png" />
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex item-center gap-8">
            <Link to="/search">
              <li class="list-inline-item">
                <a href="#" className="search_toggle" id="search-icon"><i className="tf-ion-android-search"></i></a>
              </li>
            </Link>
            <Link to="/">
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Home
              </li>
            </Link>
            <Link to="/blog">
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Blogs
              </li>
            </Link>
            <Link to="/contact">
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Contact
              </li>
            </Link>
          </ul>
          <Link to="/cart">
            <div className="relative">
              <img className="w-6" src={cartImg} alt="cartImg" />
              <span className="absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold font-titleFont">
                {productData.length}
              </span>
            </div>
          </Link>
          <Link to="/login">
            <img
              className="w-9 h-6 rounded-full"
              // src={
              //   userInfo
              //     ? userInfo.image
              //     : "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
              // }
              src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
              alt="userLogo"
            />
          </Link>
          <Dropdown
            menu={{
              items,
            }}
            placement="bottomRight"
          >
            <Link>
              {userInfo && (
                <p className="text-base font-titleFont font-semibold underline-offset-2">
                  {userInfo.username}
                  {userInfo.name}
                </p>
              )}
            </Link>
          </Dropdown>

        </div>
      </div>
    </div>
  );
};

export default Header;
