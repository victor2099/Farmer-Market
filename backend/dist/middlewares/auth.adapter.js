"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizeRoles = exports.authMiddleware = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Determine whether to use the stub middleware
const USE_STUB = process.env.USE_AUTH_STUB === "true";
let authMiddlewareReal = (req, res, next) => {
    throw new Error("authMiddlewareReal is not initialized. Set USE_AUTH_STUB=false and ensure auth.middleware is available.");
};
let authorizeRolesReal = () => {
    return (req, res, next) => {
        throw new Error("authorizeRolesReal is not initialized. Set USE_AUTH_STUB=false and ensure auth.middleware is available.");
    };
};
if (!USE_STUB) {
    // Use real middleware (ensure the path is correct relative to this file)
    const mod = require("./auth.middleware");
    authMiddlewareReal = mod.authMiddleware;
    authorizeRolesReal = mod.authorizeRoles;
}
/** Stub auth middleware for local testing (when USE_AUTH_STUB=true) */
function authMiddlewareStub(req, res, next) {
    const raw = req.header("x-dev-user");
    if (!raw) {
        return res
            .status(401)
            .json({ message: "No x-dev-user header provided, or turn off USE_AUTH_STUB" });
    }
    try {
        req.user = JSON.parse(raw);
        next();
    }
    catch {
        return res.status(400).json({ message: "Invalid x-dev-user JSON" });
    }
}
/** Stub role authorizer for local testing */
function authorizeRolesStub(...roles) {
    return (req, res, next) => {
        const user = req.user;
        if (!user)
            return res.status(401).json({ message: "Unauthorized" });
        if (!roles.includes(user.role))
            return res.status(403).json({ message: "Forbidden" });
        next();
    };
}
exports.authMiddleware = USE_STUB ? authMiddlewareStub : authMiddlewareReal;
exports.authorizeRoles = USE_STUB ? authorizeRolesStub : authorizeRolesReal;
