export * from './default.service';
import { DefaultService } from './default.service';
export declare class ApiUtils {
    /**
     * Handles response from API
     *
     * @param response response object
     */
    static handleResponse(response: Response): any;
    /**
     * Returns UMA ticket from www-authenticate header or null if not found
     *
     * @param response response from api call
     *
     * @returns uma ticket or null
     */
    static getUMATicket(response: Response): any;
    /**
     * Returns RPT token using authorization and ticket
     *
     * @param authorization authorization
     * @param ticket ticket
     * @returns RPT token
     **/
    static getRPT: (authorization: string, ticket: any) => Promise<any>;
}
declare const _default: {
    apiUrl: string;
    /**
     * Configures api endpoint
     *
     */
    configure(baseUrl: string): void;
    getDefaultService(token: string): DefaultService;
};
export default _default;
