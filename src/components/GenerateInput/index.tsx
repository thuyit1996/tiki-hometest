import React, { useState } from "react";
import { inputErrorMessage } from "./helper";

interface IProps {
  onSubmit: (value: string) => void;
}

const GenerateInput: React.FC<IProps> = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const validate = () => {
    const errorMessage = inputErrorMessage(value);
    if (errorMessage) {
      alert(errorMessage);
    } else {
      onSubmit(value);
    }
  };

  return (
    <div>
      <form
        className="form-section"
        onSubmit={(event) => {
          event.preventDefault();
          validate();
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
    </div>
  );
};
export default GenerateInput;
