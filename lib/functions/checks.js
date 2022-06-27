"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checks = void 0;
const Cache_1 = require("../classes/Cache");
const IHttpRequest_1 = require("../interfaces/IHttpRequest");
const HttpClient_1 = require("./../classes/HttpClient");
class Checks {
    async create() {
        const apiInfo = {
            url: `https://jsonplaceholder.typicode.com/todos/1`,
            input: {},
            requestMethod: IHttpRequest_1.RequestMethod.GET,
            isCachable: true,
        };
        const result = await new HttpClient_1.HttpClient().fetch(apiInfo);
        const result1 = await new Cache_1.Cache().handleCache(apiInfo, result, "API_RESPONSE");
        console.log(result);
        return result;
    }
}
exports.Checks = Checks;
