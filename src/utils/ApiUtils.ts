import { DefaultApi, Configuration } from "../generated/client/src";

const API_BASE_PATH = "http://localhost:1234/wp-json"

/**
 * Utility class for loading api with predefined configuration
 */
export default class ApiUtils {

  public static getApi() {
    return new DefaultApi(new Configuration({basePath: API_BASE_PATH}));
  }

}