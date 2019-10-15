/**
 * localhost:1234
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
export interface Body12 {
    /**
     * Unique identifier for the term.
     */
    id?: number;
    /**
     * HTML description of the term.
     */
    description?: string;
    /**
     * HTML title for the term.
     */
    name?: string;
    /**
     * An alphanumeric identifier for the term unique to its type.
     */
    slug?: string;
    /**
     * The parent term ID.
     */
    parent?: number;
    /**
     * Meta fields.
     */
    meta?: string;
}
export interface Body12Opt {
    /**
     * Unique identifier for the term.
     */
    id?: number;
    /**
     * HTML description of the term.
     */
    description?: string;
    /**
     * HTML title for the term.
     */
    name?: string;
    /**
     * An alphanumeric identifier for the term unique to its type.
     */
    slug?: string;
    /**
     * The parent term ID.
     */
    parent?: number;
    /**
     * Meta fields.
     */
    meta?: string;
}
