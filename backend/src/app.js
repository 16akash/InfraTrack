import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import testRoutes from "./routes/testRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());


// Routes
app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/test",
  testRoutes
);


app.get("/", (req, res) => {
  res.send("InfraTrack API Running...");
});

export default app;