// これはエラーを発生させるためのファイルです
export class DivideByZeroError extends Error {}

export function divide(dividend: number, divisor: number): number {
  // 0で割ろうとするとエラーにする
  if (divisor === 0) {
    throw new DivideByZeroError();
  }
  return dividend / divisor;
}
