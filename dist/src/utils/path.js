"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPath = void 0;
var path_1 = __importDefault(require("path"));
var env_1 = require("./env");
var getPath = function (name) {
    var basePath = (0, env_1.getEnv)('base');
    return path_1.default.resolve(basePath, name);
};
exports.getPath = getPath;
