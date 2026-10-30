import { calculator } from "./calculator";

test("add(2, 2) should be equal to 4", () => {
    expect(calculator.add(2, 2)).toBe(4)
})

test("substract(2, 2) should be equal to 0", () => {
    expect(calculator.substract(2, 2)).toBe(0)
})

test("multiply(4, 2) should be equal to 8", () => {
    expect(calculator.multiply(4, 2)).toBe(8)
})

test("divde(8, 4) should be equal to 2", () => {
    expect(calculator.divide(8, 4)).toBe(2)
})