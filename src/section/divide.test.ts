import { divide, DivideByZeroError } from "./divide";

it("0で割るとエラー", () => {
  expect(() => {
    divide(10, 0);
  }).toThrow(DivideByZeroError);
});
