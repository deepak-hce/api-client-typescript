export interface IHttpRequest {
    url: string;
    requestMethod: RequestMethod;
    input: object;
    hideResponseMsg?: boolean;
    headers?: IExternalApiHeaders[];
}
export interface IExternalApiHeaders {
    key: string;
    value: string;
}
export declare enum RequestMethod {
    GET = 0,
    POST = 1,
    PUT = 2,
    DELETE = 3
}
