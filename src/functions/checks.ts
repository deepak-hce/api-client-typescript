import { Cache } from "../classes/Cache";
import { IHttpRequest, RequestMethod } from "../interfaces/IHttpRequest";
import { HttpClient } from "./../classes/HttpClient";
export class Checks {
  async create() {
    const apiInfo: IHttpRequest = {
      url: `https://jsonplaceholder.typicode.com/todos/1`,
      input: {},
      requestMethod: RequestMethod.GET,
      isCachable: true,
    };

    const result = await new HttpClient().fetch(apiInfo);

    const result1 = await new Cache().handleCache(
      apiInfo,
      result,
      "API_RESPONSE"
    );
    console.log(result);

    return result;
  }
}
