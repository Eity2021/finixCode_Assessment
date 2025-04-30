import React from 'react'
export default function Location() {
  return (
    <section className='border-y border-[#E5E5E5] py-[60px]'>
    <h2 className="text-[32px] font-[700] text-[#171717] leading-[28px] mb-3">Location</h2>
    <div className="pt-[24px] flex justify-between">
    <div>
    <h3 className="text-[24px] font-[700] text-[#4E566B]">NDF Field</h3>
      <p className="text-[18px] font-[400]   text-[#4A4A4A] leading-[28px] mt-1">
        Jean Baptiste Point du Sable Lake Shore Drive, Chicago, Illinois
      </p>
    </div>
      <button className="mt-3 inline-flex items-center px-[15px] py-[16px] text-sm border border-[#4E566B] rounded ">
        <p className="text-[18px] font-[500] text-[#4E566B] leading-[8px]">  Open maps</p>
       
      </button>
    </div>
  </section>
  )
}
