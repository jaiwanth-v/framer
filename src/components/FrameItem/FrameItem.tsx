import React from "react";
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

interface Props {
  type: string;
}

const FrameItem: React.FC<Props> = ({ type }) => {
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
  return <div>{componentToShow()}</div>;
};

export default FrameItem;
