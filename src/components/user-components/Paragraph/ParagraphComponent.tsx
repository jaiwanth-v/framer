import React from "react";
import { TextField } from "@material-ui/core";

interface Props {
  id: any;
}

const ParagraphComponent: React.FC<Props> = () => {
  return (
    <div>
      <TextField label="Paragraph" multiline rows={4} variant="outlined" />
    </div>
  );
};

export default ParagraphComponent;
