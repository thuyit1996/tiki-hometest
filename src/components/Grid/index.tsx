import React from "react";
import { GridContextProvider, GridDropZone } from "react-grid-dnd";
import GridItem from "./GridItem";
interface IProps {
  values: number[];
  onChange: (
    sourceId: string,
    sourceIndex: number,
    targetIndex: number,
    targetId?: string
  ) => void;
  size: number;
}

const Grid: React.FC<IProps> = ({ values, onChange, size }) => {
  return (
    <GridContextProvider onChange={onChange}>
      <GridDropZone
        id="items"
        boxesPerRow={size}
        rowHeight={100}
        style={{ height: "600px" }}
        className="grid-section"
      >
        {values.map((item) => (
          <GridItem item={item} key={item} />
        ))}
      </GridDropZone>
    </GridContextProvider>
  );
};

export default React.memo(Grid);
