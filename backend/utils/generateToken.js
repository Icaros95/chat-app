import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "15d"
    });

    res.cookie("jwt", token, {
      maxAge: 15 * 24 * 60 * 60 * 1000, // duration of token in cookies personal user store >> miliseconds format
      httpOnly: true, // prevents XSS attacks and cross-site scripting attacks >> ensure that cookies are not accessible through js
      sameSite: "strict", // prevent CSRF attacks cross-site request forgery atacks
      secure: process.env.NODE_ENV !== "development", // in production change to "true"
    });
};

export default generateTokenAndSetCookie;