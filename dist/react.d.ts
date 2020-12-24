/// <reference types="react" />
import { DocumentNode } from "graphql";
import { Query, FetchPolicy } from "./Query";
import { MSTGQLStore } from "./MSTGQLStore";
declare var ReactNamespace: typeof import("react");
export declare type QueryLike<STORE, DATA> = ((store: STORE) => Query<DATA>) | Query<DATA> | string | DocumentNode;
export declare function createStoreContext<STORE extends typeof MSTGQLStore.Type>(React: typeof ReactNamespace): import("react").Context<STORE>;
export declare function getDataFromTree<STORE extends typeof MSTGQLStore.Type>(tree: React.ReactElement<any>, client: STORE, renderFunction?: (tree: React.ReactElement<any>) => string): Promise<string>;
export declare type UseQueryHookOptions<STORE> = {
    store?: STORE;
    variables?: any;
    fetchPolicy?: FetchPolicy;
};
export declare type UseQueryHookResult<STORE, DATA> = {
    store: STORE;
    loading: boolean;
    error: any;
    data: {
        [key in keyof DATA]: DATA[key];
    } | undefined;
    query: Query<DATA> | undefined;
    setQuery: (query: QueryLike<STORE, DATA>) => void;
};
export declare type UseQueryHook<STORE> = <DATA>(query?: QueryLike<STORE, DATA>, options?: UseQueryHookOptions<STORE>) => UseQueryHookResult<STORE, DATA>;
export declare function createUseQueryHook<STORE extends typeof MSTGQLStore.Type>(context: React.Context<STORE>, React: typeof ReactNamespace): UseQueryHook<STORE>;
export {};
