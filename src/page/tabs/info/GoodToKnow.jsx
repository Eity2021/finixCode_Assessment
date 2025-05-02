import { Calendar, Clock } from "lucide-react";
import tableSoccerField from "../../../assets/image/tabs/tabler_soccer-field.png";
import HostedBy from "./HostedBy";
export default function GoodToKnow() {
  return (
    <div className=" mx-auto my-[60px]">
      {/* Good to Know Section */}
      <section className="mb-10">
        <h2 className="text-[32px] font-[700] text-[#171717] leading-[28px] mb-[22px]">Good to know</h2>
        <div className="grid  xl:grid-cols-3 lg:grid-cols-3  grid-cols-1 gap-4">


          <div className="bg-[#DA6049] text-white rounded-lg p-5 shadow-sm ">
            <h3 className="text-[24px] font-[700] text-[#fff] mb-3">Highlights</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Calendar className="h-4 w-4 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-[18px] font-[500] text-[#fff]">Mon, 2 Dec</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-4 w-4 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-[18px] font-[500] text-[#fff]">7:30 AM - 8:30 AM</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-4 w-4 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-[18px] font-[500] text-[#fff]">Arrive 15 min before start</span>
              </li>
              <li className="flex items-start gap-2">
                <img src={tableSoccerField} alt="tablerSoccerField"/>
                <span className="text-[18px] font-[500] text-[#fff]">Venue booked</span>
              </li>
            </ul>
          </div>


          {/* Refund Policy */}
          <div className="bg-[#34735F]  rounded-lg p-5 shadow-sm lg:col-span-2 ">
            <h3 className="text-[24px] font-[700] text-[#fff] mb-3">Refund & cancellation policy</h3>
            <ul className="space-y-2 text-[18px] font-[500] text-[#fff] mb-3">
              {[
                "Full refund if host cancels the game",
                "Full refund if you cancel 24+ hours in advance",
                "Full refund if game is cancelled due to low attendance",
              ].map((text, index) => (
                <li key={index} className="flex items-start">
                  <div className="h-1 w-1 rounded-full bg-white mt-3 mr-3"></div>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
           <div className="flex justify-end"> <a href="#" className="text-[16px] font-[400] text-[#fff] hover:underline inline-block mt-1 ">
              Learn more
            </a></div>
          </div>
        </div>
      </section>

      {/* Hosted By Section */}
     <HostedBy></HostedBy>
    </div>
  );
}
