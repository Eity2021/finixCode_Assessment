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
    <div className="container mx-auto px-4">
    <div className="p-6 bg-white">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl md:text-2xl font-bold text-[#261B36] py-5">
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

      <div className="relative overflow-hidden" ref={containerRef}>
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
              className="rounded-[30px] overflow-hidden border border-gray-200 flex-shrink-0 bg-white"
              style={{ width: `${cardWidth}px` }}
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="pt-4 px-4 bg-white">
                <div className="flex gap-2 mb-2">
                  {event.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`text-[12px] px-[10px] py-[6px] rounded font-normal ${
                        i === 0
                          ? "bg-[#D9F2E6] text-[#4A4A4A]"
                          : "bg-[#EFEDFF] text-[#4A4A4A]"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="ml-auto text-[12px] text-[#4A4A4A]">
                    {event.level}
                  </span>
                </div>

                <h3 className="text-[20px] font-medium text-[#34735F] mb-1">
                  {event.title}
                </h3>
                <div className="text-[14px] text-[#171717] mb-1">
                  {event.date} • {event.time}
                </div>
                <div className="flex items-center gap-2 mb-3 text-[14px] text-[#171717]">
                  <img src={locationIcon} alt="location" className="w-4 h-4" />
                  {event.location}
                </div>

                <div className="flex items-center justify-between text-[14px]">
                  <span>
                    {event.attending}/{event.maxAttending} attending
                  </span>
                  <div className="flex items-center gap-1">
                    <img src={currencyBangladeshi} alt="currency" className="w-4 h-4" />
                    <span className="text-[20px]">{event.price}</span>
                    <span className="text-[14px] text-[#808080]">/person</span>
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
