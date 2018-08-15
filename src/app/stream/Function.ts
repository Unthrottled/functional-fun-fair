export interface Function<T, R> {
    apply(t: T): R;
}

export interface BiFunction<T, U, R> {
    apply(t: T, u: U): R;
}