import React, { useState } from 'react';
import GenerateInput from './components/GenerateInput';
import useGenerateMatrix from './hooks/useGenerateMatrix';
import Grid from './components/Grid';
import './style.css';


const App = () => {
  const { values, updateValues, setMatrixSize } = useGenerateMatrix();

  const swapBoxes = <T extends { rowIndex: number, cellIndex: number }>(fromBox: T, toBox: T) => {
    const newValues = [...values];
    [newValues[fromBox.rowIndex][fromBox.cellIndex], newValues[toBox.rowIndex][toBox.cellIndex]] =
      [newValues[toBox.rowIndex][toBox.cellIndex], newValues[fromBox.rowIndex][fromBox.cellIndex]]
    updateValues(newValues)
  };

  const handleDragStart = ({ rowIndex, cellIndex }) => event => {
    let fromBox = JSON.stringify({ rowIndex, cellIndex });
    event.dataTransfer.setData("dragContent", fromBox);
  };

  const handleDragOver = () => event => {
    event.preventDefault();
    return false;
  };

  const handleDrop = ({ rowIndex, cellIndex }) => event => {
    event.preventDefault();

    let fromBox = JSON.parse(event.dataTransfer.getData("dragContent"));
    let toBox = { rowIndex, cellIndex };

    swapBoxes(fromBox, toBox);
    return false;
  };

  return (
    <div className='box'>
      <GenerateInput
        onSubmit={(value: string) => setMatrixSize(Number(value))}
      />
      <Grid handleDragOver={handleDragOver} handleDragStart={handleDragStart} handleDrop={handleDrop} values={values} />
    </div >
  )
}
export default App;
