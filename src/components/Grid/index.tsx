import React from "react";
import GridItem from "./GridItem";

const Grid = ({ handleDragOver, handleDragStart, handleDrop, values }) => {
  return (
    <div className="grid-section">
      <table>
        <tbody>
          {
            values.map((row, rowIndex) => {
              return (
                <tr key={Math.random()}>
                  {
                    row.map((cell, cellIndex) => (
                      <td>
                        <GridItem
                          key={cell}
                          data={cell}
                          draggable={true}
                          onDragStart={handleDragStart}
                          onDragOver={handleDragOver}
                          onDrop={handleDrop}
                          rowIndex={rowIndex}
                          cellIndex={cellIndex}
                        />
                      </td>
                    ))
                  }
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default Grid;
