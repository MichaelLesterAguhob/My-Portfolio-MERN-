const brcypt = require("bcryptjs");
const User = require("../models/User");
const { errorHandler, createAccessToken } = require("../authentication");

// REGISTER USER
module.exports.register = async (req, res) => {
  try {
    const newUser = new User({
        email: req.body.email,
        password: brcypt.hashSync(req.body.password, 10),
      });
    
      const isExisting = await User.findOne({ email: req.body.email });
      if (isExisting) {
        return res.status(409).send({ message: "Email already exists" });
      }
    
      newUser
        .save()
        .then((user) => {
          return res.status(201).send({ success: true, user });
        })
        .catch((error) => errorHandler(error, req, res));
  } catch (error) {
    errorHandler(error, req, res);
  }
};

// LOGIN USER
module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const account = await User.findOne({ email });

    if (!account) {
      return res.status(200).send({ success: false, message: "Email doesn't exists" });
    }

    const isPasswordMatched = brcypt.compareSync(password, account.password);

    if (isPasswordMatched) {
      return res.status(201).send({ success: true, access: createAccessToken(account) });
    } else {
      return res.status(200).send({ success: false, message: "Incorrect Password" });
    }
  } catch (error) {
    errorHandler(error, req, res);
  }
};

// GET USER DETAILS
module.exports.getUserDetails = async (req, res) => {
  try {
    const { id } = req.user;
    const accountDetails = await User.findById(id);

    if (!accountDetails) {
      return res.status(400).send({ success: false, message: "Error on getting user details" });
    } else {
      return res.status(200).send({ success: true, user: accountDetails });
    }
  } catch (error) {
    errorHandler(error, req, res);
  }
};

// UPDATE PASSWORD
module.exports.updatePassword = async (req, res) => {
  try {
    const { id } = req.user;
    const newPassword = brcypt.hashSync(req.body.password, 10);

    const account = await User.findById(id);
    if (!account) {
      return res.status(200).send({ success: false, message: "Error on updating password" });
    } else {
      account.password = newPassword;
      account.save().then((result) => {
        res.status(200).send({ success: true, user: account });
      });
    }
  } catch (error) {
    errorHandler(error, req, res);
  }
};

module.exports.uploadResume = async (req, res) => {
  res.send("upload resume is working");
};

module.exports.updateResume = async (req, res) => {
  res.send("update resume is working");
};
