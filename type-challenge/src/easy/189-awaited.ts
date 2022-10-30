import type { Equal, Expect } from "../../utils/index";

/* my answer */
type MyAwaited<T extends Promise<any>> = T extends Promise<infer P>
  ? P extends Promise<any>
    ? MyAwaited<P>
    : P
  : never;

/* test case */
type X = Promise<string>;
type Y = Promise<{ field: number }>;
type Z = Promise<Promise<string | number>>;
type Z1 = Promise<Promise<Promise<string | boolean>>>;
type Z2 = Promise<Promise<Promise<Promise<string | boolean>>>>;

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
  Expect<Equal<MyAwaited<Z1>, string | boolean>>,
  Expect<Equal<MyAwaited<Z2>, string | boolean>>
];

// @ts-expect-error
type error = MyAwaited<number>;
