import { StoreType } from "./MSTGQLStore";
declare type LocalStorageMixinOptions = {
    storage?: {
        getItem(key: string): string | null | Promise<string | null>;
        setItem(key: string, data: string): void;
    };
    throttle?: number;
    storageKey?: string;
    filter?: string[];
};
export declare function localStorageMixin(options?: LocalStorageMixinOptions): (self: StoreType) => {
    actions: {
        afterCreate(): Promise<void>;
    };
};
export {};
