const flatArray = (array: number[][]): number[] =>
  array.reduce((a, b) => [...a, ...b], []);

export const generateMatrix = (size: number) => {
  let count = 0;
  let columnIndex = 0;
  const limitNumber = size ** 2;
  const matrix = [...Array(size)].map((_) => Array(size).fill(0));
  while (1) {
    for (let index = 0; index < size; index++) {
      count++;
      matrix[index][columnIndex] = count;
      if (count === limitNumber) {
        return flatArray(matrix);
      }
    }
    columnIndex += 1;
    for (let index = size - 1; index >= 0; index--) {
      count++;
      matrix[index][columnIndex] = count;
      if (count === limitNumber) {
        return flatArray(matrix);
      }
    }
    columnIndex += 1;
  }
};
