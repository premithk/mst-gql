import { DocumentNode } from "graphql";
import { IAnyModelType } from "mobx-state-tree";
import { Query, QueryOptions } from "./Query";
export interface RequestHandler<T = any> {
    request(query: string, variables: any): Promise<T>;
}
export declare const MSTGQLStore: import("mobx-state-tree").IModelType<{
    __queryCache: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IMapType<import("mobx-state-tree").IType<any, any, any>>, [undefined]>;
}, {
    ssr: boolean;
    __promises: Map<string, Promise<unknown>>;
    __afterInit: boolean;
} & {
    merge: (data: unknown) => any;
    deflate: (data: unknown) => any;
    mutate: <T>(mutation: string | DocumentNode, variables?: any, optimisticUpdate?: (() => void) | undefined) => Query<T>;
    query: <T_1>(query: string | DocumentNode, variables?: any, options?: QueryOptions) => Query<T_1>;
    subscribe: <T_2 = any>(query: string | DocumentNode, variables?: any, onData?: ((item: T_2) => void) | undefined, onError?: (error: Error) => void) => () => void;
    rawRequest: (query: string, variables: any) => Promise<any>;
    __pushPromise(promise: Promise<{}>, queryKey: string): void;
    __runInStoreContext<T_3>(fn: () => T_3): T_3;
    __cacheResponse(key: string, response: any): void;
    __onAfterInit(): void;
}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
export declare function configureStoreMixin(knownTypes: [string, () => IAnyModelType][], rootTypes: string[], namingConvention?: string): () => {
    actions: {
        afterCreate(): void;
    };
    views: {
        isKnownType(typename: string): boolean;
        isRootType(typename: string): boolean;
        getTypeDef(typename: string): IAnyModelType;
        getCollectionName(typename: string): string;
    };
};
export declare type StoreType = typeof MSTGQLStore.Type;
