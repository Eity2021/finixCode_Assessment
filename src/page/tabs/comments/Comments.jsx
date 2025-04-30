import cornerUpRight from "../../../assets/image/comments/corner-up-right.png";
import Input from "./Input";
export default function Comments() {
  const messages = [
    {
      id: 1,
      user: "Alex Mercer",
      avatar: "AM",
      content: "Looking forward to the game! What's the final player count?",
      time: "14 min",
      color: "bg-[#34735F]",
      textColor: "text-white",
      heading: "text-[#FDE8CD]",
    },
    {
      id: 2,
      user: "Rifat Khan",
      avatar: "RK",
      content: "missing five players",
      time: "14 min",
      color: "bg-[#FDE8CD]",
      textColor: "text-[#171717]",
      paddingLeft: "ml-[20px]",
      heading: "text-[#34735F]",
    },
    {
      id: 3,
      user: "Rifat Khan",
      avatar: "RK",
      content: "got any friends?",
      time: "14 min",
      color: "bg-[#FDE8CD]",
      textColor: "text-[#171717]",
      paddingLeft: "ml-[20px]",
      heading: "text-[#34735F]",
    },
    {
      id: 4,
      user: "Alex Mercer",
      avatar: "AM",
      content: "Looking forward to the game! What's the final player count?",
      time: "14 min",
      color: "bg-[#34735F]",
      textColor: "text-white",
      heading: "text-[#FDE8CD]",
    },
    {
      id: 5,
      user: "Alex Mercer",
      avatar: "AM",
      content: "Looking forward to the game! What's the final player count?",
      time: "14 min",
      color: "bg-[#34735F]",
      textColor: "text-white",
      heading: "text-[#FDE8CD]",
    },
    {
      id: 6,
      user: "Rifat Khan",
      avatar: "RK",
      content: "got any friends?",
      time: "14 min",
      color: "bg-[#FDE8CD]",
      textColor: "text-[#171717]",
      paddingLeft: "ml-[20px]",
      heading: "text-[#34735F]",
    },
  ];

  return (
    <div className=" mx-auto rounded-lg bg-[#fff]">
      <div className="p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className=" flex-col space-y-1">
            <div
              className={` ${
                message.user === "Rifat Khan" ? "self-end flex-row-reverse" : ""
              }`}
            >
              {/* Avatar */}

              {/* Message Bubble */}
              <div className="flex flex-col ">
                <div
                  className={`relative rounded-lg px-4 py-[18px]  ${message.color} ${message.textColor} ${message.paddingLeft} `}
                >
                  <div className="flex justify-between items-center gap-4 mb-1 ">
                    <div className="flex gap-2">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                          message.user === "Alex Mercer"
                            ? "bg-[#FDE8CD] text-[#34735F]"
                            : "bg-[#34735F] text-[#FDE8CD]"
                        }`}
                      >
                        {message.avatar}
                      </div>
                      <span
                        className={`font-medium text-[24px] flex items-center   ${message.heading}`}
                      >
                        {message.user}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-[18px] font-[400]  opacity-80 ${message.heading}`}
                      >
                        {message.time}
                      </span>
                      {/* More icon (3 dots) */}

                      <button
                        className={`opacity-80 hover:opacity-100 text-xl leading-none pb-1 ${
                          message.user === "Alex Mercer"
                            ? "text-[#171717]"
                            : "text-[#34735F]"
                        }`}
                      >
                        &#8942;
                      </button>
                    </div>
                  </div>
                  <p className={`text-[20px] font-[400] ${message.textColor}`}>
                    {message.content}
                  </p>
                </div>

                {/* Reply Button */}
                {message.user === "Alex Mercer" && (
                  <div className="flex gap-2 mt-[8px]">
                    <img src={cornerUpRight} alt="cornerUpRight" />
                    <div className="text-[18px] text-[#808080] font-[500]  mt-1 ml-1 hover:underline">
                      Reply
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-[24px] ">
        <Input></Input>
      </div>
    </div>
  );
}
