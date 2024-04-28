const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-[#8A5A2A] rounded p-2 py-1 cursor-pointer">
              <div className="avatar online">
                  <div className="w-12 rounded-full">
            <img src={"https://images.unsplash.com/photo-1508138142660-302e69e74271?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="user avatar" />
                  </div>
              </div>

              <div className="flex flex-col flex-1">
                <div className="flex gap-3 justify-between">
                    <p className="font-bold text-gray-300">Someya Horimu</p>
                    <span className="text-xl">🧑🏻‍💻</span>
                </div>
              </div>
        </div>

        <div className="divider my-0 py-0"></div>
    </>
  )
}

export default Conversation