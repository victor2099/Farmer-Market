import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./config/db";
import morgan from "morgan";
import cors from "cors";
import userRoutes from "./routes/user.routes"
import adminRoutes from "./routes/admin.route";
import productRoutes from "./routes/product.routes";



const app = express();

connectDB();

const PORT = process.env.PORT || 3500;

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));



app.use(express.json());
app.use(morgan("dev"));
app.use("/api/products", productRoutes);

app.get("/", (_req, res) => {
  res.send("Hello from TypeScript backend!");
});

app.use('/api/users', userRoutes);
app.use("/api/admin", adminRoutes);


app.listen(PORT,'0.0.0.0' () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
