const arrayClone = require("./arrayClone");

test("proply tests array", () => {
  const array = [1, 2, 3];
  expect(arrayClone(array)).toEqual(array);
  expect(arrayClone(array)).not.toBe(array);
});
