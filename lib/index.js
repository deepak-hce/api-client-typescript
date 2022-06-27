"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiClient = void 0;
const checks_1 = require("./functions/checks");
exports.ApiClient = {
    checks: {
        create: new checks_1.Checks().create,
    },
};
async function fetch() {
    const result = await exports.ApiClient.checks.create();
}
