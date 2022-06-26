import axios from "axios";
import { IHttpRequest, RequestMethod } from "../interfaces/IHttpRequest";

export class HttpClient {
  fetch(apiParams: IHttpRequest) {
    return new Promise((resolve, reject) => {
      const url = apiParams.url;

      let axiosInstance = null;
      switch (apiParams.requestMethod) {
        case RequestMethod.GET:
          axiosInstance = axios.get(url);
          break;

        case RequestMethod.POST:
          axiosInstance = axios.post(url, apiParams.input);
          break;

        case RequestMethod.PUT:
          axiosInstance = axios.put(url, apiParams.input);
          break;

        case RequestMethod.DELETE:
          axiosInstance = axios.delete(url, apiParams.input);
          break;

        default:
          axiosInstance = axios.get(url, apiParams.input);
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
