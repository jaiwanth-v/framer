import React, { useEffect, useContext, memo } from "react";
import ButtonComponent from "../../user-components/Button/Button";
import CheckboxComponent from "../../user-components/CheckBox/Checkbox";
import DropdownComponent from "../../user-components/Dropdown/Dropdown";
import ImageComponent from "../../user-components/Image/Image";
import RadioComponent from "../../user-components/RadioInput/RadioComponent";
import HeadingComponent from "../../user-components/Heading/Heading";
import Line from "../../user-components/Line/Line";
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
import Box from "../../user-components/Box/Box";
interface Props {
  type: string;
  id: any;
}

function drag() {
  $(".draggable").draggable({
    disabled: false,
    containment: ".canvas-container",
    drag: function (event, ui: any) {
      const actualWidth = 1524;
      let width = document.documentElement.clientWidth;
      let zoomScale = width / actualWidth;
      var changeLeft = ui.position.left - ui.originalPosition.left; // find change in left
      var newLeft = ui.originalPosition.left + changeLeft / zoomScale; // adjust new left by our zoomScale

      var changeTop = ui.position.top - ui.originalPosition.top; // find change in top
      var newTop = ui.originalPosition.top + changeTop / zoomScale; // adjust new top by our zoomScale

      ui.position.left = newLeft;
      ui.position.top = newTop;
    },
  });
}
const FrameItem: React.FC<Props> = ({ type, id }) => {
  const { state, dispatch } = useContext(AppContext);
  useEffect(() => {
    if (state.edit) {
      $(".resizable").resizable({
        disabled: false,
        containment: ".canvas-container",
      });
      drag();
      window.addEventListener("resize", () => {
        drag();
      });
    } else {
      $(".resizable").resizable({ disabled: true });
      $(".draggable").draggable({
        disabled: true,
      });
    }
  }, [state.edit]);
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

      case "line":
        return (
          <div className="ml-4">
            <Line id={id} />
          </div>
        );
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
      case "box":
        return <Box />;
      default:
        break;
    }
  };

  return (
    <>
      <Fade in={true}>
        <div
          id={id}
          tabIndex={1}
          className={`${state.edit && "draggable-pointer"} ${
            type !== "arrow" && type !== "line" && "draggable"
          } position-absolute frame-item ${
            type !== "arrow" && type !== "line" && state.activeId === id
              ? "activeElement"
              : null
          }`}
          onClick={() => {
            if (state.edit && state.activeId !== id)
              dispatch({ type: SET_CURRENT, payload: id });
          }}
        >
          {componentToShow()}
        </div>
      </Fade>
    </>
  );
};

export default memo(FrameItem);
