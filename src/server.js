import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";


import authRoutes from "./routes/auth.route.js";
// import inventoryRoutes from "./routes/inventory.route.js";
// import productRoutes from "./routes/product.route.js";
// import cartRoutes from "./routes/cart.route.js";
// import invoiceRoutes from "./routes/invoice.route.js";
// import statistikRoutes from "./routes/statistik.route.js";

//load .env
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000

// Middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

//Route
app.use("/api/auth", authRoutes);
// app.use("/api/inventories", inventoryRoutes);
// app.use("/api/products", productRoutes);
// app.use("/api/carts", cartRoutes);
// app.use("/api/invoice", invoiceRoutes);
// app.use("/api/statistik", statistikRoutes);

app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
});