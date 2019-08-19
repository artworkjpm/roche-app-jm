import { add, FindPractitionerID } from "./Functions.js";

//is jest working?
test("add", () => {
  const value = add(1, 2);
  expect(value).toBe(3);
});

//Test if two id's will match:
test("FindPractitionerID", () => {
  expect(FindPractitionerID("2588A", "2588A")).toBe("Yes they match");
});
//Tested further in PractionerID.test.js
