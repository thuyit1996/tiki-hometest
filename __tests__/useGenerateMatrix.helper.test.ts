import {
  generateMatrix,
  flatArray,
} from "../src/hooks/useGenerateMatrix/helper";

describe("Test flatArray", () => {
  it("Should be return an array after flat the matrix", () => {
    expect(
      flatArray([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ])
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});

describe("Test generateMatrix", () => {
  it("Should be return the array when get the array size", () => {
      console.log(generateMatrix(2));
    expect(generateMatrix(2)).toEqual([1, 4, 2, 3]);
  });
  it("Should be return empty array if haven't size param", () => {
    expect(generateMatrix("" as any)).toEqual([]);
  });
});
