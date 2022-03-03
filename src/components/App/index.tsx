
import React, { useState } from 'react';

import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap
} from "react-grid-dnd";
import useGenerateMatrix from '../../hooks/useGenerateMatrix';
import './style.css';

const App = () => {
  // const [items, setItems] = React.useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
  const [inputValue, setInputValue] = useState('');
  const [matrixValues, setMatrixSize] = useGenerateMatrix() as any;

  function onChange(sourceId, sourceIndex, targetIndex, targetId) {
    // const nextState = swap(items, sourceIndex, targetIndex);
    // setItems(nextState);
  }


  return (
    <div className="test">
      <input type="number" value={inputValue} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)} />
      <button onClick={() => setMatrixSize(Number(inputValue))}>Generate</button>
      <GridContextProvider onChange={onChange}>
        <GridDropZone
          id="items"
          boxesPerRow={Number(inputValue)}
          rowHeight={100}
          style={{ height: "400px" }}
        >

          {matrixValues.map(item => (
            <GridItem key={item} className="grid-item">
              <div className="item"
                style={{
                  width: "100%",
                  height: "100%"
                }}
              >
                {item}
              </div>
            </GridItem>
          ))}
        </GridDropZone>
      </GridContextProvider>
    </div>
  );
}
export default App