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
exports.UserService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createUser = ({ email, name }) => __awaiter(void 0, void 0, void 0, function* () {
    if (!email || !name)
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Provide required information');
    const userExist = yield prisma.user.findUnique({
        where: { email },
    });
    if (userExist)
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'User already exist');
    const result = yield prisma.user.create({
        data: {
            name: name !== null && name !== void 0 ? name : 'No Name',
            email,
        },
    });
    return result;
});
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.user.findMany();
    return result;
});
const getSingleUser = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.user.findUnique({
        where: { email },
        include: {
            links: {
                orderBy: {
                    createdAt: 'desc',
                },
            },
        },
    });
    if (!result)
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'No User Found');
    return result;
});
exports.UserService = {
    createUser,
    getAllUsers,
    getSingleUser,
};
