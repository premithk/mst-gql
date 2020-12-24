export declare abstract class QueryBuilder {
    __query: string;
    constructor();
    protected __attr(attr: string): this;
    _(str: string): this;
    protected __child<T extends QueryBuilder>(childName: string, childType: new () => T, builder?: string | ((q: T) => T) | T): this;
    protected __inlineFragment<T extends QueryBuilder>(childName: string, childType: new () => T, builder?: string | ((q: T) => T) | T): this;
    protected __buildChild<T extends QueryBuilder>(childType: new () => T, builder?: string | ((q: T) => T) | T): void;
    toString(): string;
}
