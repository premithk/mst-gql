import { GraphQLClient } from "graphql-request";
export declare type HttpClientOptions = ConstructorParameters<typeof GraphQLClient>[1];
export declare function createHttpClient(url: string, options?: HttpClientOptions): GraphQLClient;
