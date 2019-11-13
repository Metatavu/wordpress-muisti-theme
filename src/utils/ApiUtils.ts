import { DefaultApi, Configuration } from "../generated/client/src";

const API_BASE_PATH = `${window.location}/wp-json`;

// const API_BASE_PATH = "http://a42becf7.ngrok.io/wp-json"
/**
 * Utility class for loading api with predefined configuration
 */
export default class ApiUtils {

  public static getApi() {
    return new DefaultApi(new Configuration({basePath: API_BASE_PATH}));
  }

}