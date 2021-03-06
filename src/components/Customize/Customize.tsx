import React, { useContext } from "react";
import "./Customize.scss";
import { AppContext } from "../../Context/App.context";
import ImageForm from "./Forms/ImageForm";
import ButtonForm from "./Forms/ButtonForm";
import HeadingForm from "./Forms/HeadingForm";
import TextForm from "./Forms/TextForm";
import ParagraphForm from "./Forms/ParagraphForm";
import LinkForm from "./Forms/LinkForm";
import InputForm from "./Forms/InputForm";
import DropdownOptions from "./Forms/DropdownOptions";
import DeleteComponent from "./Forms/DeleteComponent";
import { Fade } from "@material-ui/core";

interface Props {
  text?: string;
}

const Customize: React.FC<Props> = ({ text }) => {
  const { state } = useContext(AppContext);
  const optionsToShow = () => {
    const requiredItem = state.items.filter(
      (item: any) => item.id === state.activeId
    )[0];

    if (!requiredItem)
      return (
        <Fade in={state.activeId !== "canvas"}>
          <h4 className="text-center mt-5">
            Click on a component to customize
          </h4>
        </Fade>
      );

    switch (requiredItem.type) {
      case "image":
        return <ImageForm />;
      case "button":
        return <ButtonForm />;
      case "heading":
        return <HeadingForm />;
      case "text":
        return <TextForm />;
      case "paragraph":
        return <ParagraphForm />;
      case "link":
        return <LinkForm />;
      case "dropdown":
        return <DropdownOptions />;
      case "input":
        return <InputForm />;
      case "line":
      case "radio":
      case "checkbox":
      case "box":
      case "arrow":
        return <DeleteComponent />;
      default:
        return (
          <Fade in={state.activeId !== "canvas"}>
            <h4 className="text-center mt-5">
              Click on a component to customize
            </h4>
          </Fade>
        );
    }
  };

  return (
    state.edit && (
      <div id="customize" className="customize shadow p-4 mt-5">
        <h3 className="text-center p-2">Customize</h3>
        <div className="ml-2">{optionsToShow()}</div>
      </div>
    )
  );
};

export default Customize;
