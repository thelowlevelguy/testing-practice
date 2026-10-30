import {caesarCipher} from "./caesar_cipher"

test("caesarCipher('xyz', 3) should return 'abc'", () => {
    expect(caesarCipher('xyz', 3)).toBe('abc')
})


test("'HeLLo', 3) should return 'KhOOr'", () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr')
})

test("caesarCipher('Hello, World!', 3) should return 'Khoor, Zruog!'", () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})
