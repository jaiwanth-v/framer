import React, { useContext } from "react";
import "./Frame.scss";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { AppContext } from "../../Context/App.context";
import { TOGGLE_EDIT } from "../../Reducer/types";

interface Props {}

const Frame: React.FC<Props> = () => {
  const { state, dispatch } = useContext(AppContext);

  const handleChange = (
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: any;
    }>
  ) => {
    dispatch({ type: TOGGLE_EDIT, payload: "" });
  };
  return (
    <div className="vh-100 frame-container m-4">
      <FormControl className="form-container mb-4">
        <Select
          value={Number(state.edit)}
          className="select"
          variant="outlined"
          onChange={handleChange}
        >
          <MenuItem value={1}>Edit Mode</MenuItem>
          <MenuItem value={0}>Preview Mode</MenuItem>
        </Select>
      </FormControl>
      <div className="frame"></div>
    </div>
  );
};

export default Frame;
