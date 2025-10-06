"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./config/db"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const admin_route_1 = __importDefault(require("./routes/admin.route"));
const product_routes_1 = __importDefault(require("./routes/product.routes"));
const app = (0, express_1.default)();
(0, db_1.default)();
const PORT = process.env.PORT || 3500;
app.use((0, cors_1.default)({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
app.use("/api/products", product_routes_1.default);
app.get("/", (_req, res) => {
    res.send("Hello from TypeScript backend!");
});
app.use('/api/users', user_routes_1.default);
app.use("/api/admin", admin_route_1.default);
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
