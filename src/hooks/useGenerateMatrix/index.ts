import { useEffect, useState } from "react";
import { generateMatrix } from "./helper";

const useGenerateMatrix = () => {
  const [size, setSize] = useState(0);
  const [maxTrixValues, setMatrixValues] = useState<number[]>([]);

  const setMatrixSize = (matrixSize: number) => {
    setSize(matrixSize);
  };

  useEffect(() => {
    if (size) {
      setMatrixValues(generateMatrix(size) as number[]);
    }
  }, [size]);

  const updateMatrixValues = (values: number[]) => {
    setMatrixValues(values);
  };

  return {
    values: maxTrixValues,
    updateValues: updateMatrixValues,
    size,
    setMatrixSize,
  };
};

export default useGenerateMatrix;
