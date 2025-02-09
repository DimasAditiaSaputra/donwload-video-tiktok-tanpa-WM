import express from "express";
import routerTiktok from "./routes/routeTiktok.js";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://127.0.0.1:5500",
  })
);
app.use("/", routerTiktok);

app.get("/tes", (req, res) => {
  return res.json({ msg: "hello" });
});

app.listen(port, () => {
  console.log("port is running on ", port);
});
