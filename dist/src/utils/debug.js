"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.debugTxt = exports.debugProcess = exports.debugWarning = exports.debugError = exports.debugInfo = void 0;
var chalk_1 = __importDefault(require("chalk"));
var log = console.log;
var debugSwitch = true;
var debugInfo = function (msg) {
    debugSwitch && log(chalk_1.default.hex('#646cff')("[ruchang-cli]") + chalk_1.default.red(msg));
    process.exit(0);
};
exports.debugInfo = debugInfo;
var debugError = function (msg) {
    debugSwitch && log(chalk_1.default.hex('#646cff')("[ruchang_cli]:") + chalk_1.default.red(msg));
    process.exit(0);
};
exports.debugError = debugError;
var debugWarning = function (msg) {
    log(chalk_1.default.hex('#646cff')("[ruchang-cli]:") + chalk_1.default.yellow(msg));
};
exports.debugWarning = debugWarning;
var debugProcess = function (msg) {
    debugSwitch && log(chalk_1.default.hex('#646cff')("[ruchang-cli]:") + chalk_1.default.yellow(msg));
};
exports.debugProcess = debugProcess;
var debugTxt = function (msg) {
    log(chalk_1.default.hex('#646cff')("[ruchang-cli]:") + chalk_1.default.hex('#5c6d82')(msg));
};
exports.debugTxt = debugTxt;
