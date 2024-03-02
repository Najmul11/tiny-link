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
exports.LinkService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const client_1 = require("@prisma/client");
const short_url_1 = require("../../../utils/short-url");
const prisma = new client_1.PrismaClient();
const createLink = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { originalLink, email } = payload;
    let userExist;
    if (email) {
        userExist = yield prisma.user.findUnique({ where: { email } });
    }
    const shortLink = yield (0, short_url_1.generateUniqueShortLink)();
    const result = yield prisma.link.create({
        data: {
            originalLink,
            shortLink,
            userId: userExist ? userExist.id : null,
        },
    });
    return result;
});
const deleteLink = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.link.delete({
        where: {
            id,
        },
    });
    if (!result)
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Internal error');
    return result;
});
const customizeLink = (payload, id) => __awaiter(void 0, void 0, void 0, function* () {
    const { shortLink, expiryDate, maxClicks } = payload;
    const existingShortLink = yield prisma.link.findUnique({
        where: { shortLink },
    });
    const existingLink = yield prisma.link.findUnique({
        where: { id },
    });
    if (!existingLink)
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'No Link Found');
    if (existingShortLink &&
        (existingShortLink === null || existingShortLink === void 0 ? void 0 : existingShortLink.shortLink) !== existingLink.shortLink) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Link already in use.🫥🫥🫥');
    }
    const result = yield prisma.link.update({
        where: { id },
        data: {
            shortLink: shortLink ? shortLink : existingLink.shortLink,
            expiryDate: expiryDate ? expiryDate : existingLink.expiryDate,
            maxClicks: maxClicks ? maxClicks : existingLink.maxClicks,
        },
    });
    return result;
});
exports.LinkService = {
    createLink,
    deleteLink,
    customizeLink,
};
