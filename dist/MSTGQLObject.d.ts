import { IAnyModelType, IReferenceType } from "mobx-state-tree";
import { StoreType } from "./MSTGQLStore";
export declare function MSTGQLRef<T extends IAnyModelType>(targetType: T): IReferenceType<T>;
export declare const MSTGQLObject: import("mobx-state-tree").IModelType<{}, {
    __setStore(s: StoreType): void;
} & {
    __getStore<T>(): T;
    hasLoaded(key: string): boolean;
}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
