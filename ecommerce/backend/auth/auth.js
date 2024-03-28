import jwt from "jsonwebtoken";
export const authUser = async (req, res, next) => {


  let token;
  if (req.headers.cookie) {
    token = req.headers.cookie.split("=")[1];
  } else {
    return res.status(200).json({ user: {} });
  }

  jwt.verify(token, "secret", (err, decode) => {
    if (err) {
      res.status(200).json({ user: {} });
    }
    // console.log(decode);
    req.userId = decode.id;
  });
  next();
};
