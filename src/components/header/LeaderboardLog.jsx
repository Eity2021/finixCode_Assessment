import React from "react";
import JithboIcon from "../../assets/image/Jithbo_icon.png";
import hamburger from "../../assets/image/hamburger.png";
import userIcon from "../../assets/image/user.png";
export default function LeaderboardLog() {
    return (
        <div className="flex items-center gap-4 ">
        <a
          href="#"
          className="hidden md:flex items-center gap-1 text-sm text-emerald-600 bg-[#F4F5EF] py-[14px] px-[16px] rounded"
        >
          <img src={JithboIcon} className="h-4 w-4" />
          <span className="text-[#34735F] size16 space-y-4">
            Leaderboard
          </span>
        </a>

        <button
          size="sm"
          className="hidden sm:inline-flex border border-[#34735F] bg-[#fff] py-[14px] px-[24px] rounded"
        >
          <span className="text-[#34735F] size16  font-[500]">
            Login / Sign up
          </span>
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
    );
}
