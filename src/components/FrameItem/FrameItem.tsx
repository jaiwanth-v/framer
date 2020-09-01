import React, { useEffect, useContext, memo } from "react";
import ButtonComponent from "../user-components/Button/Button";
import CheckboxComponent from "../user-components/CheckBox/Checkbox";
import DropdownComponent from "../user-components/Dropdown/Dropdown";
import ImageComponent from "../user-components/Image/Image";
import RadioComponent from "../user-components/RadioInput/RadioComponent";
import HeadingComponent from "../user-components/Heading/Heading";
import HorizontalLine from "../user-components/HorizontalLine/HorizontalLine";
import VerticalLine from "../user-components/VerticalLine/VerticalLine";
import InputComponent from "../user-components/Input Form/InputForm";
import TextComponent from "../user-components/Text/TextComponent";
import ParagraphComponent from "../user-components/Paragraph/ParagraphComponent";
import LinkComponent from "../user-components/Link/LinkComponent";
import $ from "jquery";
import "jqueryui";
import { v4 as uuid } from "uuid";
import { AppContext } from "../../Context/App.context";
import { SET_CURRENT } from "../../Reducer/types";
interface Props {
  type: string;
  id: typeof uuid;
}

const FrameItem: React.FC<Props> = ({ type, id }) => {
  const { dispatch } = useContext(AppContext);
  useEffect(() => {
    $(".resizable").resizable();
    $(".draggable").draggable({
      containment: ".containment-wrapper",
      scroll: false,
    });
  });
  const componentToShow = () => {
    switch (type) {
      case "button":
        return <ButtonComponent />;
      case "checkbox":
        return <CheckboxComponent />;
      case "dropdown":
        return <DropdownComponent />;
      case "image":
        return <ImageComponent />;
      case "radio":
        return <RadioComponent />;
      case "heading":
        return <HeadingComponent />;
      case "hline":
        return <HorizontalLine />;
      case "vline":
        return <VerticalLine />;
      case "input":
        return <InputComponent />;
      case "text":
        return <TextComponent />;
      case "paragraph":
        return <ParagraphComponent />;
      case "link":
        return <LinkComponent />;
      default:
        break;
    }
  };

  return (
    <div
      className="draggable"
      onClick={() => dispatch({ type: SET_CURRENT, payload: id })}
    >
      {componentToShow()}
    </div>
  );
};

export default memo(FrameItem);
