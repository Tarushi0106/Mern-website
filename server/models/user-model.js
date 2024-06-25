const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");;
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phonel: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
});

userSchema.pre('save', async function () {
    console.log("pre method", this);
    const user = this;

    if (!user.isModified("password")) {
        next();
    }
    try {
const saltRound = await bcrypt.genSalt(10);
const hash_password = await bcrypt.hash(user.password , saltRound);
user.password = hash_password;
    }
    catch (error) {
        next(error);
    }
})


userSchema.methods.generateToken = async function () {
    console.log("I am token");
    try {
      return jwt.sign(
        {
          userId: this._id.toString(),
          email: this.email,
          isAdmin: this.isAdmin,
        },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: "30d",
        }
      );
    } catch (error) {
      console.error("Token Error: ", error);
    }
  };
  userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };
  //? define the model or the collection name
  const User = new mongoose.model("USER", userSchema);
  
  module.exports = User;
