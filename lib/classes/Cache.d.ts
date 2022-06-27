import { IHttpRequest } from "../interfaces/IHttpRequest";
export declare class Cache {
    generateHash(message: string): Promise<string>;
    handleCache(apiInfo: IHttpRequest, response: any, prefix: string): Promise<void>;
}
