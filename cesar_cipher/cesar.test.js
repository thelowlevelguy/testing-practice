import { cesarCipher } from "./cesar";

test("cesarCipher('xyz', 3) should return 'abc'", () => {
    expect(cesarCipher('xyz', 3)).toBe('abc');
})

test("cesarCipher('heLLo', 3) should return 'khOOr'", () => {
    expect(cesarCipher('heLLo', 3)).toBe('khOOr');
})

test("cesarCipher('Hello, World!', 3) should return 'Khoor, Zruog!'", () => {
    expect(cesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})