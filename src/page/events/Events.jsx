import React from "react";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Heart, MapPin } from "lucide-react";
import event1 from "../../assets/image/events/event1.png";
import event2 from "../../assets/image/events/event2.png";
import event3 from "../../assets/image/events/event3.png";
import locationIcon from "../../assets/image/events/locationIcon.png";
import currencyBangladeshi from "../../assets/image/events/currency-bangladeshi.png";
const events = [
  {
    id: 1,
    title: "Legends Rise on the Field",
    image: event1,
    date: "Thu, Dec 5",
    time: "10:30AM - 12:30PM",
    location: "Bashundhara Sports Complex",
    attending: 6,
    maxAttending: 8,
    price: 320,
    tags: ["Football", "Below 25y"],
    level: "Advanced",
  },
  {
    id: 2,
    title: "Chasing Glory: Football Showdown",
    image: event3,
    date: "Thu, Dec 5",
    time: "10:30AM - 12:30PM",
    location: "Bashundhara Sports Complex",
    attending: 6,
    maxAttending: 8,
    price: 320,
    tags: ["Football", "Below 25y"],
    level: "Advanced",
  },
  {
    id: 3,
    title: "United We Play, United Win",
    image: event2,
    date: "Thu, Dec 5",
    time: "10:30AM - 12:30PM",
    location: "Bashundhara Sports Complex",
    attending: 6,
    maxAttending: 8,
    price: 320,
    tags: ["Football", "Below 25y"],
    level: "Advanced",
  },
  {
    id: 4,
    title: "Football Frenzy Tournament",
    image: event3,
    date: "Thu, Dec 5",
    time: "10:30AM - 12:30PM",
    location: "Bashundhara Sports Complex",
    attending: 6,
    maxAttending: 8,
    price: 320,
    tags: ["Football", "Below 25y"],
    level: "Advanced",
  },
  {
    id: 5,
    title: "Champions League Local Edition",
    image: event1,
    date: "Thu, Dec 5",
    time: "10:30AM - 12:30PM",
    location: "Bashundhara Sports Complex",
    attending: 6,
    maxAttending: 8,
    price: 320,
    tags: ["Football", "Below 25y"],
    level: "Advanced",
  },
];

export default function Events() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.max(0, events.length - 3);
  const containerRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const updateCardWidth = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const newCardWidth = (containerWidth - 32) / 3;
        setCardWidth(newCardWidth);
      }
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <div className="container">
      <div className=" mx-auto p-6 bg-white">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[24px] font-[700]   text-[#261B36] leading-[28px] py-[20px] ">
            Other events you may like
          </h2>
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="rounded-full h-8 w-8 bg-[#F4F5EF] flex items-center justify-center disabled:opacity-50"
            >
              <ChevronLeft className="h-4 w-4 text-[#808080]" />
              <span className="sr-only">Previous</span>
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className="rounded-full h-8 w-8 border border-gray-300 flex items-center justify-center disabled:opacity-50"
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next</span>
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden " ref={containerRef}>
          <div
            className="flex gap-4 transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (cardWidth + 16)}px)`,
              width: `${events.length * (cardWidth + 16)}px`,
            }}
          >
            {events.map((event) => (
              <div
                key={event.id}
                className="rounded-[30px] overflow-hidden border border-gray-200 flex-shrink-0"
                style={{ width: `${cardWidth}px` }}
              >
                <div className="relative  ">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />

                  <div className="pt-[16px] px-[16px] flex gap-1 bg-white">
                    {event.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`text-xs font-normal px-[10px] py-[8px] rounded ${
                          index === 0
                            ? "bg-[#D9F2E6] text-[#4A4A4A] text-[12px] font-[400]  "
                            : index === 1
                            ? "bg-[#EFEDFF] text-[#4A4A4A] text-[12px] font-[400] "
                            : ""
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                    <div className="ml-auto">
                      <span className=" text-[#4A4A4A] text-[12px] font-normal leading-[20px]">
                        {event.level}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pb-[16px] px-[16px]">
                  <h3 className="font-[500] text-[24px] text-[#34735F] mb-1">
                    {event.title}
                  </h3>
                  <div className="flex items-center text-[14px] text-[#171717] font-[400] mb-1">
                    <span>{event.date}</span>
                    <span className="mx-1">•</span>
                    <span>{event.time}</span>
                  </div>
                  <div className="flex gap-2 items-center mb-3">
                    <img src={locationIcon} alt="locationIcon"/>
                    <span className="text-[14px] text-[#171717] font-[400] ">{event.location}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[14px] text-[#171717] font-[400] ">
                      {event.attending}/{event.maxAttending} attending
                    </span>
                    <div className="flex items-center">
                        <img src={currencyBangladeshi} alt="currency-bangladeshi"/>
                      <span className="text-[24px] text-[#171717] font-[400] ">
                        {event.price}
                      </span>
                      <span className="text-[18px] text-[#808080] font-[400]  ml-1">
                        /person
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
