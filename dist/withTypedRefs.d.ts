import { IAnyModelType, IModelType } from "mobx-state-tree";
declare type Without<T, K> = Pick<T, Exclude<keyof T, K>>;
declare type WithRefsModelType<T extends IAnyModelType, OTHERS> = T extends IModelType<infer P, infer O, infer C, infer S> ? IModelType<Without<P, keyof OTHERS>, O & OTHERS, C, S> : never;
export declare function withTypedRefs<REFS>(): <T extends IAnyModelType>(model: T) => WithRefsModelType<T, REFS>;
export {};
