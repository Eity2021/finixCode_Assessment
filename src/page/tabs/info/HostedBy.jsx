import avatar from "../../../assets/image/tabs/avatar.png";
export default function HostedBy() {
    return (
        <section>
        <h2 className="text-[24px] font-[700] text-[#171717] mb-4">Hosted by</h2>
        <div className="bg-[#4E566B] text-white rounded-lg py-[27px] px-[24px] shadow-sm   md:w-[720px] w-full">
          <div className="sm:flex  items-center gap-4">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full overflow-hidden ">
                <img
                  src={avatar}
                  alt="Alex Mercer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Host Info */}
            <div className="flex-grow">
              <h3 className="text-[24px] font-[700] text-[#fff]">Alex Mercer</h3>
              <div className="text-sm">
           <div className="flex gap-2">
                 
           <span className="text-[16px] font-[500] text-[#fff]">23</span>
                <span className="text-[16px] font-[400] text-[#F6F6F6]">activities hosted</span>   
           </div>
           <div className="flex gap-2">
                 
           <span className="text-[16px] font-[500] text-[#fff]">4.5</span>
                <span className="text-[16px] font-[400] text-[#F6F6F6]">host rating</span>   
           </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2 mt-3 sm:mt-0">
              <button className="bg-[#FDE8CD] text-[16px] font-[500] text-[#171717] rounded-full px-[27px] py-[10px] h-auto text-sm ">
                Message
              </button>
              <button className="border border-[#FDE8CD] text-[16px] font-[500] text-[#FDE8CD] rounded-full px-[16px] py-[10px] h-auto text-sm">
                View profile
              </button>
            </div>
          </div>
        </div>
      </section>
      );
}
