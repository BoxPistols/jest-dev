// これはエラーを発生させるためのファイルです
export class DivideByZeroError extends Error {}

export function divide(dividend: number, divisor: number): number {
  if (divisor === 0) {
    throw new DivideByZeroError();
  }
  return dividend / divisor;
}
