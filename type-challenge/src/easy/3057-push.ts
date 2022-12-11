import type { Equal, Expect } from "../../utils/index";

/* _____________ Your Code Here _____________ */
type Push<T extends unknown[], U> = [...T, U];

/* _____________ Test Cases _____________ */
type cases = [
  Expect<Equal<Push<[], 1>, [1]>>,
  Expect<Equal<Push<[1, 2], "3">, [1, 2, "3"]>>,
  Expect<Equal<Push<["1", 2, "3"], boolean>, ["1", 2, "3", boolean]>>
];

/* _____________ References _____________ */
