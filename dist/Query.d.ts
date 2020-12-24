import { DocumentNode } from "graphql";
import { StoreType } from "./MSTGQLStore";
export declare type CaseHandlers<T, R> = {
    loading(): R;
    error(error: any): R;
    data(data: T): R;
};
export declare type FetchPolicy = "cache-first" | "cache-only" | "cache-and-network" | "network-only" | "no-cache";
export interface QueryOptions {
    fetchPolicy?: FetchPolicy;
    noSsr?: boolean;
}
export declare class Query<T = unknown> implements PromiseLike<T> {
    store: StoreType;
    variables: any;
    options: QueryOptions;
    loading: boolean;
    data: T | undefined;
    error: any;
    query: string;
    promise: Promise<T>;
    private fetchPolicy;
    private queryKey;
    constructor(store: StoreType, query: string | DocumentNode, variables: any, options?: QueryOptions);
    clearData: () => void;
    refetch: () => Promise<T>;
    private fetchResults;
    private useCachedResults;
    case<R>(handlers: CaseHandlers<T, R>): R;
    currentPromise(): Promise<T>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): PromiseLike<TResult1 | TResult2>;
}
