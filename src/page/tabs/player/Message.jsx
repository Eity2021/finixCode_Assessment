import React  , { useState } from 'react';
import userGroup from "../../../assets/image/events/user-group.png";


export default function Message() {
      const [players, setPlayers] = useState([
        { id: "1", name: "Alex Mercer", isHost: true },
        { id: "2", name: "Jamir Uddin" },
        { id: "3", name: "Biplu Ahmed" },
        { id: "4", name: "Topu Barman" },
        { id: "5", name: "Rakib Hossain" },
      ])
    
      const getInitials = (name) => {
        return name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase()
      }
    
      const handleMessage = (playerId) => {
        console.log(`Messaging player with ID: ${playerId}`)
        // Add messaging logic here
      }
    
  return (
    <div className="mx-auto lg:p-4 p-0 ">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-[32px] font-[700] text-[#171717]">Players</h2>
   <div className="flex gap-2">
   <img src={userGroup} alt="user-group"/>
   <span className="text-[24px] font-[400] text-[#171717]">5/11</span>
   </div>
    </div>

    <div className="space-y-2">
      {players.map((player) => (
        <div
          key={player.id}
          className="bg-[#34735F] p-2 flex items-center justify-between rounded-[14px] py-[12px] "
        >
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-[#FDE8CD] text-[#34735F] flex items-center justify-center text-[16px] font-bold">
              {getInitials(player.name)}
            </div>
            <div className="text-[#FDE8CD] font-medium md:text-[24px]  text-[20px]  ">
              {player.name}
              {player.isHost && (
                <span className="lg:text-[16px]  text-[14px] opacity-75 font-normal">(Host)</span>
              )}
            </div>
          </div>
          <button
            onClick={() => handleMessage(player.id)}
            className="bg-white  text-[#171717] text-[16px] md:px-[12px] md:py-[16px]     px-[8px] py-[10px]        rounded-md font-[500]"
          >
            Message
          </button>
        </div>
      ))}
    </div>
  </div>
  )
}
