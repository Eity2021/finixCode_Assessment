import React, { useState } from "react";

import Info from "./info/Info";
import Player from "./player/Player";
import Comments from "./comments/Comments";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("info");
  return (
    <div className=" mx-auto rounded-lg ">
    {/* Tab Buttons */}
    <div className="w-full border-b border-[#E5E5E5] flex justify-around items-center mb-6 space-x-8 ">
      {["info", "player", "comments"].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={` w-1/3 text-center border-b-2 transition-colors   ${
            activeTab === tab
              ? "border-[#DA6049] text-[#DA6049] py-[32px] text-[24px] font-[500]"
              : "border-transparent text-[##171717] hover:text-[#171717] text-[24px] font-[500]"
          }`}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>

    {/* Info Tab Content */}
    {activeTab === "info" && (
    <Info></Info>
    )}

    {/* Player Tab Content */}
    {activeTab === "player" && (
      <div>
      
        <Player></Player>
      </div>
    )}

    {/* Comments Tab Content */}
    {activeTab === "comments" && (
      <div >
      <Comments></Comments>
      </div>
    )}
  </div>
  )
}
