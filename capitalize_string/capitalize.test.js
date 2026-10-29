import {capitalize} from "./capitalize"

test("capitalize: mr is Mr", () => {
    expect(capitalize("mr")).toBe("Mr");
});