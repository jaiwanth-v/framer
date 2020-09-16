import React, { useEffect, useContext, memo } from "react";
import ButtonComponent from "../../user-components/Button/Button";
import CheckboxComponent from "../../user-components/CheckBox/Checkbox";
import DropdownComponent from "../../user-components/Dropdown/Dropdown";
import ImageComponent from "../../user-components/Image/Image";
import RadioComponent from "../../user-components/RadioInput/RadioComponent";
import HeadingComponent from "../../user-components/Heading/Heading";
import HorizontalLine from "../../user-components/HorizontalLine/HorizontalLine";
import VerticalLine from "../../user-components/VerticalLine/VerticalLine";
import InputComponent from "../../user-components/Input Form/InputForm";
import TextComponent from "../../user-components/Text/TextComponent";
import ParagraphComponent from "../../user-components/Paragraph/ParagraphComponent";
import LinkComponent from "../../user-components/Link/LinkComponent";
import $ from "jquery";
import "jqueryui";
import { AppContext } from "../../../Context/App.context";
import { SET_CURRENT } from "../../../Reducer/actionTypes";
import { Fade } from "@material-ui/core";
import Arrow from "../../user-components/Arrow/Arrow";
interface Props {
  type: string;
  id: any;
}

const FrameItem: React.FC<Props> = ({ type, id }) => {
  const { state, dispatch } = useContext(AppContext);
  useEffect(() => {
    if (state.edit) {
      $(".resizable").resizable({
        disabled: false,
        containment: ".containment-wrapper",
      });
      $(".draggable").draggable({
        disabled: false,
        containment: ".containment-wrapper",
      });
    } else {
      $(".resizable").resizable({ disabled: true });
      $(".draggable").draggable({
        disabled: true,
      });
    }
  });
  const componentToShow = () => {
    switch (type) {
      case "button":
        return <ButtonComponent id={id} />;
      case "checkbox":
        return <CheckboxComponent id={id} />;
      case "dropdown":
        return <DropdownComponent id={id} />;
      case "image":
        return <ImageComponent id={id} />;
      case "radio":
        return <RadioComponent id={id} />;
      case "heading":
        return <HeadingComponent id={id} />;
      case "hline":
        return <HorizontalLine id={id} />;
      case "vline":
        return <VerticalLine id={id} />;
      case "input":
        return <InputComponent id={id} />;
      case "text":
        return <TextComponent id={id} />;
      case "paragraph":
        return <ParagraphComponent id={id} />;
      case "link":
        return <LinkComponent id={id} />;
      case "arrow":
        return <Arrow />;
      default:
        break;
    }
  };

  return (
    <>
      <Fade in={true}>
        <div
          className={`${state.edit && "draggable-pointer"} ${
            type !== "arrow" && "draggable"
          } position-absolute`}
          // style={{ top: `${[50 * (1 + Math.floor(Math.random() * 10))]}px` }}
          onClick={() => {
            if (state.edit) dispatch({ type: SET_CURRENT, payload: id });
          }}
        >
          {componentToShow()}
        </div>
      </Fade>
    </>
  );
};

export default memo(FrameItem);
