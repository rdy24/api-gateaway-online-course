require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const mediaRouter = require("./routes/media");
const ordersRouter = require("./routes/orders");
const coursesRouter = require("./routes/courses");
const paymentsRouter = require("./routes/payments");
const refreshTokensRouter = require("./routes/refreshTokens");
const mentorsRouter = require("./routes/mentors");
const chaptersRouter = require("./routes/chapters");
const lessonsRouter = require("./routes/lessons");
const imageCoursesRouter = require("./routes/image-courses");
const myCoursesRouter = require("./routes/my-courses");
const reviewsRouter = require("./routes/reviews");

const verifyToken = require("./middlewares/verifyToken");

const app = express();

app.use(logger("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false, limit: "50mb" }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/courses", coursesRouter);
app.use("/chapters", verifyToken, chaptersRouter);
app.use("/lessons", verifyToken, lessonsRouter);
app.use("/media", verifyToken, mediaRouter);
app.use("/orders", verifyToken, ordersRouter);
app.use("/refresh_tokens", refreshTokensRouter);
app.use("/mentors", verifyToken, mentorsRouter);
app.use("/image-courses", verifyToken, imageCoursesRouter);
app.use("/my-courses", verifyToken, myCoursesRouter);
app.use("/payments", paymentsRouter);
app.use("/reviews", verifyToken, reviewsRouter);

module.exports = app;
