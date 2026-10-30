import { capitalize } from "./capitalize";

test("capitalize of 'mr' should be equal to 'Mr'", () => {
    expect(capitalize("mr")).toBe("Mr");
})