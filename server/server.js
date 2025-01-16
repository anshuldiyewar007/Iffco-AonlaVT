const express = require("express");
const cors = require("cors");
const router = require("./router/auth-route");
require("dotenv").config();
const connectDb = require("./utils/database");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-route");
const adminRoute = require("./router/admin-route");
const errorMiddleware = require("./middlewares/error-middleware");

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/auth", router);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);
app.use("/api/admin", adminRoute);
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
});
