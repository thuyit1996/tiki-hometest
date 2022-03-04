import React from "react";
import { GridItem as DragItem } from "react-grid-dnd";

interface IProps {
  item: number;
}

const GridItem: React.FC<IProps> = ({ item }) => {
  return (
    <DragItem key={item} className="grid-item">
      <div
        className="item"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {item}
      </div>
    </DragItem>
  );
};

export default GridItem;
