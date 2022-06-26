"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpClient = void 0;
const axios_1 = require("axios");
const IHttpRequest_1 = require("../interfaces/IHttpRequest");
class HttpClient {
    fetch(apiParams) {
        return new Promise((resolve, reject) => {
            const url = apiParams.url;
            let axiosInstance = null;
            switch (apiParams.requestMethod) {
                case IHttpRequest_1.RequestMethod.GET:
                    axiosInstance = axios_1.default.get(url);
                    break;
                case IHttpRequest_1.RequestMethod.POST:
                    axiosInstance = axios_1.default.post(url, apiParams.input);
                    break;
                case IHttpRequest_1.RequestMethod.PUT:
                    axiosInstance = axios_1.default.put(url, apiParams.input);
                    break;
                case IHttpRequest_1.RequestMethod.DELETE:
                    axiosInstance = axios_1.default.delete(url, apiParams.input);
                    break;
                default:
                    axiosInstance = axios_1.default.get(url, apiParams.input);
                    break;
            }
            axiosInstance
                .then((response) => {
                if (response && response.data) {
                    resolve(response.data);
                }
            })
                .catch((error) => {
                reject(error);
            });
        });
    }
}
exports.HttpClient = HttpClient;
