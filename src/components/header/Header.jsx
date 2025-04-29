import React from 'react'
import { ChevronDown, Heart, CircleUserRound , Search, Share2, Trophy, User } from "lucide-react";
import logo from "../../assets/image/logo.png";
import JithboIcon from "../../assets/image/Jithbo_icon.png";
import userIcon from "../../assets/image/user.png";
import hamburger from "../../assets/image/hamburger.png";
import { Calendar } from 'lucide-react';
export default function Header() {
  return (
    <div className='bg-[#fff]'>
        <div className="container"> 
        <header className="flex items-center justify-between py-[16px] ">
    <div className="flex items-center gap-2">
      <img
        src={logo}
        alt="Logo"
        className="text-emerald-500"
      />
    </div>
<div className="flex">
    
<div className="relative hidden sm:block  w-full mx-1">
    <input
        type="text"
        placeholder="Select date"
        className="w-[260px]  rounded border border-[#F6F6F6]  text-sm py-[15px] px-[12px] shadow-md placeholder:text-[14px] placeholder:text-[#6A6A6A] placeholder:font-[400]"
      />
     <div className="absolute right-3 top-1/2 transform -translate-y-1/2 p-[7.2px] bg-[#63CFA0] rounded">
<Calendar className="  text-[#171717]" />
</div>
    </div>

    <div className="relative hidden sm:block w-full mx-1">
      <input
        type="text"
        placeholder="Search"
        className=" w-[260px]  rounded border border-[#F6F6F6]  text-sm py-[15px] px-[12px] shadow-md placeholder:text-[14px] placeholder:text-[#6A6A6A] placeholder:font-[400]"
      />
<div className="absolute right-3 top-1/2 transform -translate-y-1/2 p-[7.2px] bg-[#E5E5E5] rounded">
<Search className="  text-[#4A4A4A]  " />
</div>
      

    </div>


</div>


    <div className="flex items-center gap-4">
      <a href="#" className="hidden md:flex items-center gap-1 text-sm text-emerald-600 bg-[#F4F5EF] py-[14px] px-[16px] rounded">
        <img src={JithboIcon} className="h-4 w-4" />
        <span className="text-[#34735F] size16 space-y-4">Leaderboard</span>
      </a>

      <button size="sm" className="hidden sm:inline-flex border border-[#34735F] bg-[#fff] py-[14px] px-[24px] rounded">
        <span className='text-[#34735F] size16  font-[500]'>Login / Sign up</span>
      
      </button>

<div className="flex border border-[#E5E5E5] py-[6px] px-[8px] rounded">
      <button className="flex items-center">
         <img src={hamburger} />
        </button>
      <button size="icon" className="rounded-full">
         <img src={userIcon} />
      </button>
    </div>


    </div>
  </header>
  </div>
    </div>
    
  )
}
