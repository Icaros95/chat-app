import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId, // reference to the id of the object created within and automatically by mongodb
      ref: "User",
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId, // reference to the id of the object created within and automatically by mongodb
      ref: "User",
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    // createdAt, updatedAt >> when having to update and create these fields the timestamp must be true for mongoose >> will try to automatically create these fields to show how long ago the message was sent
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;