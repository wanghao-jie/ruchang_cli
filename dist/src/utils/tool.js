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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = exports.writeInPkg = exports.hasElementInArray = void 0;
var env_1 = require("./env");
var debug_1 = require("./debug");
var fs_extra_1 = __importDefault(require("fs-extra"));
var path_1 = require("./path");
var cross_spawn_1 = __importDefault(require("cross-spawn"));
var hasElementInArray = function (list, element) {
    return list.indexOf(element) >= 0 ? element : '';
};
exports.hasElementInArray = hasElementInArray;
var writeInPkg = function (devArr, key) {
    if (key === void 0) { key = 'devDependencies'; }
    return __awaiter(void 0, void 0, void 0, function () {
        var pkg;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, (0, env_1.getPackageJson)()];
                case 1:
                    pkg = _a.sent();
                    devArr.forEach(function (item) {
                        var index = item.lastIndexOf('@');
                        var k = index === 1 ? item : item.slice(0, index);
                        var v = index === -1 ? '' : item.slice(index + 1) || '';
                        pkg[key][k] = v;
                        (0, debug_1.debugInfo)("".concat(item, "\u2705"));
                    });
                    fs_extra_1.default.writeJsonSync((0, path_1.getPath)('package.json'), pkg, { spaces: 2 });
                    return [2];
            }
        });
    });
};
exports.writeInPkg = writeInPkg;
var run = function (str) { return __awaiter(void 0, void 0, void 0, function () {
    var basePath, runArr, npm, args;
    return __generator(this, function (_a) {
        basePath = (0, env_1.getEnv)('base');
        runArr = str.split(' ');
        if (runArr.length < 2) {
            (0, debug_1.debugWarning)("\u8FD0\u884C\u53C2\u6570\u9519\u8BEF".concat(str));
            return [2, false];
        }
        npm = runArr[0], args = runArr.slice(1);
        (0, debug_1.debugInfo)("".concat(runArr.join(' '), "\u2705"));
        cross_spawn_1.default.sync(npm, args, {
            stdio: 'pipe',
            cwd: basePath
        });
        return [2];
    });
}); };
exports.run = run;
