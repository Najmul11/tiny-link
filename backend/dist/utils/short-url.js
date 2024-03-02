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
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUniqueShortLink = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const generateTinyLink = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let randomString = '';
    for (let i = 0; i < 6; i++) {
        randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomString;
};
const generateUniqueShortLink = () => __awaiter(void 0, void 0, void 0, function* () {
    const shortLink = generateTinyLink();
    const existingLink = yield prisma.link.findUnique({
        where: { shortLink },
    });
    if (existingLink) {
        return (0, exports.generateUniqueShortLink)();
    }
    else {
        return shortLink;
    }
});
exports.generateUniqueShortLink = generateUniqueShortLink;
