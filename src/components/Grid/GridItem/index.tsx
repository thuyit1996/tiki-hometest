import React from "react";

interface IProps<T> {
  draggable: boolean,
  rowIndex: number,
  cellIndex: number,
  data: number,
  onDragStart: (data: T) => React.DragEventHandler,
  onDragOver: (data: T) => React.DragEventHandler,
  onDrop: (data: T) => React.DragEventHandler,
}

const GridItem: React.FC<IProps<{ rowIndex: number, cellIndex: number }>> =
  ({ draggable, rowIndex, cellIndex, data, onDragStart, onDragOver, onDrop }) => {
    return (
      <div
        className="grid-item"
        draggable={draggable}
        onDragStart={onDragStart({ rowIndex, cellIndex })}
        onDragOver={onDragOver({ rowIndex, cellIndex })}
        onDrop={onDrop({ rowIndex, cellIndex })}
      >
        {data}
      </div>
    );
  };

export default GridItem;
