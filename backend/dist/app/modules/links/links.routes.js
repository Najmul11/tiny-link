"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkRoutes = void 0;
const express_1 = __importDefault(require("express"));
const links_controller_1 = require("./links.controller");
const router = express_1.default.Router();
router.post('/create-link', links_controller_1.LinkController.createLink);
router.delete('/delete-link/:id', links_controller_1.LinkController.deleteLink);
router.patch('/customize/:id', links_controller_1.LinkController.customizeLink);
exports.LinkRoutes = router;
