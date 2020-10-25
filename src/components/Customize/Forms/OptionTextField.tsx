import { TextField } from "@material-ui/core";
import React from "react";
import useInput from "../../../Hooks/useInput";

interface Props {
  index: number;
}

const OptionTextField: React.FC<Props> = ({ index }) => {
  const [option, handleOption] = useInput("");
  return (
    <TextField
      value={option}
      onChange={handleOption}
      label={`Option ${index}`}
      className="form-field animation a3"
    />
  );
};

export default OptionTextField;
