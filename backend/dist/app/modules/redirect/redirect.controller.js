"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedirectController = void 0;
const catchAsyncError_1 = __importDefault(require("../../../shared/catchAsyncError"));
const redirect_service_1 = require("./redirect.service");
const config_1 = __importDefault(require("../../../config"));
const redirectToOriginalLink = (0, catchAsyncError_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { shortLink } = req.params;
    const result = yield redirect_service_1.RedirectService.redirectToOriginalLink(shortLink);
    if (result) {
        res.status(301).redirect(result);
    }
    else {
        res.status(400).redirect(`${config_1.default.frontend_url}/${shortLink}`);
    }
}));
exports.RedirectController = {
    redirectToOriginalLink,
};
