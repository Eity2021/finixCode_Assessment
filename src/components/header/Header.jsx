import React from "react";

import InputField from "./InputField";
import LeaderboardLog from "./LeaderboardLog";
import Logo from "./Logo";

export default function Header() {
  return (
    <div className="bg-white ">
      <div className="md:container mx-auto py-[16px] xl:px-[0px] px-[10px] w-full">
        <header className="flex   justify-between">
        <div >
            <Logo />
          </div>
         <div className="lg:block hidden">
            <InputField />
          </div> 
          <div className="">
            <LeaderboardLog />
          </div>
        </header>
      </div>
    </div>
  );
}
