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

export enum RequestMethod {
  GET,
  POST,
  PUT,
  DELETE,
}
