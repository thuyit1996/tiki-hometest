import React from "react";

interface IProps<T> {
  draggable: boolean,
  rowIndex: number,
  cellIndex: number,
  data: number,
  onDragStart: (data: T) => React.DragEventHandler,
  onDragOver: (data: T) => React.DragEventHandler,
  onDrop: (data: T) => React.DragEventHandler,
  size: number,
}

const GridItem: React.FC<IProps<{ rowIndex: number, cellIndex: number }>> =
  ({ draggable, rowIndex, cellIndex, data, onDragStart, onDragOver, onDrop, size }) => {
    const getClassNameForGridItem = () => {
      if (size <= 5) return 'w-100';
      else if (size < 7) return 'w-80';
      else if (size < 9) return 'w-70'
      else return 'w-50'
    }
    return (
      <div
        className={`grid-item  ${getClassNameForGridItem()}`
        }
        draggable={draggable}
        onDragStart={onDragStart({ rowIndex, cellIndex })}
        onDragOver={onDragOver({ rowIndex, cellIndex })}
        onDrop={onDrop({ rowIndex, cellIndex })}
      >
        {data}
      </div >
    );
  };

export default GridItem;
