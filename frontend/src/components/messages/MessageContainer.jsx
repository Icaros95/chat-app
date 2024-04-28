import Messages from "./Messages";
import MessagesInput from "./MessagesInput";
import { TiMessages } from "react-icons/ti";

const MessagesContainer = () => {
  const noChatSlected = true;
  return (
    <div className="md:min-w-[450px] flex flex-col">
        { noChatSlected ? <NoChatSlected />
        : (
          <>
            {/* Header */}
            <div className="bg-[#1d232a] px-4 py-2 mb-2">
              <span className="label-text">To:</span> {" "}
              <span className="text-[#8A5A2A] font-bold">Morioka Shu</span>
            </div>
            <Messages />
            <MessagesInput />
          </>
        )}
    </div>
  )
}

export default MessagesContainer;

const NoChatSlected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-300 font-semibold flex flex-col items-center gap-2">
        <p>Welcome! Someya Hiromu {"o(≧▽≦)o"} </p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  )
}