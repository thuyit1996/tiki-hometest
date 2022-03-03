

import { useEffect, useState } from "react"
import { generateMatrix } from "./helper";


const useGenerateMatrix = () => {

  const [value, setValue] = useState<number>(0);
  const [maxTrixValues, setMatrixValues] = useState<number[]>([]);

  const setMatrixSize = (matrixSize: number) => {
    setValue(matrixSize)
  }
  
  useEffect(() => {
    if (value) {
      setMatrixValues(generateMatrix(value) as number[])
    }
  }, [value]);

  return [
    maxTrixValues,
    setMatrixSize
  ]

}

export default useGenerateMatrix