import React from "react";
import {
  Search,
  Calendar
} from "lucide-react";

export default function InputField() {
    return (
<div className="md:flex hidden"> 
<div className="relative block  w-full mx-1">
        <input
          type="text"
          placeholder="Select date"
          className="lg:w-[260px] w-full   rounded border border-[#F6F6F6]  text-sm py-[15px] px-[12px] shadow-md placeholder:text-[14px] placeholder:text-[#6A6A6A] placeholder:font-[400]"
        />
     <div className="absolute right-3 top-1/2 transform -translate-y-1/2 p-[7.2px] bg-[#63CFA0] rounded">
          <Calendar className="  text-[#171717]" />
        </div> 
      </div>

      <div className="relative block w-full mx-1">
        <input
          type="text"
          placeholder="Search"
          className="lg:w-[260px] w-full  rounded border border-[#F6F6F6]  text-sm py-[15px] px-[12px] shadow-md placeholder:text-[14px] placeholder:text-[#6A6A6A] placeholder:font-[400]"
        />
     <div className="absolute right-3 top-1/2 transform -translate-y-1/2 p-[7.2px] bg-[#E5E5E5] rounded">
          <Search className="  text-[#4A4A4A]  " />
        </div> 
      </div>

</div>
    );
}
