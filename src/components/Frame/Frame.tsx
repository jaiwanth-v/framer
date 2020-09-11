import React, { useContext, createRef } from "react";
import "./Frame.scss";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { AppContext } from "../../Context/App.context";
import { TOGGLE_EDIT } from "../../Reducer/types";
import { v4 as uuid } from "uuid";
import FrameItem from "../FrameItem/FrameItem";
import Pdf from "react-to-pdf";
import { Button } from "@material-ui/core";

const ref: React.RefObject<HTMLDivElement> | null | undefined = createRef();

interface Props {}

interface Item {
  type: string;
  id: typeof uuid;
}

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
  console.log(state);
  return (
    <>
      <div className="vh-100 frame-container m-4">
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }: any) => (
            <Button variant="outlined" className="p-2 mr-4" onClick={toPdf}>
              Generate Pdf
            </Button>
          )}
        </Pdf>
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
        <div ref={ref} className="frame containment-wrapper">
          {state.items.map((v: Item, i: number) => (
            <FrameItem type={v.type} id={v.id} key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Frame;
