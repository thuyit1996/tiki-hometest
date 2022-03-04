import React, { useState } from "react";
import { swap } from "react-grid-dnd";
import useGenerateMatrix from "../../hooks/useGenerateMatrix";
import Grid from "../Grid";
import GenerateInput from "../GenerateInput";
import "./style.css";

const App = () => {
  const { values, updateValues, setMatrixSize, size } = useGenerateMatrix();

  const handleChange = (sourceId, sourceIndex, targetIndex, targetId) => {
    const swapValues = swap(values, sourceIndex, targetIndex);
    updateValues(swapValues);
  };

  return (
    <div className="box">
      <GenerateInput
        onSubmit={(value: string) => setMatrixSize(Number(value))}
      />
      <Grid values={values} onChange={handleChange} size={size} />
    </div>
  );
};
export default App;
