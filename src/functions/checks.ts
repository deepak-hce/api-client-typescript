import { RequestMethod } from "../interfaces/IHttpRequest";
import { HttpClient } from "./../classes/HttpClient";
export class Checks {
  async create() {
    return await new HttpClient().fetch({
      url: `https://jsonplaceholder.typicode.com/todos/1`,
      input: {},
      requestMethod: RequestMethod.GET,
    });
  }
}
