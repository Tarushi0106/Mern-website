const mongoose = require("mongoose");
//  const URI = "mongodb://127.0.0.1:27017/mern_admin_panel";
 const URI = process.env.MONGODB_URI;
  // const URI = "mongodb+srv://tarushi0106:urat0100@cluster0.dvdl2bz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connection successful to DB");
  } catch (error) {
    console.error("database connection fail");
    process.exit(0);
  }
};

module.exports = connectDb;


// mongodb+srv://tarushi0106:urat0100@cluster0.dvdl2bz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0