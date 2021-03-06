export const generateMatrix = (size: number) => {
  if (size) {
    let count = 0;
    let columnIndex = 0;
    const limitNumber = size ** 2;
    const matrix = [...Array(size)].map((_) => Array(size).fill(0));
    while (1) {
      for (let index = 0; index < size; index++) {
        count++;
        matrix[index][columnIndex] = count;
        if (count === limitNumber) {
          return matrix;
        }
      }
      columnIndex += 1;
      for (let index = size - 1; index >= 0; index--) {
        count++;
        matrix[index][columnIndex] = count;
        if (count === limitNumber) {
          return matrix;
        }
      }
      columnIndex += 1;
    }
  } else {
    return [];
  }
};
