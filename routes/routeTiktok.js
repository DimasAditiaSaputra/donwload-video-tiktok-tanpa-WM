import express from "express";
import { donwload } from "../controller/download.js";

const router = express.Router();

router.post("/download", donwload);

export default router;
