const Message = () => {
  return (
    <div className="chat chat-end">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                  <img src={"https://images.unsplash.com/photo-1589656966895-2f33e7653819?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="Taildwind chat bubble component" />
            </div>
        </div>
        <div className={"chat-bubble text-white bg-slate-800"}>Hi! What is upp?</div>
        <div className="chat-footer opacity-50 text-xs flex gat-1 items-center">06:13</div>
    </div>
  )
}

export default Message