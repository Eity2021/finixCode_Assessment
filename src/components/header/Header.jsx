import React from "react";
import { Search, Calendar } from "lucide-react";
import logo from "../../assets/image/logo.png";
import JithboIcon from "../../assets/image/Jithbo_icon.png";
import userIcon from "../../assets/image/user.png";
import hamburger from "../../assets/image/hamburger.png";


export default function Header() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4">
        <header className="flex flex-wrap items-center justify-between py-4 gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
          </div>

          {/* Inputs Section */}
          <div className="flex flex-col sm:flex-row items-center gap-2 flex-grow sm:justify-center">
            {/* Date Input */}
            <div className="relative w-full max-w-[260px]">
              <input
                type="text"
                placeholder="Select date"
                className="w-full rounded border border-[#F6F6F6] text-sm py-[15px] px-[12px] shadow-md placeholder:text-[14px] placeholder:text-[#6A6A6A] placeholder:font-[400]"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 p-[7.2px] bg-[#63CFA0] rounded">
                <Calendar className="text-[#171717]" />
              </div>
            </div>

            {/* Search Input */}
            <div className="relative w-full max-w-[260px]">
              <input
                type="text"
                placeholder="Search"
                className="w-full rounded border border-[#F6F6F6] text-sm py-[15px] px-[12px] shadow-md placeholder:text-[14px] placeholder:text-[#6A6A6A] placeholder:font-[400]"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 p-[7.2px] bg-[#E5E5E5] rounded">
                <Search className="text-[#4A4A4A]" />
              </div>
            </div>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="hidden md:flex items-center gap-1 text-sm text-emerald-600 bg-[#F4F5EF] py-[14px] px-[16px] rounded"
            >
              <img src={JithboIcon} className="h-4 w-4" />
              <span className="text-[#34735F] size16">Leaderboard</span>
            </a>

            <button className="hidden sm:inline-flex border border-[#34735F] bg-white py-[14px] px-[24px] rounded">
              <span className="text-[#34735F] text-sm font-medium">
                Login / Sign up
              </span>
            </button>

            {/* Mobile Menu Icons */}
            <div className="flex border border-[#E5E5E5] py-[6px] px-[8px] rounded">
              <button className="flex items-center">
                <img src={hamburger} alt="menu" />
              </button>
              <button className="rounded-full ml-2">
                <img src={userIcon} alt="user" />
              </button>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
