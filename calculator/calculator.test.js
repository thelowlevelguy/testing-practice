import { calculator } from "./calculator";

test("1 + 2 is equal to 3", () => {
    expect(calculator.add(1, 2)).toBe(3);
})

test("2 * 2 is equal to 4", () => {
    expect(calculator.multiply(2 ,2)).toBe(4);
})

test("2 - 2 is equal to 0", () => {
    expect(calculator.subtract(2, 2)).toBe(0);
})

test("2 / 2 is equal to 1", () => {
    expect(calculator.divide(2, 2)).toBe(1);
})