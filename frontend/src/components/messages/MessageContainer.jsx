import { useEffect } from "react";
import useConversation from "../../store/useConversation";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
  const {selectedConversation, setSelectedConversation} = useConversation();

  useEffect(() => {
    // cleanup function
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="md:min-w-[450px] flex flex-col">
        { !selectedConversation ? ( 
          <NoChatSlected />
        ) : (
          <>
            {/* Header */}
            <div className="bg-[#1d232a] px-4 py-2 mb-2">
              <span className="label-text">To:</span> {" "}
              <span className="text-[#8A5A2A] font-bold">{selectedConversation.fullname}</span>
            </div>
            <Messages />
            <MessageInput />
          </>
        )}
    </div>
  );
};

export default MessageContainer;

const NoChatSlected = () => {
  const { authUser } = useAuthContext();

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-300 font-semibold flex flex-col items-center gap-2">
        <p>Welcome! {authUser.fullname} {"o(≧▽≦)o"} </p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  )
}