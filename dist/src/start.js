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
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = void 0;
var env_1 = require("./utils/env");
var eslint_1 = require("./core/eslint");
var husky_1 = require("./core/husky");
var eslintignore_1 = require("./core/eslintignore");
var commitlint_1 = require("./core/commitlint");
var special_1 = require("./core/special");
var vscode_1 = require("./core/vscode");
var debug_1 = require("./utils/debug");
var tool_1 = require("./utils/tool");
var start = function (base, answers) { return __awaiter(void 0, void 0, void 0, function () {
    var pkgJson, _a, vue3, _b, plugins, _c, _d, _e, _f, _g, _h, error_1;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0: return [4, (0, env_1.getPackageJson)(base)];
            case 1:
                pkgJson = _j.sent();
                _a = answers.vue3, vue3 = _a === void 0 ? false : _a, _b = answers.plugins, plugins = _b === void 0 ? [] : _b;
                return [4, (0, env_1.inirProjectInfo)(pkgJson)];
            case 2:
                _j.sent();
                _j.label = 3;
            case 3:
                _j.trys.push([3, 16, , 17]);
                _c = vue3;
                if (!_c) return [3, 5];
                return [4, (0, special_1.specialFn)()];
            case 4:
                _c = (_j.sent());
                _j.label = 5;
            case 5:
                _c;
                _d = (0, tool_1.hasElementInArray)(plugins, 'eslint');
                if (!_d) return [3, 7];
                return [4, (0, eslint_1.eslintInit)()];
            case 6:
                _d = (_j.sent());
                _j.label = 7;
            case 7:
                _d;
                _e = (0, tool_1.hasElementInArray)(plugins, 'eslint');
                if (!_e) return [3, 9];
                return [4, (0, eslintignore_1.eslintIgnoreInit)()];
            case 8:
                _e = (_j.sent());
                _j.label = 9;
            case 9:
                _e;
                _f = (0, tool_1.hasElementInArray)(plugins, 'husky');
                if (!_f) return [3, 11];
                return [4, (0, husky_1.huskyInit)()];
            case 10:
                _f = (_j.sent());
                _j.label = 11;
            case 11:
                _f;
                _g = (0, tool_1.hasElementInArray)(plugins, 'commitLint');
                if (!_g) return [3, 13];
                return [4, (0, commitlint_1.commitLintInit)()];
            case 12:
                _g = (_j.sent());
                _j.label = 13;
            case 13:
                _g;
                _h = (0, tool_1.hasElementInArray)(plugins, 'vscode');
                if (!_h) return [3, 15];
                return [4, (0, vscode_1.vscodeInit)()];
            case 14:
                _h = (_j.sent());
                _j.label = 15;
            case 15:
                _h;
                (0, debug_1.debugProcess)("\u606D\u559C\u60A8\uFF0C\u6210\u529F\u6CE8\u518C".concat(vue3 ? 'vue3' : '', " ").concat((0, tool_1.hasElementInArray)(plugins, 'eslint'), " ").concat((0, tool_1.hasElementInArray)(plugins, 'husky'), " ").concat((0, tool_1.hasElementInArray)(plugins, 'commitLint'), " ").concat((0, tool_1.hasElementInArray)(plugins, 'vscode'), " \u63D2\u4EF6"));
                (0, debug_1.debugProcess)('请重新安装依赖！npm install or yarn');
                (0, debug_1.debugTxt)("");
                return [3, 17];
            case 16:
                error_1 = _j.sent();
                (0, debug_1.debugError)(JSON.stringify(error_1));
                return [3, 17];
            case 17: return [2];
        }
    });
}); };
exports.start = start;
