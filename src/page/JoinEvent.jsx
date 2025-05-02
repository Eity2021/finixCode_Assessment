import React, { useState } from "react";
import PaymentModal from "./events/PaymentModal";

export default function JoinEvent() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div>
      <div className="flex  justify-end mt-[40px]">
        <div className="bg-white rounded-[16px] p-[24px]  shadow-sm w-[400px]">
          <div className="lg:flex block justify-between items-center mb-4 border border-[#E5E5E5] py-[18px] px-[16px] rounded-[16px]">
            <div className="text-[#DA6049] font-[500]  text-[16px]">
              <span className="">6</span> spots left
            </div>
            <div>
              <span className="font-bold text-[#171717] text-[18px]">
                320tk
              </span>
              <span className="font-bold text-[#171717] text-[17px]">
                /player
              </span>
              <span className="font-[400] text-[14px] text-[#808080] ml-1">
                (both)
              </span>
            </div>
          </div>
          <div    
          onClick={() => setIsOpen(true)} 
          className="w-full bg-[#63CFA0] hover:bg-[#6fc8a1] rounded p-[16px] flex justify-center">
            <button
           
              className=" text-[#171717] p-[16px] text-[18px] leading-[2px] font-[700] "
            >
              Join event
            </button>
          </div>


        </div>
      </div>
      <PaymentModal isOpen={isOpen} setIsOpen={setIsOpen} ></PaymentModal>
    </div>
  );
}
