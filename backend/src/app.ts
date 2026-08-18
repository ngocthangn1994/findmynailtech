import express from "express";
import cors from "cors";
const app = express();

const corsOptions = {
  origin: ["http://localhost:3500", "http://localhost.5173/"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credential: true,
};
app.use(express.json());
app.use(cors(corsOptions));
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "FindMyNailTech is running.",
  });
});

export default app;
