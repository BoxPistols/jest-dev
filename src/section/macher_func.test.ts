// toBe
test("toBe matcher", () => {
  const value = 2 + 2;
  expect(value).toBe(4);
});

// 文字列のテスト
it("文字列のテスト", () => {
  const value = "文字列";
  expect(value).toBe("文字列");
});

// boolのテスト
it("boolのテスト", () => {
  const value = true;
  expect(value).toBe(true);
});

// toEqual
it("toEqual matcher", () => {
  const value = { one: 1, two: 2 };
  expect(value).toEqual({ one: 1, two: 2 });
});

// 配列のテスト
it("配列のテスト", () => {
  const value = [1, 2, 3];
  // value2
  const value2 = [1, 2, 3];
  expect(value).toEqual(value2);
});

// toBeNull
it("not matcher", () => {
  const value = 2 + 2;
  expect(value).not.toBe(5);
});

// toBeNull
it("toBeNull matcher", () => {
  const value = null;
  expect(value).toBeNull();
});

// toBeUndefined
it("toBeUndefined matcher", () => {
  const value = undefined;
  expect(value).toBeUndefined();
});

// toBeDefined
it("toBeDefined matcher", () => {
  const value = 1;
  expect(value).toBeDefined();
});

// toBeTruthy Truthyとは、trueと評価される値のことです
it("toBeTruthy matcher", () => {
  const value = 1;
  expect(value).toBeTruthy();
});

// toBeFalsy Falsyとは、falseと評価される値のことです
it("toBeFalsy matcher", () => {
  const value = 0;
  expect(value).toBeFalsy();
});

// toBeGreaterThan　GreaterThanとは、大きいという意味です
it("toBeGreaterThan matcher", () => {
  const value = 10;
  expect(value).toBeGreaterThan(9);
});

// toBeGreaterThanOrEqual GreaterThanOrEqualとは、以上という意味です
it("toBeGreaterThanOrEqual matcher", () => {
  const value = 10;
  expect(value).toBeGreaterThanOrEqual(10);
});

// toBeLessThan LessThanとは、小さいという意味です
it("toBeLessThan matcher", () => {
  const value = 10;
  expect(value).toBeLessThan(11);
});

// toBeLessThanOrEqual LessThanOrEqualとは、以下という意味です
it("toBeLessThanOrEqual matcher", () => {
  const value = 10;
  expect(value).toBeLessThanOrEqual(10);
});

// toBeCloseTo CloseToとは、近いという意味です
it("toBeCloseTo matcher", () => {
  const value = 0.1 + 0.2;
  expect(value).toBeCloseTo(0.3, 2);
});
