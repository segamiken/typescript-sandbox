import type { Equal, Expect } from "../../utils/index";

/* my answer */
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

/* test case */
type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>];

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}

/*
 * 参考資料
 * https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
 */
