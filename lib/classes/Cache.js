"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cache = void 0;
const IHttpRequest_1 = require("../interfaces/IHttpRequest");
const HttpClient_1 = require("./HttpClient");
class Cache {
    async generateHash(message) {
        // encode as UTF-8
        const msgBuffer = new TextEncoder().encode(message);
        // hash the message
        const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
        // convert ArrayBuffer to Array
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        // convert bytes to hex string
        const hashHex = hashArray
            .map((b) => b.toString(16).padStart(2, "0"))
            .join("");
        return hashHex;
    }
    async handleCache(apiInfo, response, prefix) {
        const storeData = {
            prefix,
            data: response,
        };
        const hash = await this.generateHash(JSON.stringify(apiInfo));
        const result = await new HttpClient_1.HttpClient().fetch({
            url: `http://localhost:8000/store/${hash}`,
            input: storeData,
            requestMethod: IHttpRequest_1.RequestMethod.POST,
            isCachable: true,
        });
        console.log(result);
    }
}
exports.Cache = Cache;
