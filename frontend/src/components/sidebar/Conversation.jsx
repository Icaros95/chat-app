import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../store/useConversation"

const Conversation = ({ conversation }) => {
  const { selectedConversation, setSelectedConversation} = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div className={`flex gap-2 items-center hover:bg-[#8A5A2A] rounded p-2 py-1 cursor-pointer
        ${isSelected ? 'bg-[#8A5A2A]' : ''} `}
        onClick={() => setSelectedConversation(conversation)}
        >
              <div className={`avatar ${isOnline ? "online" : ""}`}>
                  <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
                  </div>
              </div>

              <div className="flex flex-col flex-1">
                <div className="flex gap-3 justify-between">
                    <p className="font-bold text-gray-300">{conversation.fullname}</p>
                </div>
              </div>
        </div>

      <div className="divider my-0 py-0" />
    </>
  )
}

export default Conversation;