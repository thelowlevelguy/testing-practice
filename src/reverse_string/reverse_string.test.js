import { reverseString } from "./reverse_string";

test("reverseString('hello') should be equal to 'olleh'", () => {
    expect(reverseString("hello")).toBe("olleh");
})