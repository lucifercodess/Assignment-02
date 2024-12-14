import React from 'react';
import { MdArrowDropDown} from "react-icons/md";
import Notification from '../assets/notification.png';

const Navbar = () => {
  return (
    <nav className="flex justify-end items-center px-6 py-4 shadow-md bg-white ">
      
      <div className="flex items-center space-x-4 mr-3">
        <div className="relative">
          <img src={Notification} alt="Notification Icon" className="w-8 h-8 cursor-pointer" />
         
          <span className="absolute top-0 right-0 text-xs text-white bg-red-500 rounded-full w-4 h-4 flex items-center justify-center">3</span>
        </div>
      </div>

     
      <div className="flex items-center gap-4">
        <img 
          src="https://plus.unsplash.com/premium_photo-1668895511243-1696733f4fcb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybCUyMGZhY2V8ZW58MHx8MHx8fDA%3D"
          alt="User"
          className="w-10 h-10 rounded-full object-cover cursor-pointer transition-all hover:ring-2 hover:ring-white"
        />
        <div className="">
          <h1 className="font-medium text-lg">Jack Maa</h1>
          <p className="text-sm text-gray-400">Damager</p>
        </div>
      </div>
        <MdArrowDropDown className='w-5 h-5 mb-4 ml-1 cursor-pointer'/>
    </nav>
  );
};

export default Navbar;
