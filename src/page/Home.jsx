import React from "react";
import MainContent from "./MainContent";
import Events from "./events/Events";
import PaymentModal from "../page/events//PaymentModal";
export default function Home() {
  return (
    <div>
      <div>
        <div className="bg-[#F4F5EF]">
          <MainContent ></MainContent>
        </div>
        <Events></Events>
      </div>
    </div>
  );
}
