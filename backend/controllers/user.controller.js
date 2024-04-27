import User from "../models/user.model.js";

export const getUsersForSidebar = async(req, res) => {
    try {
      const loggedUserId = req.user._Id;

      const allFilteredUsers = await User.find({ _id: { $ne: loggedUserId } }).select("-password"); // searches all users in the database except the user itself (the current user)
    
      res.status(200).json(allFilteredUsers);

    } catch (error) {
        console.log("Error in getUsersForSidebar controller: ", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}