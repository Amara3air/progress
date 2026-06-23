const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { error } = require("node:console");
const userRoute = require("./Routes/user.Route");
const productRoute = require("./Routes/product");


const server = express();
const PORT = process.env.PORT;

server.use(express.json());
server.get("/", (req, res) => {
  res.send("Hello Progress! Your root is working.");
});
server.use("/api/users", userRoute);
server.use("/api/products", productRoute);
server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅Successfully connected to MongoDE!"))
  .catch((error) => console.error("❌MongoDB Connection error:", error));
