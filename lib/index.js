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
exports.ApiClient = void 0;
const checks_1 = require("./functions/checks");
exports.ApiClient = {
    checks: {
        create: new checks_1.Checks().create,
    },
};
function fetch() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield exports.ApiClient.checks.create();
        console.log(result);
    });
}
setInterval(() => {
    fetch();
}, 2000);
