import { ICacheStore } from "./../interfaces/ICache";
import { IHttpRequest, RequestMethod } from "../interfaces/IHttpRequest";
import { HttpClient } from "./HttpClient";

export class Cache {
  async generateHash(message: string) {
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

    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result + hashHex;
  }

  async handleCache(apiInfo: IHttpRequest, response: any, prefix: string) {
    const storeData: ICacheStore = {
      prefix,
      data: response,
    };

    const hash = await this.generateHash(JSON.stringify(apiInfo));

    const result = await new HttpClient().fetch({
      url: `http://localhost:8000/store/${hash}`,
      input: storeData,
      requestMethod: RequestMethod.POST,
      isCachable: true,
    });

    console.log(result);
  }
}
