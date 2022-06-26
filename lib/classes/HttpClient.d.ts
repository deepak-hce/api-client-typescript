import { IHttpRequest } from "../interfaces/IHttpRequest";
export declare class HttpClient {
    fetch(apiParams: IHttpRequest): Promise<unknown>;
}
