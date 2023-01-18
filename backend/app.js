require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//My routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const teamRoutes = require("./routes/team");
const imagesRoutes = require("./routes/images");
const videosRoutes = require("./routes/videos");
const contactUsRoutes = require("./routes/contactUs");
const startupRoutes = require("./routes/startup");
const testimonialRoutes = require("./routes/testimonial");
const eventsRoutes = require("./routes/events");

//DB Connection
mongoose
    .connect(process.env.DATABASE)
    .then(() => {
        console.log("DB CONNECTED");
    });

//Middlewares
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(cookieParser());
app.use(cors());

//My Routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", teamRoutes);
app.use("/api", imagesRoutes);
app.use("/api", videosRoutes);
app.use("/api", contactUsRoutes);
app.use("/api", startupRoutes);
app.use("/api", testimonialRoutes);
app.use("/api", eventsRoutes);
// app.use("/api", orderRoutes);
//PORT
const port = process.env.PORT || 8000;

//Starting a server
app.listen(port, () => {
    console.log(`app is running at ${port}`);
});