import React from "react";

export default function Header() {
   const img1 =
     "https://t3.ftcdn.net/jpg/03/20/06/16/360_F_320061630_qTwTYsIEPJO62ubp5bzF41Pob4oJug5b.jpg";
  return (
    <>
    <nav className="bg-blue-500 text-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="flex items-center space-x-8">
        <li className="list-none">
          <a
            href=""
            className="text-lg font-semibold hover:text-gray-200 transition duration-200"
          >
            Home
          </a>
        </li>
        <li className="list-none">
          <a
            href=""
            className="text-lg font-semibold hover:text-gray-200 transition duration-200"
          >
            About
          </a>
        </li>
        <li className="list-none">
          <a
            href=""
            className="text-lg font-semibold hover:text-gray-200 transition duration-200"
          >
            Services
          </a>
        </li>
        <li className="list-none">
          <a
            href=""
            className="text-lg font-semibold hover:text-gray-200 transition duration-200"
          >
            Contact
          </a>
        </li>
      </div>
      <div className="flex space-x-4">
        <button className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-200 transition duration-200">
          Login
        </button>
        <button className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-200 transition duration-200">
          Log out
        </button>
      </div>
     
    </nav>
     <img src={img1} alt="" className="w-full" />
     
     </>
  );
}
