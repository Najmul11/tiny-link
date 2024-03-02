"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const user_routes_1 = require("../modules/user/user.routes");
const links_routes_1 = require("../modules/links/links.routes");
const router = express_1.default.Router();
const allRoutes = [
    {
        path: '/user',
        route: user_routes_1.UserRoutes,
    },
    {
        path: '/link',
        route: links_routes_1.LinkRoutes,
    },
];
allRoutes.forEach(route => router.use(route.path, route.route));
exports.routes = router;
