require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
 const adminRoute = require("./router/admin-router");

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,PUT,POST,DELETE,PATCH,HEAD",
  credentials: true,
};

app.use(cors(corsOptions)); // Apply CORS middleware first
app.use(express.json()); // Apply JSON middleware once

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);
 app.use("/api/admin", adminRoute);

app.use(errorMiddleware); // Use the error middleware

const PORT = 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
  });
});


