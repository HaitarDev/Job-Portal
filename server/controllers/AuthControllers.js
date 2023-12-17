const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/Users");

const sentTokenViaCookie = (token, res) => {
  res.cookie("jwt", token, {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    // secure: true,       // apply only on production mode
    httpOnly: true,
  });
};

const createToken = (id) =>
  jwt.sign({ id }, process.env.SECRET_KEY, {
    expiresIn: process.env.EXPIRES_IN,
  });
//  sign up user ------
exports.signUp = async (req, res) => {
  try {
    const { fullName, email, password, imgProfile } = req.body;

    if (!fullName || !email || !password)
      return res
        .status(403)
        .send("Invalid name or username or password provided");

    const hashPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      fullName,
      email,
      password: hashPassword,
      imgProfile,
    });

    const token = createToken(user._id);
    sentTokenViaCookie(token, res);

    res.status(200).json({ status: "success", data: { token, user } });
  } catch (err) {
    res.status(400).json({ status: "error", message: err });
  }
};

// login -----------
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(403).send("Invalid or username or password provided");

    const user = await User.findOne({ email }).select("+password");

    const compare = await bcrypt.compare(password, user.password);

    if (!user || !compare)
      return res.status(403).json("your email or password is incorrect");

    // create token

    const token = createToken(user._id);

    sentTokenViaCookie(token, res);

    res.status(200).json({
      status: "success",
      data: {
        token,
        email,
        name: user.fullName,
        img: user.imgProfile ? user.imgProfile : null,
      },
    });
  } catch (err) {
    res.status(400).json({ status: "error", message: err });
  }
};

exports.protect = async (req, res, next) => {
  // get token
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    } else if (req.cookies.jwt) {
      token = req.cookies.jwt;
    } else {
      return res.status(403).send("there is no authorization for this user");
    }

    // check tokens if correct
    const checkToken = jwt.verify(token, process.env.SECRET_KEY);

    if (!checkToken)
      return res.status(403).send("your token is invalid , try again !");

    // check if there is user
    const { id } = jwt.decode(token);

    const user = await User.findById(id);

    if (!user) return res.status(403).send("there is no user");

    // then next
    next();
  } catch (err) {
    res.status(400).json({ status: "error", message: err });
  }
};
