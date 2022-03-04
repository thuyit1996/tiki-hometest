import React, { useState } from "react";

interface IProps {
  onSubmit: (value: string) => void;
}

const GenerateInput: React.FC<IProps> = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  return (
    <>
      <h1>Generate the matrix</h1>
      <form
        className="form-section"
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit(value);
        }}
      >
        <input
          type="text"
          placeholder="Input matrix size"
          value={value}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setValue(event.target.value)
          }
        />
        <input type="submit" value="Generate" />
      </form>
    </>
  );
};
export default GenerateInput;
