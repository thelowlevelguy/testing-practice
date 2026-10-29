import { reverse } from "./reverse";

test("hello in reverse equal olleh", () =>{
    expect(reverse("hello")).toBe("olleh");
});