// type MyPick<T, K> = any
type MyPick<T, K extends keyof T> = {
  [P in K] : T[P];
}

// 1. K extends keyof T => K 约束在T对象key的范围内，即T对象key中必须存在K